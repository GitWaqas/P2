const mongoose = require("mongoose");
const User = require("../models/user");

function addUser(fn, ln, uname, pw) {
    
    const userInfo = { fn, ln, uname, pw }; 
    const user = new User(userInfo);
    console.log("new user added")
    return user.save();
}

function getAllUsers( ) {
    return User.find({}).exec();
}

function findByUserName(username) {
    return user.findOne({ userName:usersname }).exec();
}

function addLocationBlog() {
    const locationBlogInfo = { info, pos: {longitude, latitude }, author};
    const newLocationBlog = new locationBlog(locationBlogInfo);
}   



module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
    findByUserName: findByUserName,
    addLocationBlog: addLocationBlog
}