import { Request, Response } from "express";
import employeeService from "../services/employee.service";

class EmployeeController {
  async listEmployees(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 20;
    const employees = await employeeService.list(page, size);

    res.status(200).send({
      result: employees,
      message: employees.length > 0 ? "records found" : "records not found",
    });
  }

  async getEmployeeById(req: Request, res: Response) {
    try {
      const employeeId = (req.params.id || req.query.id) as string;
      const employee = await employeeService.getById(employeeId);
      if (employee) {
        res.status(200).send({ result: employee, message: "record found" });
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

  async addEmployee(req: Request, res: Response) {
    try {
      const employeeId = req.body.id;
      const employee = await employeeService.getById(employeeId);
      if (employee) {
        res.status(409).send({
          result: employee,
          message: "Record already exists",
        });
      } else {
        const newEmployee = await employeeService.create(req.body);
        res.status(201).send({
          result: newEmployee,
          message: "record added",
        });
      }
    } catch (error) {
      //TODO: Need to add error handling
      res.status(500).send("service error...!");
    }
  }
}

export default new EmployeeController();
