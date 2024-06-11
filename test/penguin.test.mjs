// Importing testing framework
import { use, expect } from "chai";
import chaiHttp from "chai-http";
import request from "supertest";
const chai = use(chaiHttp);

// Importing Api to be tested on
import app from "../app.js";

// Config
use(chaiHttp);

describe("Penguin API", (done) => {
  it("expect to GET all penguins", (done) => {
    request(app)
      .get("/api/penguins")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
