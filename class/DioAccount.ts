export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status:boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName(): string {
        return this.name
    }

    deposit(value:number) {
        this.validateAccount()

        this.balance += value
        console.log("seu novo saldo: R$"+this.balance)
    }

    withDraw(value:number) {
        this.validateAccount()
        
        if(this.balance < value){
            throw new Error("Conta possui saldo inferior a valor do saque!")
        }

        this.balance -= value
        console.log(`Voce fez um saque de R$${value} na conta ${this.accountNumber}`)
    }

    validateAccount(){
        if(this.status){
            return this.status
        }

        throw new Error("Conta invalida :(")
    }
}