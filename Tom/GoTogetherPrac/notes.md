// This was a testing route to see if I could send mock data to the
// database, it worked!
app.get("/firstLast", (req, res) => {
    const Fname_Lname = new FirstAndLastName({
        First_Name: '',
        Last_Name: ''
    })
    Fname_Lname.save();
    res.send(Fname_Lname)
})

// This is the model I used to activate this route
const mongoose = require('mongoose');

const FirstAndLastSchema = mongoose.Schema({
    First_Name: String,
    Last_Name: String
});

module.exports = mongoose.model("firstlastdata", FirstAndLastSchema);

// You need this line in the index.js file to activate the model
 const FirstAndLastName = require('./models/FirstAndLastModel')