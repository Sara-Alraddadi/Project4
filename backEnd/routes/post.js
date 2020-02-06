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
        .then(offer => { // creating a new offer + linking it to the photographer
            User.findByIdAndUpdate(req.body.id ,{ $push : {offers : offer }})
            .then(user => {
                res.json({ msg: "created a new offer" })
            }).catch(err => res.send(err))


            res.send(offer)

        }).catch(err => console.log(err))

})

router.get('/allPost/:id' , (req , res)=>{

    User.findById(req.params.id).populate('posts')
    .then(user => res.json({posts:user.posts}))
    .catch(err => res.send(err))
})
router.get('/allUserPost' , (req, res) =>{

    Post.find({
        
    }).then(users => res.json(users))
    .catch(err => res.json(err))
})
module.exports = router;