module.exports = app => {
    const users = require("../controllers/userController")

    const router = require("express").Router()

    // create a new user 
    router.post("/", users.create);

    // get all users
    router.get("/", users.findAll)



    app.use('/api/users', router)
}