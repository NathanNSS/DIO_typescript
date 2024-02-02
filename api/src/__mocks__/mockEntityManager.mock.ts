import { EntityManager } from "typeorm";

interface IReturnManager {
    saveReturn?: object | [object];
    findOneReturn?: Object | null
}

export async function getMockEntityManager({
    saveReturn, 
    findOneReturn
}: IReturnManager):Promise<EntityManager>{

    const manager : Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(()=> Promise.resolve(saveReturn))
    manager.findOne = jest.fn().mockImplementation(()=> Promise.resolve(findOneReturn))

    return manager as EntityManager
}