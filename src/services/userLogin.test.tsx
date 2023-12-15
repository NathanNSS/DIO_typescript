import { expect, test, vitest } from "vitest";
import { userLogin } from "./userLogin";

test("Espero que tenha uma chamada de alert!", () => {
    const mockAlert = vitest.fn()
    window.alert = mockAlert
    
    const name = "nathan"
    userLogin(name)

    expect(mockAlert).toHaveBeenCalledWith("Bem vindo " + name)
})