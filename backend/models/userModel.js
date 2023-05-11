const sql = require("../database")

// constructor
const User = function(user){
    this.userName = user.userName;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
}

// Create a User
User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if(err) {
            console.log("Hey dumbass! You messed up, look: ", err);
            result(err, null)
            return; //run away
        }

        console.log("Created a new user: ", { id: res.id, ...newUser})
        result(null, { id: res.id, ...newUser })
    })
}

// Get All Users by userName
User.getAll = (userName, result) => {
    let query = "SELECT * FROM user"
    if (userName) {
        query += `WHERE userName LIKE '%{userName}%'`
    }

    sql.query(query, (err, res) => {
        if(err) {
            console.log("error: ", err)
            result(null, err)
            return
        }

        console.log("Users: ", res)
        result(null, res)
    })
}

module.exports = User;