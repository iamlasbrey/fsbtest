import { Request, Response } from 'express';
const _ = require("lodash");

interface BankAccount {
    accountNumber: string;
    accountName: string;
    DateOfBirth: string;
    accountType: string;
    initialBalance: number;
  }

const BankAccounts:BankAccount[]  = []

//Create Account
const createAccount=async(req: Request, res: Response) => {

    const accountNumber = _.random(1000000000,9999999999).toString()


        const newAccountDetails = {
            "accountName": req.body.accountName.toLowerCase(),
            "DateOfBirth": req.body.DateOfBirth,
            "accountType": req.body.accountType.toLowerCase(),
            "initialBalance": req.body.initialBalance,
            "accountNumber": accountNumber
        }
    
        const response = {
            "accountNumber": accountNumber,
            "accountName": req.body.accountName.toLowerCase(),
            "accountType": req.body.accountType.toLowerCase(),
            "initialBalance": req.body.initialBalance,
        }
  
        try {
            res.status(201).send({createdSuccessfully: response})
            BankAccounts.push(newAccountDetails)
            
        } catch (error) {
            res.status(500).send(error)
            }
    }



//Fetch Account by ID
    const ResolveAccount = (req: Request, res: Response) => {
        try {
            const id = req.params.id
            
            function findAccountByNumber(accountNumber: string): BankAccount | undefined {
                for (const account of BankAccounts) {
                  if (account.accountNumber === accountNumber) {
                    return account;
                  }
                }
                return undefined;
              }
              const account = findAccountByNumber(id)
    
              if(account) res.status(200).send({"Your Account Details": account})
              else res.status(404).send("Account not found")
            
        } catch (error) {
            res.status(500).send(error)    
        }
    }


//Fetch All Accounts
    const getAllAccounts = (req: Request, res: Response) => {
            try {
                if(BankAccounts.length === 0) res.status(404).send("No Accounts Found")
                res.status(200).send({"Star Bank Accounts": BankAccounts})
            } catch (error) {
                res.status(500).send({msg: error})
            }
    }

module.exports = {
    createAccount,
    ResolveAccount,
    getAllAccounts
}