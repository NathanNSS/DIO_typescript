import { describe, expect, test, vitest, vi } from "vitest";
import { userLogin } from "./userLogin";

window.alert =  vitest.fn() //remove o alerta do alert no terminal

describe("Testes das funcionalidade de login", ()=>{

    const email = "nathan@email.com"
    
    test("Espero que fazer o login passando informações validas", async () => {
        
        const response = await userLogin(email)

       expect(response).toBeTruthy()
    })
    
    test("Não deve ser possível fazer login com email invalido", async () => {

        vi.resetAllMocks()
        
        const response = await userLogin('joao@email.com')

        expect(response).toBeFalsy()
    })
})   
