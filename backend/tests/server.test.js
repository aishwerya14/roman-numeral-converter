const request = require("supertest");
const http = require("http");

let serverInstance;
const realListen = http.Server.prototype.listen;
http.Server.prototype.listen = function (...args) {
  serverInstance = realListen.apply(this, args);
  return serverInstance;
};

require("../server.js");

afterAll((done) => {
  if (serverInstance) {
    serverInstance.close(done);
  } else {
    done();
  }
});

describe("Server API", () => {
  test("GET /romannumeral?query=10 returns X", async () => {
    const res = await request("http://localhost:8080").get("/romannumeral?query=10");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ input: "10", output: "X" });
  });

  test("Handles invalid input (non-numeric)", async () => {
    const res = await request("http://localhost:8080").get("/romannumeral?query=abc");
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "Invalid input" });
  });

  test("Handles out-of-range input (4000)", async () => {
    const res = await request("http://localhost:8080").get("/romannumeral?query=4000");
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "Invalid input" });
  });
});
