const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ict.epe27c2.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    image: String,
    about: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;