import { Application, Request, Response } from "express";
import { AppRoutesConfig } from "../../configs/app.routes.config";
import projectController from "./controllers/project.controller";
import projectMiddleware from "./middleware/project.middleware";

export class ProjectRoutes extends AppRoutesConfig {
  constructor(app: Application) {
    super(app, "project");
  }

  configureRoutes(): Application {
    // get project list
    this.app
      .route("/project")
      .get(projectController.listProjects)
      .post(
        projectMiddleware.validateRequiredFields,
        projectController.addProject
      )
      .put(projectController.updateProject);
    // get project detail by id
    this.app.route("/project/:id").get(projectController.getProjectById);
    this.app
      .route("/project/:id")
      .patch(projectController.updateProjectEmployee);

    return this.app;
  }
}
