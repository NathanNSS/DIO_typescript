import { AuthController } from "./controller/AuthController"
import { UserController } from "./controller/UserController"
import {Router} from "express"
import { verifyAuth } from "./middlewares/verifyAuth"

const router = Router()

const userController = new UserController()
const authController = new AuthController()

router.post("/login", authController.login)

router.get("/user/:id", verifyAuth, userController.getUser)
router.post("/user", userController.createUser)
router.delete("/user/:id", userController.deleteUser)

export {router}