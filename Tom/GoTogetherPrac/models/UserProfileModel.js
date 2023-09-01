const mongoose = require("mongoose")

const UserProfileSchema = mongoose.Schema({
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
    Age_Range: {
        type: String
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
    More_About_You: {
        type: String
    },
    Profile_Image: {
        type: String
    }
});

exports.UserProfileModel = mongoose.model("user_data", UserProfileSchema)