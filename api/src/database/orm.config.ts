import { DataSource } from "typeorm"
import { User } from "../entities/UserEntity"

export const typeORM = new DataSource({
    type: "sqlite",
    database: './src/database/db.sqlite',
    migrations: ["./src/database/migrations/*.ts"],
    entities:[User]
})

typeORM.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })