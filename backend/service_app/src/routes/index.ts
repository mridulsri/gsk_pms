import { Application } from "express";
import { AppRoutesConfig } from "../configs/app.routes.config";

// individual module's routes
import { ProjectRoutes } from "../modules/project/project.routes";
import { EmployeeRoutes } from "../modules/employee/employee.routes";

export class AppRouter {
  routes: Array<AppRoutesConfig> = [];
  constructor(private app: Application) {}

  initialize(): Array<AppRoutesConfig> {
    this.routes.push(new ProjectRoutes(this.app));
    this.routes.push(new EmployeeRoutes(this.app));

    return this.routes;
  }
}
