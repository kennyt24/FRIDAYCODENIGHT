const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    companyname: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    project: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)