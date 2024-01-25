import {Request} from "express"
import { UserModel } from "../models/UserModel"
import { UserController } from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { MockUserModel } from "../__mocks__/mockUserModel.mock"


describe("UserController", ()=>{

    const mockUserModel = new MockUserModel()
    const userController = new UserController(mockUserModel)

    const mockRequest = {
        body:{
            name:"nathan",
            email:"nathan@email.com"
        }
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

    test("Deve chamar a função 'getAllUser' ao consultar usuários ", async ()=>{
        jest.resetAllMocks()

        const spyGetAllUser = jest.spyOn(mockUserModel, "getAllUser")

        const mockResponse = makeMockResponse()
        await userController.getAllUser(mockRequest, mockResponse)

        expect(spyGetAllUser).toHaveBeenCalled()
    })

    test("Deve deletar todos os usuários", async ()=>{
        jest.resetAllMocks()

        const mockResponse = makeMockResponse()

        await userController.createUser(mockRequest, mockResponse)
        expect(mockUserModel.db).toHaveLength(1)

        await userController.deleteUser(mockRequest, mockResponse)
        expect(mockUserModel.db).toHaveLength(0)
    })

})

