let Bankacc = require("./bankAccount");
class Bank {
  constructor(balance, interestRate, monthlyFee, accountNum) {
    
    this.accounts = [];
    
  }
  createAccounts(balance, interestRate, monthlyFee, accountNumber) {
    this.bankAccount = new Bankacc(balance, interestRate, monthlyFee);
    this.accountNum = accountNumber; 
    this.accounts.push({
      accountNumber: this.accountNum,
      bankAccount: this.bankAccount
    });
  }

  withdraw(bankAccountNumber, amount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (bankAccountNumber == this.accounts[i].accountNumber) {
        this.accounts[i].bankAccount.withdraw(amount);
      } 
    }
    
  }

  deposit(bankAccountNumber, amount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (bankAccountNumber == this.accounts[i].accountNumber) {
        this.accounts[i].bankAccount.deposit(amount);
      }
    }
  }

  transfer(fromBankAccountNumber, toBankAccountNumber, amount) {
    this.withdraw(fromBankAccountNumber, amount);
    this.deposit(toBankAccountNumber, amount);
  }
}

module.exports = Bank;
