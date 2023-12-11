//Metodos de declara array
let arr = [1,2,3] //[1,2,3] 
const arr_ = new Array(1,2,3) //[1,2,3] !(e possivel construir o array vazios com espaços vazios assim: new Array(3) >> [undefined, undefined,undefined])

//Forma de tipagem dos array
const arr1: number[] = [1,2,3,4,5] 
const arr2: string[] = ["1","2","3","4",'5']

//Alguns dos metodos do array

arr1.push(6) //Metodo push adiciona um item ao final do array 
arr1.pop() //Metodo pop remove um item ao final do array

arr1.unshift(0) //Metodo unshift adiciona um item ao inicio do array
arr1.shift() //Metodo shift remove um item ao inicio do array


//Uma das propiedade do array

arr1.length //Uma propiedade do array que recebe seu tamanho


console.log(arr1)