import { Router } from "express";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { ListAllCategoriesController } from "./controllers/ListAllCategoriesController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

import { CreateVideoController } from "./controllers/CreateVideoController";
import { ListAllVideosController } from "./controllers/ListAllVideosController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new ListAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new ListAllVideosController().handle);

export { routes };
