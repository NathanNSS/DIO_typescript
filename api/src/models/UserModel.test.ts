import { fakeUser } from "../data.example"
import { IUser, UserModel } from "./UserModel"
import * as jwt from "jsonwebtoken"



jest.mock("jsonwebtoken")
jest.mock("../repositories/UserRepository")
jest.mock("../database/orm.config", () => {
    initialize: jest.fn()
})

const mockUserRepository = require("../repositories/UserRepository")

describe("UserModel", () => {
    const userModel = new UserModel(mockUserRepository)

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("Deve criar um usuário", async () => {
        jest.resetAllMocks()

        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(fakeUser))

        const response = await userModel.createUser(fakeUser)

        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toEqual(fakeUser)
    })

    test("Deve retornar o token do usuário", async () => {
        jest.spyOn(userModel, "getAuthenticatedUser").mockImplementation(() => Promise.resolve({ id_user: fakeUser.id_user!, ...fakeUser }))
        jest.spyOn(jwt, "sign").mockImplementation(() => "token")

        const token = await userModel.getToken(fakeUser.email, fakeUser.password)

        expect(token).toBe('token')
    })

    test("Deve retornar um error caso não seja fornecido as informações obrigatórias", async () => {

        await expect(userModel.getToken("", undefined!)).rejects.toThrow()

    })
    
    test("Deve retornar um error caso não encontre um usuário", async () => {

        jest.spyOn(userModel, "getAuthenticatedUser").mockImplementation(() => Promise.resolve(null))
        await expect(userModel.getToken("usuárioInvalido", "coxinha123"!)).rejects.toThrow()

    })
})