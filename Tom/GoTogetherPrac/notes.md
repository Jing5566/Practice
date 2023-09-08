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


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Another Test Route, more data entered, it worked!
// app.get("/profileCreate", (req, res) => {
//     const C_Profile = new CreateProfile({
//         First_Name: 'Thomas',
//         Last_Name: 'Smith',
//         Birthday: '1994-01-25',
//         Profile_Image: 'https://m.media-amazon.com/images/M/MV5BMTQ0NjgzNzcwNV5BMl5BanBnXkFtZTcwODExMDYxOQ@@._V1_.jpg',
//         Age: 29,
//         Gender: 'Male',
//         Current_City: 'San Antonio',
//         Hometown: 'Laredo',
//         Profession: 'Programmer',
//         Interests: 'Videogames, Godzilla, Lockpicking',
//         Favorite_Movie: 'Titanic',
//         Favorite_Artist: 'Joji',
//         Favorite_Food: 'Enchiladas',
//         Languages: 'English',
//         Summary_Of_You: 'I am a nerdy guy who likes to program and play videogames!'
//     })
//     C_Profile.save();
//     res.send(C_Profile)
// })