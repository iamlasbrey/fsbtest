const {body, check} = require('express-validator');

//The Middleware Schema to Ensure inputs meet the requirements

const schema = [
    check('accountName')
        .notEmpty()
        .escape()
        .withMessage('Name is Required')
        .isLength({min: 3,max:280})       
        .withMessage('Name must be between 3 and 280 characters')
        .matches(/^[A-Za-z\s]*$/)
        .trim(),

    body('DateOfBirth')
        .exists()
        .withMessage('Date of birth is required')
        .trim()  
        .isDate()
        .withMessage('Must be a valid date in YYYY-MM-DD format'),

        // body('accountType')
        //   .exists()
        //   .withMessage('account type is Required')
        //   .isString()
        //   .withMessage('account type must be a String')
        //   .isIn(['savings', 'current', 'credit', 'fixed'])
        //   .withMessage('account type must be one of the following: savings, current, credit, fixed'),

    body('accountType')
      .exists()
      .withMessage('Account Type is Required')
      .escape()
      .custom((value:string) => {
            const types = ['savings', 'current', 'credit', 'fixed'];
            if (!types.includes(value.toLowerCase())) {
              throw new Error('Account Type must be one of the following: savings, current, credit, fixed');
            }
            return true;
          }),

    body('initialBalance')
        .isInt({min:0, max:999999999999})
        .withMessage('Initial Balance must be a number')
]



export {schema as registerSchema}