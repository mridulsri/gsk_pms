import { Application } from "express";
import { AppRoutesConfig } from "../../configs/app.routes.config";
import employeeController from "./controllers/employee.controller";

export class EmployeeRoutes extends AppRoutesConfig {
  constructor(app: Application) {
    super(app, "project");
  }

  configureRoutes(): Application {
    // get project list
    this.app
      .route("/employee")
      .get(employeeController.listEmployees)
      .post(employeeController.addEmployee);
    // get project detail by id
    this.app.route("/employee/:id").get(employeeController.getEmployeeById);
    return this.app;
  }
}
