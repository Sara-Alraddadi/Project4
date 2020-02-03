const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('user test');
})
process.env.SECRET_KEY = 'secret'

// register
router.post('/register', (req, res) => {
    const newUser = {
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType
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
                res.send(`This  Email is already used! \n` + user.email)
            }
        }).catch(err => res.send(err))
})

//get photographer id(to map through the images)
router.get('/user/:id', (res, req) =>{
    User.findById(req.params.id, (err, foundUser)=> {
        if (err) { res.send(err) }
        res.json(foundUser);
    })
})




// login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                   
                    user.password = ""
                    var paylod = { user }
                    let token = jwt.sign(paylod, "secret", { expiresIn: 1440 })
                    // res.send(paylod)
                    res.json({token: token, success: true})
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



