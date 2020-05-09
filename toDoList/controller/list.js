const express = require('express');
const router = express.Router();
const List = require('../models/list.js');

// index
router.get('/', (req, res) => {
    //res.render('Index')
    List.find({}, (error, allToDo) => {
        res.render('Index', {
            toDos: allToDo
        })
    });
});

//new item
// router.get('/New', (req,res)=>{
//     res.render('New')
// })

router.post('/new', (req,res)=>{
    //console.log(req.body.done) // comes back undefined ....
    req.body.done === false ? req.body.done = 'Not Done' : req.body.done = 'Done'
   /* console.log(req.body) // this is showing item in console but not the done/not done [object: null prototype]
    if (req.body.done === false) {
        console.log(req.params.done) // this isn't working 
        req.body.done = "done"
    } else {
        req.body.done = "not done"
    } */
    List.create(req.body, (err, addItem)=>{
        res.redirect('/list')
    })
})

//delete 
router.delete('/:id', (req,res)=>{
    List.findByIdAndRemove(req.params.id, (err, toRemove)=>{
        res.redirect('/list');
    });
});


module.exports = router;