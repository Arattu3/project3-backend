var promise = require('bluebird');
var options = 
{
   promiseLib: promise
}
var pgp = require('pg-promise')(options);
var cs =
{
    "host": "localhost", // This should be your host, usually this is just "localhost"
    "port": "5432", // Whatever your postgres port is, by default this should be 5432 if memory serves me right.
    "database": "project3", // The name for your database, you make this yourself when you create the database.
    "user": "postgres", // By default this is just "postgres"
    "password": "Plasticbottle3!" // The password you gave to your database
}
var db = pgp(cs);

const getallusers = (req, res, next) => {
    db.any("SELECT * FROM users") 
        .then((data) => {
            res.status(200)
                .json({
                    data: data 
                }) 
        })
        .catch((err) => {
            next(err)
        } )
}

const insertuser = (req, res, next) => {
    db.none("INSERT into users (username, password) VALUES (${username}, ${password})", {username: req.params.username, password: req.params.password})
        .then((data) => {
            res.status(200)
                .json({
                    data: data, 
                    message: 'success'
                })
        })
}

const getuserbyid = (req, res, next) => {
    db.one("SELECT * FROM users WHERE id = ${id}", {id: req.params.id})
        .then((data) => {
            res.status(200)
                .json({
                    data: data
                })
        }) 
        .catch ((err) => {
            next(err)
        })
}

module.exports = {
    getallusers: getallusers, 
    getuserbyid: getuserbyid,
    insertuser: insertuser
}

