class BankAccount {
  constructor(balance, interestRate, monthlyFee) {
    this.balance = balance;
    this.interestRate = interestRate / 100;
    this.monthlyFee = monthlyFee;
  }
  finishMonth() {
    //update balance
    this.interestAmount = (this.balance * this.interestRate) / 12; //interest amount
    this.balance = this.balance + this.interestAmount - this.monthlyFee;
    return this.balance;
  }
  deposit(cashDeposited) {
    this.balance += cashDeposited;
    return this.balance;
  }
  withdraw(cashWithdrawal) {
    if (cashWithdrawal > this.balance) {  //if money withdrawn is exceeds balance
      throw new Error("Not enough funds!");
    } else {
      this.balance -= cashWithdrawal;
      return this.balance;
    }
  }
}

module.exports = BankAccount;
