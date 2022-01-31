import { Request, Response } from "express";
import projectService from "../services/project.service";
import employeeService from "../../employee/services/employee.service";

class ProjectController {
  async listProjects(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 20;
    const projects = await projectService.list(page, size);
    // TODO: Need to refactor once included persistent database
    let response: Array<any> = [];
    for (const project of projects) {
      if (project.employees?.length) {
        const associatedEmployee = await employeeService.listByIds(
          project.employees
        );
        response.push({ ...project, employees: associatedEmployee });
      }
    }
    res.status(200).send({
      result: response,
      message: projects.length > 0 ? "records found" : "records not found",
    });
  }

  async getProjectById(req: Request, res: Response) {
    try {
      const projectId = Number(req.params.id || req.query.id);
      const project = await projectService.getById(projectId);
      if (project) {
        // TODO: Need to refactor once included persistent database
        let response: object = {};
        if (project.employees?.length) {
          const associatedEmployee = await employeeService.listByIds(
            project.employees
          );
          response = { ...project, employees: associatedEmployee };
        }
        res.status(200).send({ result: response, message: "record found" });
      } else {
        res.status(404).send({
          result: null,
          message: "no record is available",
        });
      }
    } catch (error) {
      //TODO: Need to add error handling
      res.status(500).send("service error...!");
    }
  }

  async addProject(req: Request, res: Response) {
    try {
      const project = await projectService.create(req.body);
      res.status(201).send({
        result: project,
        message: "record added",
      });
    } catch (error) {
      //TODO: Need to add error handling
      res.status(500).send("service error...!");
    }
  }

  async updateProject(req: Request, res: Response) {
    try {
      const project = await projectService.update(req.body);
      if (project !== null) {
        let response: object = { ...project };
        if (project.employees?.length) {
          const associatedEmployee = await employeeService.listByIds(
            project.employees
          );
          response = { ...project, employees: associatedEmployee };
        }
        res.status(200).send({
          result: response,
          message: "record updated",
        });
      } else {
        res.status(404).send({
          result: req.body,
          message: "no record is available",
        });
      }
    } catch (error) {
      //TODO: Need to add error handling
      res.status(500).send("service error...!");
    }
  }

  async updateProjectEmployee(req: Request, res: Response) {
    try {
      const projectId = Number(req.params.id || req.query.id);
      let project = await projectService.getById(projectId);
      if (project) {
        project.employees = req.body.employees;
        const updatedProject = await projectService.update(project);
        let response: object = { ...project };
        if (updatedProject && updatedProject.employees?.length) {
          const associatedEmployee = await employeeService.listByIds(
            updatedProject.employees
          );
          response = { ...project, employees: associatedEmployee };
        }
        res.status(200).send({
          result: response,
          message: "record updated",
        });
      } else {
        res.status(404).send({
          result: null,
          message: "no record is available",
        });
      }
    } catch (error) {
      //TODO: Need to add error handling
      res.status(500).send("service error...!");
    }
  }
}

export default new ProjectController();
