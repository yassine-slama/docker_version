// tests/controllers/userController.test.js

const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app"); // Importez votre application Express

describe("User Controller", () => {
  it("should return user details by token", (done) => {
    const token = "your_valid_token_here";

    request(app)
      .get("/api/user")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("fullname");
        expect(res.body).to.have.property("email");

        done();
      });
  });

  it("should return 401 if token is not provided", (done) => {
    request(app).get("/api/user").expect(401).end(done);
  });

  it("should return 404 if user not found", (done) => {
    const token = "your_valid_token_here_but_without_user_id";

    request(app)
      .get("/api/user")
      .set("Authorization", `Bearer ${token}`)
      .expect(404)
      .end(done);
  });

  it("should return 401 if token is invalid", (done) => {
    const invalidToken = "invalid_token";

    request(app)
      .get("/api/user")
      .set("Authorization", `Bearer ${invalidToken}`)
      .expect(401)
      .end(done);
  });
});
