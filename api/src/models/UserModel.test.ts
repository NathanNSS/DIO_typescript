import { fakeUser } from "../data.example"
import { IUser, UserModel } from "./UserModel"



jest.mock("../repositories/UserRepository")
jest.mock("../database/orm.config", ()=>{
    initialize: jest.fn()
})

const mockUserRepository = require("../repositories/UserRepository")

describe("UserModel",  () => {
    const userModel = new UserModel(mockUserRepository)
    
    test("Deve criar um usuário", async () => {
        jest.resetAllMocks()

        mockUserRepository.createUser = jest.fn().mockImplementation(()=> Promise.resolve(fakeUser))

        const response = await userModel.createUser(fakeUser)
        
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toEqual(fakeUser)
    })
})