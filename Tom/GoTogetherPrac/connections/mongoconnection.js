require("dotenv").config();
// CONNECTION
const mongoose = require("mongoose")
const { DB, URI, DB_USER, DB_PASS } = process.env;
const endpoint = `${URI}/${DB}`;

const connectionObject = {
    authSource: "admin",
    user: DB_USER,
    pass: DB_PASS,
};

mongoose
.connect(endpoint, connectionObject)
.then(() => console.log(`Connected to ${DB} database`))
.catch(error => console.log(`Error connecting to ${DB} database: `, error));