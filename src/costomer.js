let MyBank = require("./bank");
class Customer {
  constructor(balance, interestRate, monthlyFee, accountNum, costomerPassword) {
    this.mybank = new MyBank(balance, interestRate, monthlyFee, accountNum);
    this.costomerPassword = costomerPassword;
  }

  setPassword(secretPassword) {
    this.costomerPassword = secretPassword;
  }

  withdraw(bankAccountNumber, amount, secretPassword) {
    if (this.costomerPassword === secretPassword) {
      this.mybank.withdraw(bankAccountNumber, amount);
    } else {
      throw new Error("Not the correct password!");
    }
  }

  deposit(bankAccountNumber, amount) {
    bankAccountNumber.mybank.deposit(amount);
  }

  transfer(fromBankAccountNumber, toBankAccountNumber, amount, secretPassword) {
    if (this.costomerPassword == secretPassword) {
      fromBankAccountNumber.withdraw(amount);
      toBankAccountNumber.deposit(amount);
    } else {
      throw new Error("Not ethe correct password!");
    }
  }
}




