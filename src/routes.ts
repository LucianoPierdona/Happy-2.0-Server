import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";
import multer from "multer";
import UsersController from "./controllers/UsersController";

// Routes of the application
import uploadConfig from "./config/upload";

const routes = Router();
const upload = multer(uploadConfig);

// Create orphanage
routes.post(
  "/orphanages/create",
  upload.array("images"),
  OrphanagesController.create
);

// Get a specified Orphanage
routes.get("/orphanages/:id", OrphanagesController.show);

// Get all Orphanages
routes.get("/orphanages", OrphanagesController.index);

// Get accepted orphanages
routes.get("/orphanages/list/accepted", OrphanagesController.accepted);

// Get Pendents Orphanages
routes.get("/orphanages/list/pendents", OrphanagesController.pendents);

// Edit Orphanage
routes.post(
  "/orphanage/edit",
  upload.array("images"),
  OrphanagesController.editOrphanage
);

// Delete Orphanage
routes.delete("/orphanage/delete/:id", OrphanagesController.deleteOrphanage);

// Accept Orphanage
routes.post("/orphanage/accept/:id", OrphanagesController.acceptOrphanage);

// Register an User
routes.post("/register", UsersController.register);

// Login an User
routes.post("/login", UsersController.login);

// Get an User
routes.get("/user/:email", UsersController.show);

// Forgot Password
routes.post("/forgot-password", UsersController.forgotPassword);

// Change Password
routes.post("/change-password", UsersController.changePassword);

export default routes;

// {
//     "id": 4,
//     "name": "Lar das crianças",
//     "latitude": -28.8561167,
//     "longitude": -51.283754,
//     "about": "Sobre o orfanato muito legal",
//     "instructions": "Venha visitar",
//     "opening_hours": "Das 8h até as 18h",
//     "open_on_weekends": true
// }
