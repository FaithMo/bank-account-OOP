let Bankacc = require("./bankAccount");
class Bank {
  constructor(balance, interestRate, monthlyFee, accountNum) {
    this.bankAccount = new Bankacc(balance, interestRate, monthlyFee);
    this.accountNum = accountNum; //10 Digits
    this.accounts = [];
    this.accounts.push({
      accountNumber: this.accountNum,
      bankAccount: this.bankAccount,
    });
  }
  createAccounts(balance, interestRate, monthlyFee, accountNumber) {
    this.bankAccount = new Bankacc(balance, interestRate, monthlyFee);
    this.accountNum = accountNumber; //10 Digits
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

let faith = new Bank(500, 12, 50, 4455);
faith.createAccounts(500, 12, 40, 3355);
faith.createAccounts(600, 15, 30, 2255);
//console.log(faith.bankAccount);
//console.log(faith.accounts);


//console.log(Bank.createAccounts.accounts);

faith.transfer(2255, 3355, 100);

console.log(faith.accounts[1].bankAccount.balance);


module.exports = Bank;
