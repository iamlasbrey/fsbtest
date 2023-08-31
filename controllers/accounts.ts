import { Request, Response } from 'express';
const _ = require("lodash");

interface BankAccount {
    accountNumber: string;
    accountName: string;
    DoB: string;
    accountType: string;
    initialBalance: number;
  }

const BankAccounts:BankAccount[]  = []

const createAccount=(req: Request, res: Response) => {

    const accountNumber = _.random(1000000000,9999999999).toString()

    const newAccountDetails = {
        "accountName": req.body.accountName,
        "DoB": req.body.DoB,
        "accountType": req.body.accountType.toLowerCase(),
        "initialBalance": req.body.initialBalance,
        "accountNumber": accountNumber
    }
    
    try {
        res.status(201).send({createdSuccessfully: newAccountDetails})
        BankAccounts.push(newAccountDetails)
        
    } catch (error) {
        res.status(500).send(error)
        }
    }


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
    
              if(account) res.status(200).send(account)
              else res.status(404).send("Account not found")
            
        } catch (error) {
            res.status(500).send(error)    
        }
    }

    const getAllAccounts = (req: Request, res: Response) => {
            try {
                res.status(200).send({"First Bank Accounts": BankAccounts})
            } catch (error) {
                res.status(500).send(error)
            }
    }

module.exports = {
    createAccount,
    ResolveAccount,
    getAllAccounts
}