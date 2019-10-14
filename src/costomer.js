// let MyBank = require("./bank");
class Customer {
  constructor(balance, interestRate, monthlyFee, accountNum, costomerPassword) {
    this.mybank = new Bank(balance, interestRate, monthlyFee, accountNum);
    this.costomerPassword = costomerPassword;
  }

  setPassword(secretPassword) {
    this.costomerPassword = secretPassword;
  }

  withdraw(bankAccountNumber, amount, secretPassword) {
    if (this.costomerPassword === secretPassword) {
      this.mybank.withdraw(bankAccountNumber, amount);
    }
  }

  deposit(bankAccountNumber, amount) {
    bankAccountNumber.mybank.deposit(amount);
  }

  transfer(fromBankAccountNumber, toBankAccountNumber, amount, secretPassword) {
    if (this.costomerPassword == secretPassword) {
      fromBankAccountNumber.withdraw(amount);
      toBankAccountNumber.deposit(amount);
    } 
  }
}


// let jesus = new Customer (500, 12, 40, 3355, 'second');
// let mary = new Customer(600, 15, 30, 2255, 'third');

// jesus.transfer(2255, 3355, 100, 'third');




