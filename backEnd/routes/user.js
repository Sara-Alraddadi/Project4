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




module.exports = router;