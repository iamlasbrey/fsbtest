const express = require('express');
const router = express.Router();
import { ValidateSchema } from '../middleware/validateSchema';
import {registerSchema} from '../Schema/registerSchema'
const { createAccount, ResolveAccount , getAllAccounts} = require("../controllers/accounts")


//Create Account Rout
router.post('/create',registerSchema, ValidateSchema, createAccount)

//Resolve Account Route
router.get('/:id', ResolveAccount)

//Get All Accounts
router.get('/',  getAllAccounts)

module.exports = router