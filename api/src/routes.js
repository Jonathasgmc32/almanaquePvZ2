import { Router } from "express";
import controllersPlantas from "./controllers/controllers.plantas.js";

const routes = Router();

routes.get("/plantas", controllersPlantas.Listar);
routes.post("/plantas", controllersPlantas.Inserir);
routes.put("/plantas/:id_planta", controllersPlantas.Editar);
routes.delete("/plantas/:id_planta", controllersPlantas.Excluir);

export default routes;