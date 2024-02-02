import {Request} from "express"
import { UserModel } from "../models/UserModel"
import { UserController } from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { MockUserModel } from "../__mocks__/mockUserModel.mock"
import { fakeUser } from "../data.example"


const mockUserModel : Partial<UserModel> = {
    getUser: jest.fn(),
    createUser: jest.fn(),
    deleteUser: jest.fn(),
}

jest.mock("../models/UserModel", ()=>{
    return {
        UserModel:  jest.fn().mockImplementation(()=> {
            return {
                createUser: jest.fn()
            }
        })
    }
})

describe("UserController", ()=>{

    const userController = new UserController()

    const mockRequest = {
        body:fakeUser
    } as Request

    test("Deve adicionar um novo usuário", async ()=>{

        const mockResponse = makeMockResponse()
        await userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message:"Usuário Criado com Sucesso"})
    })

    test("Deve retornar um error caso o usuário não informe o email ou name", async ()=>{
        mockRequest.body.name = undefined
        mockRequest.body.email = undefined

        const mockResponse = makeMockResponse()
        await userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message: "Bad Request, name or email not provided"})
    })

    test("Deve chamar a função 'getUser' ao consultar usuários ", async ()=>{
        jest.resetAllMocks()

        // const spyGetAllUser = jest.spyOn(mockUserModel, "getUser")

        // const mockResponse = makeMockResponse()
        // await userController.getAllUser(mockRequest, mockResponse)

        // expect(spyGetAllUser).toHaveBeenCalled()
    })

    test("Deve deletar todos os usuários", async ()=>{
        jest.resetAllMocks()

        // const mockResponse = makeMockResponse()

        // await userController.createUser(mockRequest, mockResponse)
        // expect(mockUserModel.db).toHaveLength(1)

        // await userController.deleteUser(mockRequest, mockResponse)
        // expect(mockUserModel.db).toHaveLength(0)
    })

})

