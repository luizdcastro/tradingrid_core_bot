const mongoose = require('mongoose')

const indicatorSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
        },     
        interval: {
            type: Object
        },
        updatedAt: {
            type: Date,
            default: new Date()
        }
    }   
)

module.exports = mongoose.model('indicators', indicatorSchema)

