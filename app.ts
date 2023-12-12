import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { SpecialAccount } from "./class/SpecialAccount"

const account: PeopleAccount = new PeopleAccount(11, "Nathan", 123456)
const account2: CompanyAccount = new CompanyAccount("inc", 123)
const account3: SpecialAccount = new SpecialAccount("special", 999)

//People
account.deposit(20)
account.withDraw(15)

//Company
account2.deposit(10)
account2.getLoan(5)
account2.withDraw(15)

//Special
account3.special_deposit(10)
account3.withDraw(15)