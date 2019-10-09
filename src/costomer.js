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
      throw new Error("Not the correct password!");
    }
  }
}

const faith = new Bank(1000, 12, 50, 12345, 5555555);
faith.setPassword(444444);
faith.withdraw(12345, 100, 444444);
faith.deposit(12345, 444444);




