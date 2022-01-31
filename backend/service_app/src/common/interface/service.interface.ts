export interface IService {
  create: (param: any) => Promise<any>;
  update: (param: any) => Promise<any>;
  delete: (id: any) => Promise<any>;

  list: (page: number, size: number) => Promise<any>;
  getById: (id: any) => Promise<any>;
}
