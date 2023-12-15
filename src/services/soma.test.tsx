import {test, expect} from 'vitest'
import {soma} from "./soma"

test("Deve somar 10 ao numero informado", ()=>{
    expect(soma(11)).toBe(21)
})

test("Deve somar os dois números informados", ()=>{
    expect(soma(10, 11)).toBe(21)
})

test("Deve somar todos os números informados", ()=>{
    expect(soma([5,5,5,5,1])).toBe(21)
})