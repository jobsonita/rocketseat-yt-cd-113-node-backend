import { Request, Response } from "express";

import { ListAllCategoriesService } from "../services/ListAllCategoriesService";

export class ListAllCategoriesController {
  async handle(request: Request, response: Response) {
    const service = new ListAllCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}
