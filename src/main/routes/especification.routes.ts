import { Router } from "express";
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationServices } from "../../modules/cars/services/CreateSpecificationServices";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationServices = new CreateSpecificationServices(
    specificationRepository
  );
  createSpecificationServices.execute({ name, description });
  return response.status(201).send();
});
export { specificationRoutes };
