'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port= 5069;

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/forgin", { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected...");

        app.listen(port, ()=> {
            console.log(`App listening in http://localhost:${port}`);
        });

        })
        .catch((err) => console.error(err));


  


     