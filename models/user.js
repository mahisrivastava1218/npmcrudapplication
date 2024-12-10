const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL)    
const userSchema = mongoose.Schema({
    image : String,
    email : String,
    name  : String
})

module.exports = mongoose.model('user',userSchema);