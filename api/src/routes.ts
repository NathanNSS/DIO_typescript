import { UserController } from "./controller/UserController"
import {Router} from "express"

const router = Router()

const userController = new UserController()

router.get("/user", userController.getAllUser)
router.post("/user", userController.createUser)

export {router}