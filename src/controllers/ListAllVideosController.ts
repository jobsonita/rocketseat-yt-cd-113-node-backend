import { Request, Response } from "express";

import { ListAllVideosService } from "../services/ListAllVideosService";

export class ListAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new ListAllVideosService();

    const videos = await service.execute();

    return response.json(videos);
  }
}
