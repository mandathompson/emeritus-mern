const User = require("../models/userModel")
const bcrypt = require("bcrypt");

// Create and Save a new User
exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "This cannot be empty!"
        });
    }

    const { password } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
        userName: req.body.userName,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    // Save to database
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: 
                    err.message || "An error has occurred"
            })
        else res.send(data)
    })

};

// Retrieve all Users
exports.findAll = (req, res) => {
  
};