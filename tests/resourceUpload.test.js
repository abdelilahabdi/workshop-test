require("dotenv").config({ quiet: true });

const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../src/app");
const User = require("../src/models/User");
const connectDB  = require("../src/config/db");

describe("Upload refusé sans droit", () => {
  let token;

  beforeAll(async () => {
    await connectDB();

    const user = await User.findOne({
      role: "learner",
      status: "active",
    });

    if (!user) {
      throw new Error("No active learner found in database");
    }

    token = jwt.sign(
      { sub: user._id.toString() },
      process.env.JWT_SECRET
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("should refuse upload for a learner", async () => {
    const response = await request(app)
      .post("/api/modules/6abe8bb6efbf702dbf00166c/resources")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(403);

    expect(response.body.message).toBe(
      "You do not have permission to access this resource"
    );
  });
});