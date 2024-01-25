import { IUser, UserModel } from "./UserModel"

const fakeUser = {
    name:"nathan soares",
    email:"nathan@email.com"
} 

describe("UserModel",()=>{
    const mockerDB:IUser[] = []
    const userModel = new UserModel(mockerDB)

    test("Deve criar um usuário", async ()=>{
        jest.resetAllMocks()
        
        await userModel.createUser(fakeUser)
        expect(mockerDB[0]).toEqual(fakeUser)
    })
})