import { IUser, UserModel, awaitFake } from "../models/UserModel";

export class MockUserModel implements UserModel {
    db: IUser[] = [];

    constructor() { }

    createUser(user: IUser): Promise<IUser[]> {
        this.db.push(user)
        return awaitFake(this.db)
    }

    getAllUser(): Promise<IUser[]> {
        return awaitFake(this.db)
    }

    deleteUser(){
        return awaitFake(this.db.length = 0)
    }
}