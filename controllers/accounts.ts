import { Request, Response } from 'express';
const _ = require("lodash");

interface BankAccount {
    accountNumber: number;
    accountName: string;
    DateOfBirth: string;
    accountType: string;
    initialBalance: number;
  }

const BankAccounts:BankAccount[]  = []

//Create Account
const createAccount=async(req: Request, res: Response) => {

    const accountNumber = _.random(1000000000,9999999999)

    for (let i = 0; i < BankAccounts.length; i++) {
        const element = BankAccounts[i].accountNumber;
        if(element == accountNumber){
            return res.status(404).send("Account Number already exist")
        }
    }
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
            
            BankAccounts.push(newAccountDetails)
            res.status(201).send({
                    "status": "success",
                    "message": "Account created successfully",
                    "data": response
            })
            
        } catch (error) {
            res.status(500).send(error)
        }
    }


//Fetch Account by ID
    const ResolveAccount = (req: Request, res: Response) => {
        
        try {
            const id = parseInt(req.params.id) 
            function findAccountByNumber(accountNumber: number): BankAccount | undefined {
                for (const account of BankAccounts) {
                  if (account.accountNumber === accountNumber) {
                    return account;
                  }
                }
                return undefined;
              }
              const account = findAccountByNumber(id)
    
              if(account) res.status(200).send({
                    "status": "success",
                    "message": "Account fetched successfully",
                    "data": account
              })
              else res.status(404).send("Account not found")
            
        } catch (error) {
            res.status(500).send(error)    
        }
    }


//Fetch All Accounts
    const getAllAccounts = (req: Request, res: Response) => {
            try {
                if(BankAccounts.length === 0) {
                    return res.status(404).send("No Accounts Found")
                }else{
                    return res.status(200).send({
                        "status": "success",
                        "message": "All accounts fetched successfully",
                        "data":{
                            "Star Bank Accounts": BankAccounts
                        }
                    })
                }         
            } catch (error) {
                res.status(500).send({msg: error})
            }
    }

module.exports = {
    createAccount,
    ResolveAccount,
    getAllAccounts
}