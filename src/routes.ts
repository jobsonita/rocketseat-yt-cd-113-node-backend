import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { ListAllCategoriesController } from "./controllers/ListAllCategoriesController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new ListAllCategoriesController().handle);

export { routes };
