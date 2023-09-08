const mongoose = require('mongoose');

const CreateProfileSchema = mongoose.Schema({
    First_Name: {
        type: String,
        maxLength: [20, "Must be less than 20 characters."],
        required: [true, "First name must be entered."]
    },
    Last_Name: {
        type: String,
        maxLength: [20, "Must be less than 20 characters."],
        required: [true, "Last name must be entered."]
    },
    Birthday: {
        type: Date,
        required: [true, "Birthdate must be entered."]
    },
    Profile_Image: {
        type: String
    },
    Age: {
        type: Number
    },
    Gender: {
        type: String
    },
    Current_City: {
        type: String
    },
    Hometown: {
        type: String
    },
    Profession: {
        type: String
    },
    Interests: {
        type: String
    },
    Favorite_Movie: {
        type: String
    },
    Favorite_Artist: {
        type: String
    },
    Favorite_Food: {
        type: String
    },
    Languages: {
        type: String
    },
    Summary_Of_You: {
        type: String
    }
});

module.exports = mongoose.model("Profiles", CreateProfileSchema);