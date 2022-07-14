const openLogic = require('../BotLogic/openLogic')
const Order = require('../../models/orderModel')

async function demoOpenOrder(bots, indicator) {

    let open_demo = []
    let open_success = []

    for (const bot of bots) {
        const symbol = bot.settings.ticker
        const timeframe = bot.settings.timeframe
        const filtered = indicator.filter(item => item.symbol === symbol)

        const response = await openLogic(bot, filtered[0], timeframe)

        if (response.logic) {
            open_demo.push({ bot: bot, price: response.price })
        }
    }

    for (const item of open_demo) {
        const percent = Number((item.bot.settings.funds / 100) * 10000)
        const quantity = Number(percent / item.price)

        open_success.push({
            user: item.bot.user,
            bot: item.bot._id,
            active: true,
            quantity: quantity,
            buy_price: item.price,
            open_time: new Date().toISOString()
        })
    }
  
    // bulk DB update orders created    
    if (open_success.length > 0) {
        try {
            await Order.insertMany(open_success)
        } catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = demoOpenOrder