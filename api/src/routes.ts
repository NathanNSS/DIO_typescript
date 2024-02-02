import { UserController } from "./controller/UserController"
import {Router} from "express"

const router = Router()

const userController = new UserController()

router.get("/user/:id", userController.getUser)
router.post("/user", userController.createUser)
router.delete("/user/:id", userController.deleteUser)

export {router}