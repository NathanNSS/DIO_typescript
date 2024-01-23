import { describe, expect, test, vitest, vi } from "vitest";
import { userLogin } from "./userLogin";

window.alert =  vitest.fn() //remove o alerta do alert no terminal

describe("Testes das funcionalidade de login", ()=>{

    const dataUser = {email:"nathan@email.com", password:"coxinha123"}
    
    test("Espero que fazer o login passando informações validas", async () => {
        
        const response = await userLogin(dataUser)

       expect(response).toBeTruthy()
    })
    
    test("Não deve ser possível fazer login com email invalido", async () => {

        vi.resetAllMocks()

        const response = await userLogin({...dataUser, email:'joao@email.com'})

        expect(response).toBeFalsy()
    })

    test("Não deve ser possível fazer login com senha invalida", async () => {

        vi.resetAllMocks()

        const response = await userLogin({...dataUser, password:'bob123'})

        expect(response).toBeFalsy()
    })
})   
