import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

const account: PeopleAccount = new PeopleAccount(11, "Nathan", 123456)
const account2: CompanyAccount = new CompanyAccount("Nathan", 123456)

console.log(account)
console.log(account2)
account2.deposit()