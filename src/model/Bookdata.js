const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ict.epe27c2.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    genre: String,
    image: String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;