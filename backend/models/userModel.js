const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    username : {type : String, required : true, unique : true},
    collegeRegNo : {type : String, required : true},
    password : {type : String, required : true},
    gender : {type : String, required : true},
    dob : {type : String, required : true},
    passoutYear : {type : String, required : true}, // for engineering, format MM:YYYY
    address : {type : String, default : ''},
    bio : {type : String, default : ''},
    profilePicture : {type : String, default : ''},
    connections : {type : Array, default : []},
    education : {type : Array, default : []},
    job : {type : String, default : ''},
    fieldOfInterests : {type : String, default : ''},
    vfcode : {type : String, default : ''},
    profileLinks : {type : Array, default : []},
    role : {type : String, default : 'alumni'}, //assign the role based on passoutYear
});

const User = mongoose.model('users', userSchema, 'users');

module.exports = {User};

/*

Array Onject definitions : 

1. connections [
    {
        id, name, profilePicture
    }
]

2. education [
    {
        course, instituteName, passoutYear, grades
    }
]

3. profileLinks [
    {
        linkName, url
    }
]

*/