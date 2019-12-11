let BankAccount = require('../src/bankAccount');
let Bank = require('../src/bank');
let Customer = require('../src/costomer');

describe("BANK", () => {
  describe("Bank account", () => {
    it("should update balance", () => {
      const result = new BankAccount(1000, 12, 50);
      let updatedBal = result.finishMonth();
      expect(updatedBal).toEqual(960);
    });

    it("should be able to withdraw", () => {
      const result = new BankAccount(1000, 12, 50);
      expect(result.withdraw(40)).toEqual(960);
    });

    it("should be able to deposit", () => {
      const result = new BankAccount(1000, 12, 50);
      expect(result.deposit(40)).toEqual(1040);
    });
  });

  describe("Bank", () => {
    it("should transfer into an account using their numbers", () => {
        let fnb = new Bank();
        fnb.createAccounts(500, 12, 40, 3355);
        fnb.createAccounts(600, 15, 30, 2255);
        fnb.transfer(2255, 3355, 100);
        expect(fnb.accounts[0].bankAccount.balance).toBe(600);
    });

    it("should withdraw form an account using its number", () => {
      let faith = new Bank();
      faith.createAccounts(500, 12, 50, 7755);
      faith.withdraw(7755, 40);
      expect(faith.bankAccount.balance).toBe(460);
    });

    it("should deposit into an account using its number", () => {
        let faith = new Bank();
        faith.createAccounts(500, 12, 50, 7755);
        faith.deposit(7755, 40);
        expect(faith.bankAccount.balance).toBe(540);
    });
  });

  describe("Customer", () => {
    it("should deposit into an account - no need for password", () => {
      let jesus = new Customer (500, 12, 40, 3355, 'second');
      let mary = new Customer(600, 15, 30, 2255, 'third');
      expect(mary.deposit(7755, 40)).toBe('deposit, 40');
    });

    it("should withdraw into an account using customer password", () => {
      let faith = new Customer(500, 12, 50, 7755, "ghee");
      expect(faith.withdraw(7755, 40, "ghee")).toBe('withdrawn, 40');
    });

    it("should transfer into an account using a password", () => {
      let faith = new Customer(500, 12, 50, 7755, "ghee");
      let anotherFaith = new Customer(500, 12, 50, 8855, "ghee2");
      expect(anotherFaith.transfer(7755, 8855, 40, "ghee")).toEqual("transferred, 40");
    });
  });
});
