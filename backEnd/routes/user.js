const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user')
router.get('/', (req, res) => {

    res.send('user test');
})

router.post('/register', (req, res) => {

    User.find({ email: req.body.email })
        .then(user => {

            if (user.length == 0) {
                //for regster 
                var newUser = req.body
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        newUser.password = hash
                        User.create(newUser).then(user => {
                            res.json({ msg: 'user is registered', user })
                        })
                    }).catch(err => res.send(err))
            }
            else{
             res.send("the email has been used")
            }
            
        })

})
process.env.SECRET_KEY = 'secret'
// register
router.post('/register', (req, res) => {
    const newUser = {
        first_name: req.body.first_name, last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        typee: req.body.typee,
        games: req.body.gameId
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    newUser.password = hash
                    User.create(newUser)
                        .then(user => res.json({ msg: "user created", userInf: newUser }))
                        .catch(err => res.send(err))
                })
            }
            else {
                res.send(`email used !!! chang the email ` + user)
            }
        }).catch(err => res.send(err))
})
// login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    user.password = ""
                    var paylod = { user }
                    let token = jwt.sign(paylod, process.env.SECRET_KEY, { expiresIn: 1440 })
                    res.send(token)
                }
                //    if password not the same 
                else {
                    res.send("password is not currect")
                }
            }
            else {
                res.send("email is not found")
            }
        }).catch(err => res.send(err))
})




module.exports = router;