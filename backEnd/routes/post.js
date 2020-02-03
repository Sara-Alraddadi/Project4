const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Offer = require('../models/offer');
const User = require('../models/user');

router.get('/', (req, res) => {

    res.send('post test');
})

//Create Post 
router.post('/createpost', (req, res) => {

    Post.create(req.body)
        .then(post => {

            User.findByIdAndUpdate(req.body.id ,{ $push : {posts : post }})
            .then(user => {
                res.json({ msg: "post created" })
            }).catch(err => res.send(err))

           

        }).catch(err => res.send(err))
})

//Adding offer 
router.post('/addOffer', (req, res) => {


    var newOffer = {
        details: req.body.details,
        price: req.body.price,
        
        photographerName: req.body.photographerName,
        photogrphor: req.body.photogrphorId
    }
    Offer.create(newOffer)
        .then(offer => {


            res.send(offer)

        }).catch(err => console.log(err))

})

module.exports = router;