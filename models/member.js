const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: "Please enter a valid first name",
        unique: true
    },
    lastname: {
        type: String,
        required: "Please enter a valid last name",
        unique: true
    },
    email: {
        type: String,
        required: "Please type a valid email"
    },
    squad: {
        type: Number,
        enum: [ 1,2,3 ],
        required: "Please select the proper squad"
    },
    team: {
        type: String,
        required: "Please type a valid team"
    }
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;