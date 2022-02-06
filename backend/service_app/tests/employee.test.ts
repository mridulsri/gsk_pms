// employee API test cases.

import request from "supertest";
import app from "../src/app";

describe("Test cases employee APIs", () => {
  test("GET should return status code 200", async () => {
    const response = await request(app).get("/employee");
    const { body, statusCode } = response;
    expect(statusCode).toBe(200);
    expect(body.result).toEqual([]);
  });

  test("GET 404 if not found", () => {
    return request(app).get("/employee/9999").expect(404);
  });

  test("GET should return 201 status code", async () => {
    const payload = {
      id: "abc123",
      name: "Test User",
    };
    const response = await request(app).post("/employee").send(payload);
    const { body, statusCode } = response;
    expect(statusCode).toBe(201);
    expect(body.result).toMatchObject(payload);
  });

  test(" GET should return 200 status code", async () => {
    const response = await request(app).get("/employee");
    const { body, statusCode } = response;
    expect(statusCode).toBe(200);
    expect(body.result).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: "abc123" })])
    );
  });

  test("GET should returns 200 status code", async () => {
    const response = await request(app).get("/employee/abc123");
    const { body, statusCode } = response;
    expect(statusCode).toBe(200);
    expect(body.result).toEqual(expect.objectContaining({ id: "abc123" }));
  });

  it("GET [/employee] validate request body", () => {});
});
