import { describe, expect, test, vi } from "vitest";
import { changeLocalStorage, getAllLocalStorage, obj_localStorage, setLocalStorage } from "./storage";

describe("Storage",()=>{

    const spyStorage = vi.spyOn(Storage.prototype,"setItem")

    test("Deve retorna o objeto do localStorage",()=>{
        const spyStorage = vi.spyOn(Storage.prototype,"getItem")

        getAllLocalStorage()
        expect(spyStorage).toHaveBeenCalled()
    })
   
    test("Deve criar um objeto no localStorage",()=>{
        
        setLocalStorage()
        expect(spyStorage).toHaveBeenCalledWith("@diobank", JSON.stringify(obj_localStorage))
    })

    test("Deve alterar um objeto no localStorage",()=>{
        vi.resetAllMocks()
        
        changeLocalStorage(obj_localStorage)
        expect(spyStorage).toHaveBeenCalledOnce()
    })
})