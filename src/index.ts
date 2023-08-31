import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const accountRoute = require("../routes/accounts")

//routes
app.use('/api/v1/F4BTEST', accountRoute)


app.listen(3003,()=>{
    console.log('Listening on port 3003');
})
