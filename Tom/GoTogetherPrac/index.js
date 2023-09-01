express = require("express");
app = express();
port = process.env.PORT || 3000;

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// pulls ALL code from mongoconnection and
// inserts into file
require('./connections/mongoconnection')

app.get("/", (req, res) => {
    res.redirect("/landingPage")
});

app.get("/landingPage", (req, res) => {
    res.render("landingpage.ejs")
});

// app.post("/createUserProfile", (req, res) => {
//     let createProfile = req.body.createProfile
//     //send data to database

// })

app.listen(port, () => console.log(`Tom's PracProject on port ${port}`));