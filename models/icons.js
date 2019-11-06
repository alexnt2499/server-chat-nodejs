const mongoose = require('mongoose');
var schema = new mongoose.Schema(
    {
     name : {
         type : 'String',
         required : true
     },
     src : {
        type : 'String',
        required : true
    }
});

module.exports = mongoose.model('icons', schema);