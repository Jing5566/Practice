express = require("express");
app = express();
port = process.env.PORT || 3000;

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// pulls ALL code from mongoconnection and
// inserts into file
require('./connections/mongoconnection')

// we need to import our model(s)
const { UserProfileModel } = require("./models/UserProfileModel");

app.get("/", (req, res) => {
    res.redirect("/landingPage")
});

app.get("/landingPage", (req, res) => {
    res.render("landingpage.ejs")
});

app.post("/createProfile", (req, res) => {
    let profile = req.body.profile
    // send data to database
    UserProfileModel.create({profile})
    .then(result => res.json(result))
    .catch(error => {
        res.status(445).json({message: "Unable to create data"})
    })
})

app.get("/viewProfile", (req, res) => {
    // need to access database
    // send back all fields or just specific
    // need to access database
    // convert dat from database into usable format
    UserProfileModel.find({})
    .catch(error => {
        console.log(`Error with reading data: `, error.message)
        res.status(444).json({message: "Unable to read data"});
    })
})

app.delete("/profile/:id", (req, res) => {
    let user_id = req.params.user_id
    // mongoose had a method called findByIdAndDelete()
    // access db
    UserProfileModel.findByIdAndDelete(user_id)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(`Error deleting from db:`, err.message)
        res.status(466).json({message: "Unable to delete profile data"})
    })
});

app.put("profile/:id", (req, res) => {
    UserProfileModel.findById(req.params.id)
    .then(result => {
        // enter data that is going to be updated
        // EXAMPLE DATA
        result.save()
        .then(updatedResult => {
            res.json(updatedResult)
        })
        .catch(error => {
            console.log(`Error updateing profile data in db:`, err.message);
            res.status(488).json({message: "Unable to find updated with id"})
        })
    })
    .catch(err => {
        console.log(`Error updating data profile data from db:`, err.message)
        res.status(477).json({message: "Unable to find data to update with id"})
    });
})


app.listen(port, () => console.log(`Tom's PracProject on port ${port}`));