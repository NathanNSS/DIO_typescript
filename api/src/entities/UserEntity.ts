import {randomUUID} from "node:crypto"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User{
    constructor(name:string, email:string, password:string){
        this.id_user = randomUUID()
        this.name = name
        this.email = email
        this.password = password
    }

    @PrimaryGeneratedColumn("uuid")
    id_user: string
 
    @Column({nullable: false})
    name: string
 
    @Column({nullable: false})
    email: string
 
    @Column({nullable: false})
    password: string
}