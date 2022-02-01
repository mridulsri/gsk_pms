import { EmployeeDto } from "./../../employee/dto/employee.dto";
export interface ProjectDto {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  employees?: Array<EmployeeDto>;
}
