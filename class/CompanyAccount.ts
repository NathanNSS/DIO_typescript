import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan(value:number) {
        this.deposit(value)
        console.log("voce fez um emprestimo de R$"+value)
    }
}