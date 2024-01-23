export function soma(num:number | Array<number>, num2?: number):number{
    let sum 

    if(Array.isArray(num)){
       return num.reduce((acc, cur) => acc + cur,0)
    }else{sum = num}
    
    return  num2 ? sum  + num2 : sum + 10
}