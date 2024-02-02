import { EntityManager } from "typeorm"
import { UserRepository } from "./UserRepository"
import { User } from "../entities/UserEntity"
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"

describe("UserRepository", () => {
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser: User = {
        id_user: '12345',
        name: 'Test User',
        email: 'test@dio.com',
        password: 'password'
    }

    beforeAll(async ( ) => {
        managerMock = await getMockEntityManager({saveReturn: mockUser})
        userRepository = new UserRepository(managerMock as EntityManager )  
    })

    test('Deve cadastrar um novo usuário no banco de dados', async ()=>{
        const response = await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
        expect(response).toMatchObject(mockUser)
    })
    
    test('Deve buscar um usuário no banco de dados pelo seu "id" ', async ()=>{
        const response = await userRepository.getUser(mockUser.id_user)
        expect(managerMock.findOne).toHaveBeenCalled()
        //expect(response).toMatchObject(mockUser)
    })

})