const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()
const path = require('path');
const index = require('./routes/index');
require('./connection');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'))
app.use('/bar',index);

app.listen(process.env.port, ()=>{
    console.log('server is activated');
})

