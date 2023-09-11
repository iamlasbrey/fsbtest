const {body, check} = require('express-validator');

//The Middleware Schema to Ensure inputs meet the requirement
const schema = [

    check('accountName')
        .notEmpty()
        .escape()
        .withMessage('Name is Required')
        .isLength({min: 3,max:280})       
        .withMessage('Name must be between 3 and 280 characters')
        .matches(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/)
        .withMessage('Name must be a valid name that contains first name and last name')
        .trim(),

    // body('DateOfBirth')
    //     .exists()
    //     .withMessage('Date of birth is required')
    //     .trim()  
    //     .isDate()
    //     .withMessage('Must be a valid date in YYYY-MM-DD format'),

        // body('accountType')
        //   .exists()
        //   .withMessage('account type is Required')
        //   .isString()
        //   .withMessage('account type must be a String')
        //   .isIn(['savings', 'current', 'credit', 'fixed'])
        //   .withMessage('account type must be one of the following: savings, current, credit, fixed'),

      body('DateOfBirth')
      .exists()
      .withMessage('Date Of Birth is reqquired')
      .escape()
      .isDate()
      .withMessage('Must be a valid date in YYYY-MM-DD format')
      .custom((value:any) => {
        const d = new Date();
        let year = d.getFullYear()
        const user_year = value.split("-")[0]

        if(year - user_year < 18){
          throw new Error('You must be 18 or above');
        }
        return true
      }),


    body('accountType')
      .exists()
      .withMessage('Account Type is Required')
      .escape()
      .custom((value:string) => {
            const types = ['savings', 'current', 'credit', 'fixed', 'checking'];
            if (!types.includes(value.toLowerCase())) {
              throw new Error('Account Type must be one of the following: savings, current, credit, fixed, checking');
            }
            return true;
          }),

    body('initialBalance')
        .isInt({min:0, max:999999999999})
        .withMessage('Initial Balance must be a number')
]



export {schema as registerSchema}