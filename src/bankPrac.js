class Bank{
    constructor(balance, interest, monthlyFee, accountNum){
        //this.BankAccount = new BankAccount(balance, interest, monthlyFee);
        // super(balance, interest, monthlyFee);
        this.balance = balance;
        this.interest = interest;
        this.monthlyFee = monthlyFee;
        this.accountNum = accountNum;
    }
    withdraw(bankAccountNumber, amount){
        if(bankAccountNumber == this.accountNum){
            //super.withdraw(amount);
            if(amount>this.balance){
                this.balance += amount; 
                return this.balance;
            }else{
                throw new Error("Not enough funds!");
            }
         }else{
             throw new Error ("Cannot withdraw: Not the correct account!");
         }
    }

    deposit(bankAccountNumber, amount){
        if(bankAccountNumber == this.accountNum){
            //super.withdraw(amount);
            this.balance -= amount; 
            return this.balance;
        }else{
            throw new Error ("Cannot deposit: Not the correct account!");
        }
    }

    transfer(fromBankAccountNumber,toBankAccountNumber, amount){

        if(fromBankAccountNumber == this.accountNum) {             
            //this.withdraw(fromBankAccountNumber, amount);
            //this.deposit(toBankAccountNumber, amount);
            //toBankAccountNumber.deposit(toBankAccountNumber, amount);
            super.withdraw(amount);
            toBankAccountNumber.deposit(amount);
        }

    }

}

const acc = new Bank(1000, 2, 50, 12345);
const acc2 = new Bank(1000, 3, 40, 54321);

console.log("------------------------------");
// acc.deposit(12345, 100);
// console.log(acc.balance);
// acc2.withdraw(54321, 100);
// //toAccount.transfer(fromAccountNumber.toAccountNumber, amount)
// //acc2.transfer(acc. acc2. amount)

// acc2.transfer(12345, 54321, 100);
// console.log("withdraw from account: 900?");
// console.log(acc.balance);
// console.log("deposit into account: 1100?");
// console.log(acc2.balance);

class BankAccount extends Bank{
    constructor(balance, interestRate, monthlyFee){
        super(balance, interestRate, monthlyFee);
    }

    finishMonth(){ //update balance
        this.interestAmount = this.balance * this.interestRate / 12;  //interest amount
        this.balance = this.balance + this.interestAmount - this.monthlyFee; 
        return this.balance;
    }

    deposit(amount){
        super.deposit(amount);
        return this.balance;
    }

    withdraw(amount){
        if(amount > this.balance){ //if money withdrawn is exceeds balance
            throw new Error ("Not enough funds!");
        }else{
        super.withdraw(amount);
        return this.balance;
        }
    }
}

const bankAcc1 = new Bank(1000, 12, 50);

bankAcc1.deposit(123);
console.log(bankAcc1.balance);

