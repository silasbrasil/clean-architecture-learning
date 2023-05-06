import { Category } from "../value-objects";

export interface ICategoryRepository {
  create(): Promise<Category>;

  list(): Promise<Category[]>;

  findOne(name: string): Promise<Category>;
}
