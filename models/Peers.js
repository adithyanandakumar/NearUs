const mongoose = require("mongoose")

const PeerSchema = new mongoose.Schema({
    peerID : {
        type: String,
        required: [true, 'Please add an id!'],
        unique: true,
        trim: true,
        maxlength: [5, 'Id must be less than 5 characters!']
    },

    location : {
            type: {
              type: String, //mongoose geoJSON
              enum: ['Point'], 
            },
            coordinates: {
              type: [Number],
              index: '2dsphere'
            },
            formattedAddress: String
    },

    address: {
            type: String,
            required: [true, 'Address is required!']
    },

    lastActive: {
            type: Date,
            default: Date.now
    }
})

module.exports = mongoose.model('Peer', PeerSchema)