/*
   Filename: SophisticatedCode.js

   Description: 
   This code is a simulation of a banking system. It allows users to create accounts, deposit money, withdraw money, and check their account balance. It also includes features like interest calculation and transaction history.

   Author: John Doe
*/

// Bank class represents the banking system
class Bank {
  constructor() {
    this.accounts = [];
  }

  // Create a new account
  createAccount(name, initialBalance) {
    const account = new BankAccount(name, initialBalance);
    this.accounts.push(account);
    return account;
  }

  // Find an account by name
  findAccountByName(name) {
    return this.accounts.find(account => account.name === name);
  }
}

// BankAccount class represents an account in the banking system
class BankAccount {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.transactions = [];
  }

  // Deposit money into the account
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(new Transaction("Deposit", amount));
  }

  // Withdraw money from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(new Transaction("Withdrawal", -amount));
    } else {
      console.log("Insufficient funds!");
    }
  }

  // Calculate the interest earned by the account
  calculateInterest(interestRate) {
    const interest = this.balance * interestRate;
    this.deposit(interest);
    this.transactions.push(new Transaction("Interest", interest));
  }
}

// Transaction class represents a single transaction on an account
class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.timestamp = new Date();
  }
}

// Usage example
const bank = new Bank();

const account1 = bank.createAccount("John", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.calculateInterest(0.05);

const account2 = bank.createAccount("Jane", 2000);
account2.deposit(1000);
account2.withdraw(500);
account2.calculateInterest(0.05);

console.log("Account 1 balance:", account1.balance);
console.log("Account 2 balance:", account2.balance);