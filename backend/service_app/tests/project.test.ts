// project API test cases.

import request from "supertest";
import app from "../src/app";

describe("Test cases for project APIs.", () => {
  // get all project list should return empty array
  test("GET should return status code 200", async () => {
    const response = await request(app).get("/project");
    const { body, statusCode } = response;
    expect(statusCode).toBe(200);
    expect(body.result).toEqual([]);
  });
  // get specific project detail should return 404,
  test("GET should return status code 404", async () => {
    const response = await request(app).get("/project/99999");
    const { body, statusCode } = response;
    expect(statusCode).toBe(404);
  });

  // create a new project.
  test("POST should return status code 201", async () => {
    const payload = {
      name: "Test project",
      description: "Test project description",
      startDate: new Date(),
    };
    const response = await request(app).post("/project").send(payload);
    const { body, statusCode } = response;
    expect(statusCode).toBe(201);
    expect(body.result).toEqual(
      expect.objectContaining({ id: expect.any(Number) })
    );
  });
  // update project
  let projectId: Number = 0;
  test("PUT should return 200", async () => {
    // list projects
    const response = await request(app).get("/project");
    const { body, statusCode } = response;
    expect(statusCode).toBe(200);
    expect(body.result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          description: expect.any(String),
          startDate: expect.any(String),
        }),
      ])
    );
    expect(body.result.length).toBeGreaterThan(0);
    // get first project
    let payload = body.result[0];
    payload.name = "Test case updated the name";
    payload.description = "Test case updated the description";
    payload.startDate = new Date();
    projectId = payload.id;
    const updateResponse = await request(app).put("/project").send(payload);
    expect(updateResponse.statusCode).toBe(200);
  });
  // assign an employee to projects.
  test("PATCH should return 200", async () => {
    const employee = {
      id: "test12",
      name: "Test Account",
    };
    const response = await request(app).post("/employee").send(employee);
    expect(response.statusCode).toBe(201);
    expect(response.body.result).toEqual(
      expect.objectContaining({ id: "test12" })
    );
    expect(projectId).toBeGreaterThan(0);
    // assign a user
    const payload = {
      employees: [employee],
    };

    const updateResponse = await request(app)
      .patch("/project/" + projectId)
      .send(payload);
    const { body, statusCode } = updateResponse;
    expect(statusCode).toBe(200);
    // validate employee length
    expect(body.result.employees.length).toBeGreaterThan(0);
  });
  // remove  employee from project.
  test("PATCH should return 200", async () => {
    // assign a user
    const payload = {
      employees: [],
    };
    const response = await request(app)
      .patch("/project/" + projectId)
      .send(payload);
    const { body, statusCode } = response;
    expect(statusCode).toBe(200);

    // validate employee length
    expect(body.result.employees.length).toBe(0);
  });
});
