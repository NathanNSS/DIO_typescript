export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    status:boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    deposit() {
        if(this.validateAccount())
        console.log("Voce fez um deposito na conta " + this.accountNumber)
    }

    withDraw() {
        console.log("Voce fez um saque na conta " + this.accountNumber)
    }

    private validateAccount(){
        if(this.status){
            return this.status
        }

        throw new Error("Conta invalida :(")
    }
}