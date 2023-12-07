// Você usa variáveis como nomes simbólicos para os valores em sua aplicação

var var1 // Declara uma variável, opcionalmente, inicializando-a com um valor.

let var2  //Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const var3 = "car" //Declara uma constante de escopo de bloco, apenas de leitura.



/*

**Tipos primitivos do typescript

Em JavaScript, um primitivo (valor primitivo, tipo de dados primitivo) são dados que não são um objeto 
e não possuem métodos ou propriedades. Existem 7 tipos de dados primitivos.

Todos os primitivos são imutáveis (não podem ter o seu valor modificado), apenas substituidos!

 */

let variavel_string:string = "oi"; // Tipo string representa os dados textuais, conjunto de "elementos" de valores inteiros de 16 bits.
let variavel_number:number = 10; // Tipo number representar os dados numericos.
let variavel_bitInt:bigint = BigInt("9007199254740991");// Tipo para representar números inteiros maiores que 2^53, que é o maior número que o JavaScript consegue, com exatidão, representar com o tipo primitivo Number.
let variavel_boolean:boolean = true; // Tipo boolean representa uma entidade lógica e pode ter dois valores: true e false.
let variavel_symbol:symbol = Symbol("sym"); // Tipo symbol é um valor primitivo único e imutável. Um símbolo pode ser usado como o identificador para propriedades de objetos; esse é o único propósito do tipo de dado!
let variavel_null:null = null; // Tipo null é um literal que representa um valor nulo ou "vazio".
let variavel_undefined:undefined = undefined; // O valor global undefined representa um valor indefinido. Uma variável que não teve um valor atribuído é do tipo undefined. Um método, sentença e funções também retorna undefined se não tiver valores atribuido ou retornados. Em typeScript uma função retorna o tipo void caso não tenha retorno! 

//** Objetos

// Objeto não e um dado primitivo. Diferentemente dos tipos primitivos, os objetos podem armazenar coleções de dados, propriedades e são mutáveis.

let variavel_object:object = {}; // Objeto refere-se a uma estrutura de dados contendo dados(primitivos e outros) e instruções para se trabalhar com estes dados.
let variavel_array:Array<null> = []; // Array (arranjo ou vetor) é um conjunto de dados (que pode assumir os mais diversos tipos, desde do tipo primitivo a objeto). Arrays são utilizados para armazenar mais de um valor em uma única variável.

// **Outros tipos importantes do Typescript

// unknown =>	o tipo do topo.
// never =>	o tipo do final.
// object literal =>	eg { property: Type }
// void =>	um subtipo de undefined para ser usado como um tipo de retorno.
// T[] =>	arrays mutáveis, também escritos como Array<T>
// [T, T] =>	tuplas, que tem tamanho fixado mas são mutáveis
// (t: T) => U =>	funções