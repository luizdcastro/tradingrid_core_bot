const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            ref: 'users',
        },
        bot: {
            type: mongoose.Schema.ObjectId,
        },
        active: {
            type: Boolean
        },
        quantity: {
            type: Number
        },
        buy_price: {
            type: Number
        },
        sell_price: {
            type: Number
        },
        open_time: {
            type: Date,
        },
        close_time: {
            type: Date
        },
        profit: {
            type: Number
        },
        percent: {
            type: Number
        }
    },
    {
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.id = ret._id
                delete ret._id
            }
        },
        toObject: { virtuals: true },
        versionKey: false
    }
);

module.exports = mongoose.model('orders', orderSchema)