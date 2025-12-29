import express from "express";
import * as userController  from "../controllers/user.controller.js";


const router = express.Router();

router.post("/users", userController.store);
router.get("/allusers", userController.index);
router.get("/users/:id", userController.edit );
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);

// router.get('/user/:id', userController.getUserById);
// router.put('/user/:id', userController.updateUser);
// router.delete('/user/:id', userController.deleteUser);

export default router;
