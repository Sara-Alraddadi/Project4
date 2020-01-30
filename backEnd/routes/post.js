const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const Offer = require('../models/offer')
router.get('/', (req, res) => {

    res.send('post test');
})

router.post('/createpost', (req, res) => {


    Post.create(req.body)
        .then(post => {

            res.json({ msg: "post created" })

        }).catch(err => res.send(err))
})

router.post('/addOfeer', (req, res) => {


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