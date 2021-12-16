import { getRepository } from "typeorm";

import { Category } from "../entities/Category";

export class ListAllCategoriesService {
  async execute() {
    const repo = getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}
