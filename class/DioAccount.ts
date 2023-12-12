export abstract class DioAccount {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit() {
        console.log("Voce fez um deposito na conta " + this.accountNumber)
    }

    withDraw() {
        console.log("Voce fez um saque na conta " + this.accountNumber)
    }
}