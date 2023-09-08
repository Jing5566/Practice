const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

// we need to import our model(s)
const Profiles = require('./models/CreateProfileModel')

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// pulls ALL code from mongoconnection and
// inserts into file
require('./connections/mongoconnection')

// Basic route that sends you to the landing page if you didnt specify
// the account url with anything
app.get("/", (req, res) => {
    res.redirect("/landingPage")
});

// This is the first page that loads upon using the command
// node index.js, it will have a page that has a textbox greeting you
// to our website with two buttons that ask if you would like to login
// *this button just takes you to the homepage for now*, or sign up
// *this button takes you to a dummy signup page*, both buttons
// just route you to different pages until we have account auth figured out
app.get("/landingPage", (req, res) => {
    res.render("landingPage.ejs")
});

// This is the page that loads if you pressed the Signup button
// on the landing page, this will have three textboxes asking you to provide
// your desired Email:, Password:, and Password Confirmation: *these are just
// textboxes with no purpose until we have figured out account auth* as well
// as two buttons, one takes you back to the landing page, the other takes
// you to the createProfilePage
app.get("/signupPage", (req, res) => {
    res.render("signupPage.ejs")
});

// CREATE
// This page will have a form with various textboxes asking you to provide
// your profiles information, only 3 are hard required to be able to submit
// your account, once you have filled out at least those three fields,
// pressing the Submit button will take you to the home page
app.get("/createProfilePage", (req, res) => {
    res.render("createProfilePage.ejs")
});

// READ
// If you click the profile button option in the account dropbox,
// this will trigger a route handler that displays your profile
// with the information that user passed to the database, it will
// also have two buttons, one that says edit profile, and the other says
// back to home page
app.get("/viewProfilePage", async (req, res) => {
    const Profile = await Profiles.find({});
    res.render("viewProfilePage.ejs", { Profile })
});

// API Functionality 
// This route will show you a summary of your favorite movie!
// This uses the TMDB API to display your favorite movie
app.get("/movieInfoPage", (req, res) => {
    res.render("movieInfoPage.ejs")
});

// UPDATE
// This page will show you a copy of your profile and will allow you
// to edit the textboxes, once you hit submit, it will change the data
// in the database to what your changes are
app.get("updateProfilePage", (req, res) => {
    res.render("updateProfilePage.ejs")
});

// DELETE
// This page will show a paragraph asking if you would like to delete your
// account's information, two buttons are here, one that says no and
// redirects you too the home page, and a yes button that will trigger
// a route that will delete your information and redirect you to the
// landing page
app.get("deleteProfilePage", (req, res) => {
    res.render("deleteProfilePage.ejs")
});

// This page will have a mock up calandar, an event, and your account
// dropdown options, one allowing you to edit your profile and the other
// allowing you to delete your account information
app.get("homeDashboardPage", (req, res) => {
    res.render("homeDashboardPage.ejs")
});

// This just tells us what port the app is going to be on, and what
// to confirm if we actually connect to it
app.listen(port, () => console.log(`Tom's PracProject on port ${port}`));