import {Request} from "express"
import { IUser, UserModel, awaitFake } from "../models/UserModel"
import { UserController } from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { MockUserModel } from "../__mocks__/mockUserModel.mock"


describe("UserController", ()=>{
    const mockUserModel:Partial<UserModel> = {
        createUser:jest.fn()
    }

    const userController = new UserController(new MockUserModel())

    test("Deve adicionar um novo usuário", async ()=>{
        const mockRequest = {
            body:{
                name:"nathan",
                email:"nathan@email.com"
            }
        } as Request

        const mockResponse = makeMockResponse()
        await userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message:"Usuário Criado com Sucesso"})
    })
})

