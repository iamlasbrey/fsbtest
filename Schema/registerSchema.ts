const {body} = require('express-validator');

//The Middleware Schema to Ensure inputs meet the requirements

const schema = [
    body('accountName')
        .isLength({min:3, max:100})
        .isString()
        .exists({checkFalsy: true})
        .withMessage('Account Name is required'),

    body('DoB')
        .trim()  
        .isDate()
        .withMessage('Must be a valid date in YYYY-MM-DD format'),

    body('accountType').custom((value:any) => {
            const types = ['savings', 'current', 'credit', 'fixed'];
            if (!types.includes(value.toLowerCase())) {
              throw new Error('Unknown Account Ttype.');
            }
            return true;
          }),

    body('initialBalance')
        .isInt({min:0, max:99999999999999})
        .withMessage('Initial Balance must be a number')
]

export {schema as registerSchema}