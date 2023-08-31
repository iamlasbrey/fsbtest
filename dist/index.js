"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
const accountRoute = require("../routes/accounts");
app.get("/", (req, res) => {
    res.send("Welcome to Star Bank");
});
//routes
app.use('/api/v1/F4BTEST', accountRoute);
app.listen(3003, () => {
    console.log('Listening on port 3003');
});
//# sourceMappingURL=index.js.map