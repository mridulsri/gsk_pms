import { Application } from "express";

// class should extends by module routes.
export abstract class AppRoutesConfig {
  app: Application;
  name: string;
  constructor(app: Application, name: string) {
    this.app = app;
    this.name = name;
    this.configureRoutes();
  }

  getName() {
    return this.name;
  }
  // should implemented in module routes.
  abstract configureRoutes(): Application;
}
