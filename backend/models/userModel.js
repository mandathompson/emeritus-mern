const sql = require("../database")

const User = function(user){
    this.userName = user.userName;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
}

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

module.exports = User;