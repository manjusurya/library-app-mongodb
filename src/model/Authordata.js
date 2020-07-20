
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library');

const schema = mongoose.schema;

const AuthorSchema = new mongoose.Schema({
    name:String,
    work:String,
    genre: String,
    image: String
});

var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;
 