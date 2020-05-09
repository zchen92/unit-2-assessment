////////////////////////////////////////////
/////////        DEPENDENCIES     //////////
////////////////////////////////////////////
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const methodOverride=require('method-override');

////////////////////////////////////////////
/////////        MIDDLEWARE      //////////
///////////////////////////////////////////
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));


////////////////////////////////////////////
/////////   MONGOOSE COLLECTION   /////////
///////////////////////////////////////////
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

//////////////////////////////////
/////////   CONTROLLER   /////////
//////////////////////////////////
const listController = require('./controller/list.js');
app.use('/list', listController);

///////////////////
////  INDEX   ////
//////////////////
// app.get('/', (req,res)=>{
//     res.render('Index')
// });

////////////////////////
/////   LISTEN    //////
////////////////////////
app.listen(port, ()=>{
    console.log('listening on port: ' + port);
});
