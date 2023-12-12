import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    special_deposit(value: number): void {
        this.deposit(value + 10)
    }
}