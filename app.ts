//Metodos de declara array
let arr = [1,2,3] //[1,2,3] 
const arr_ = new Array(1,2,3) //[1,2,3] !(e possivel construir o array vazios com espaços vazios assim: new Array(3) >> [undefined, undefined,undefined])


//Alguns dos metodos do array

let res_arr = arr.find(num => num >= 2)//O metodo find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
res_arr = arr.findIndex(num => num >= 2)//O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

arr.forEach(num => {
    if(num >= 2) res_arr = num
})//O metodo forEach() executa uma dada função em cada elemento de um array. Não possue retorno!

arr.map(num => {
    if(num >= 2) console.log(num)
})//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. map sempre retorna um "novo" array com o mesmo comprimento do original!



console.log(res_arr)