const closeLogic = require('../BotLogic/closeLogic')
const Order = require('../../models/orderModel')
const Bot = require('../../models/botModel')

async function checkStopLoss(bot, indicator, order) {
    let stopLoss
    if (!!bot.settings.stopLoss) {
        const percent = Number(order.buy_price) - (Number(bot.settings.stopLoss) / 100) * Number(order.buy_price)
        const result = Number(indicator.interval["3m"].current.candle.close) <= percent
        stopLoss = result
    } else {
        stopLoss = false
    }
    return stopLoss
}

async function demoCloseOrder(bots, indicator) {

    let close_demo = []
    let orders_update = []
    let bots_update = []
    let bots_result = []

    for (const item of bots) {

        const symbol = item.bot.settings.ticker
        const timeframe = item.bot.settings.timeframe
        const filtered = indicator.filter(item => item.symbol === symbol)

        const response = await closeLogic(item.bot, filtered[0], timeframe, item.order)
        const stop_loss = await checkStopLoss(item.bot, filtered[0], item.order)

        if (response.logic || stop_loss) {
            close_demo.push({ bot: item.bot, price: response.price, order: item.order })
        }
    }

    for (const item of close_demo) {

        const percent = (item.price - item.order.buy_price) / (item.price) * 100
        const current = item.order.quantity * item.price
        const changed = current * (1 + (percent / 100))
        const profit = changed - current

        orders_update.push({
            'updateOne': {
                'filter': { '_id': item.order._id },
                'update': {
                    '$set': {
                        'id': item.order._id,
                        'active': false,
                        'sell_price': item.price,
                        'percent': percent,
                        'profit': profit,
                        'close_time': new Date().toISOString()
                    }
                }
            }
        })     

        bots_result.push({
            'updateOne': {
                'filter': { '_id': item.bot._id },
                'update': {
                    '$inc': {
                        'growth': 1,
                        'profit': 1.5
                    }
                }
            }
        })

        if (item.bot.profit.length >= Number(item.bot.settings.executeTime)) {
            bots_update.push({
                'updateOne': {
                    'filter': { '_id': item.bot._id },
                    'update': {
                        '$set': { active: false, completed: true },
                        '$push': {
                            'events': [
                                {
                                    exchange: item.bot.settings.exchange.name,
                                    bot_id: item.bot._id,
                                    time: new Date().toISOString(),
                                    details: `Your bot completed ${Number(item.bot.settings.executeTime)}/${Number(item.bot.settings.executeTime)} orders and was successfully finalized.`,
                                }
                            ]
                        }
                    }
                }
            })
        }
    }

    // bulk DB update orders closed
    if (orders_update.length > 0) {
        try {
            await Order.bulkWrite(orders_update)
        } catch (err) {
            console.log(err.message)
        }
    }

    // bulk DB update bot total result
    if (bots_result.length > 0) {
        try {
            await Bot.bulkWrite(bots_result)
        } catch (err) {
            console.log(err.message)
        }
    }

    // bulk DB update completed bots
    if (bots_update.length > 0) {
        try {
            await Bot.bulkWrite(bots_update)
        } catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = demoCloseOrder