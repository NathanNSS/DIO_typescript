interface Pessoa {
    nome: string
    idade: number
    profissao?: string
}

const pessoa: Pessoa = {
    nome: "Nathan",
    idade: 99,
}

const pessoa2: Pessoa = {
    nome: "Cleiton",
    idade: 88,
    profissao: "DEV"
}

const pessoas: Pessoa[] = [pessoa, pessoa2];
const pessoas2: Array<Pessoa> = [pessoa, pessoa2]; /* A Mesma declaração que a de cima */

const arrayNumerico: number[] = [1, 2, 3];
const arrayNumerico2: Array<number> = [1, 2, 3];/* A Mesma declaração que a de cima */

const arrayNumStr2: Array<number | string> = [1, 2, 3, '1', '2'];