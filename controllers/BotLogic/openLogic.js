const conditionLogic = require('./conditionLogic')

const openLogic = async (bot, response, timeframe) => {

    const current = response.interval[timeframe].current
    const previous = response.interval[timeframe].previous

    const current_price = current.candle.close
    const previous_price = previous.candle.close

    const rsi = current.indicators.rsi
    const stochastic = current.indicators.stoch.slowd
    const supertrend = current.indicators.supertrend
    const macd = current.indicators.macd
    const atr = current.indicators.atr
    const bbands = current.indicators.bbands
    const adx = current.indicators.adx
    const aroon = current.indicators.aroon
    const mfi = current.indicators.mfi
    const mom = current.indicators.mom
    const willr = current.indicators.willr

    const ma_10 = current.indicators.ma.ma_10
    const ma_20 = current.indicators.ma.ma_20
    const ma_30 = current.indicators.ma.ma_30
    const ma_40 = current.indicators.ma.ma_40
    const ma_50 = current.indicators.ma.ma_50
    const ma_100 = current.indicators.ma.ma_100
    const ma_200 = current.indicators.ma.ma_200
    const ema_10 = current.indicators.ema.ema_10
    const ema_20 = current.indicators.ema.ema_20
    const ema_30 = current.indicators.ema.ema_30
    const ema_40 = current.indicators.ema.ema_40
    const ema_50 = current.indicators.ema.ema_50
    const ema_100 = current.indicators.ema.ema_100
    const ema_200 = current.indicators.ema.ema_200

    let open_logic = []

    function checkMA(i, item, ma, ema) {

        //Trend above price      
        if (item.conditional === ">") {
            if (item.indicator === "MA(10)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ma & previous_price > ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(20)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ma & previous_price > ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(30)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ma & previous_price > ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(40)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ma & previous_price > ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(50)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ma & previous_price > ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(100)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ma & previous_price > ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(200)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ma & previous_price > ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(10)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ema & previous_price > ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(20)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ema & previous_price > ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(30)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ema & previous_price > ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(40)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ema & previous_price > ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(50)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ema & previous_price > ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(100)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ema & previous_price > ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(200)") {
                if (!item.signal) {
                    const result = Boolean(current_price > ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price > ema & previous_price > ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //Trend below price      
        if (item.conditional === "<") {
            if (item.indicator === "MA(10)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ma & previous_price < ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(20)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ma & previous_price < ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(30)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ma & previous_price < ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(40)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ma & previous_price < ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(50)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ma & previous_price < ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(100)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ma & previous_price < ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "MA(200)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ma)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ma & previous_price < ma === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(10)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ema & previous_price < ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(20)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ema & previous_price < ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(30)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ema & previous_price < ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(40)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ema & previous_price < ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(50)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ema & previous_price < ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(100)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ema & previous_price < ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.indicator === "EMA(200)") {
                if (!item.signal) {
                    const result = Boolean(current_price < ema)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(current_price < ema & previous_price < ema === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        // Cross Over
        if (item.conditional === ("> ma" || "> ema")) {
            if (item.value === "ma_10") {
                if (!item.signal) {
                    const result = Boolean(ma > ma_10)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma > ma_10 & (ma > previous.indicators.ma.ma_10) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_20") {
                if (!item.signal) {
                    const result = Boolean(ma > ma_20)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma > ma_20 & (ma > previous.indicators.ma.ma_20) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_30") {
                if (!item.signal) {
                    const result = Boolean(ma > ma_30)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma > ma_30 & (ma > previous.indicators.ma.ma_30) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_40") {
                if (!item.signal) {
                    const result = Boolean(ma > ma_40)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma > ma_40 & (ma > previous.indicators.ma.ma_40) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_50") {
                if (!item.signal) {
                    const result = Boolean(ma > ma_50)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma > ma_50 & (ma > previous.indicators.ma.ma_50) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_100") {
                if (!item.signal) {
                    const result = Boolean(ma > ma_100)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma > ma_100 & (ma > previous.indicators.ma.ma_100) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_200") {
                if (!item.signal) {
                    const result = Boolean(ma > ma_200)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma > ma_200 & (ma > previous.indicators.ma.ma_200) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_10") {
                if (!item.signal) {
                    const result = Boolean(ema > ema_10)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema > ema_10 & (ema > previous.indicators.ema.ema_10) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_20") {
                if (!item.signal) {
                    const result = Boolean(ema > ema_20)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema > ema_20 & (ema > previous.indicators.ema.ema_20) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_30") {
                if (!item.signal) {
                    const result = Boolean(ema > ema_30)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema > ema_30 & (ema > previous.indicators.ema.ema_30) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_40") {
                if (!item.signal) {
                    const result = Boolean(ema > ema_40)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema > ema_40 & (ema > previous.indicators.ema.ema_40) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_50") {
                if (!item.signal) {
                    const result = Boolean(ema > ema_50)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema > ema_50 & (ema > previous.indicators.ema.ema_50) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_100") {
                if (!item.signal) {
                    const result = Boolean(ema > ema_100)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema > ema_100 & (ema > previous.indicators.ema.ema_100) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_200") {
                if (!item.signal) {
                    const result = Boolean(ema > ema_200)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema > ema_200 & (ema > previous.indicators.ema.ema_200) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        // Cross Down
        if (item.conditional === ("< ma" || "< ema")) {
            if (item.value === "ma_10") {
                if (!item.signal) {
                    const result = Boolean(ma < ma_10)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma < ma_10 & (ma < previous.indicators.ma.ma_10) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_20") {
                if (!item.signal) {
                    const result = Boolean(ma < ma_20)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma < ma_20 & (ma < previous.indicators.ma.ma_20) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_30") {
                if (!item.signal) {
                    const result = Boolean(ma < ma_30)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma < ma_30 & (ma < previous.indicators.ma.ma_30) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_40") {
                if (!item.signal) {
                    const result = Boolean(ma < ma_40)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma < ma_40 & (ma < previous.indicators.ma.ma_40) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_50") {
                if (!item.signal) {
                    const result = Boolean(ma < ma_50)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma < ma_50 & (ma < previous.indicators.ma.ma_50) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_100") {
                if (!item.signal) {
                    const result = Boolean(ma < ma_100)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma < ma_100 & (ma < previous.indicators.ma.ma_100) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ma_200") {
                if (!item.signal) {
                    const result = Boolean(ma < ma_200)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ma < ma_200 & (ma < previous.indicators.ma.ma_200) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_10") {
                if (!item.signal) {
                    const result = Boolean(ema < ema_10)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema < ema_10 & (ema < previous.indicators.ema.ema_10) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_20") {
                if (!item.signal) {
                    const result = Boolean(ema < ema_20)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema < ema_20 & (ema < previous.indicators.ema.ema_20) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_30") {
                if (!item.signal) {
                    const result = Boolean(ema < ema_30)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema < ema_10 & (ema < previous.indicators.ema.ema_30) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_40") {
                if (!item.signal) {
                    const result = Boolean(ema < ema_40)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema < ema_40 & (ema < previous.indicators.ema.ema_40) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_50") {
                if (!item.signal) {
                    const result = Boolean(ema < ema_50)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema < ema_50 & (ema < previous.indicators.ema.ema_50) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_100") {
                if (!item.signal) {
                    const result = Boolean(ema < ema_100)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema < ema_100 & (ema < previous.indicators.ema.ema_100) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            } else if (item.value === "ema_200") {
                if (!item.signal) {
                    const result = Boolean(ema < ema_200)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(ema < ema_200 & (ema < previous.indicators.ema.ema_200) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }
    }

    function checkCandlePattern(i, item, previous) {
        if (item.conditional === "true") {
            const result = Boolean(previous === 100)
            open_logic.push({ index: i, result: Boolean(result), addConditional: item.addConditional })
        } else {
            const result = Boolean(previous === 0)
            open_logic.push({ index: i, result: Boolean(result), addConditional: item.addConditional })
        }
    }

    for (const [i, item] of bot.open_logic.entries()) {

        // MA and EMA
        if (item.indicator === 'MA(10)') {
            checkMA(i, item, ma_10, ema_10)
        } else if (item.indicator === 'MA(20)') {
            checkMA(i, item, ma_20, ema_20)
        } else if (item.indicator === 'MA(30)') {
            checkMA(i, item, ma_30, ema_30)
        } else if (item.indicator === 'MA(40)') {
            checkMA(i, item, ma_40, ema_40)
        } else if (item.indicator === 'MA(50)') {
            checkMA(i, item, ma_50, ema_50)
        } else if (item.indicator === 'MA(100)') {
            checkMA(i, item, ma_100, ema_100)
        } else if (item.indicator === 'MA(200)') {
            checkMA(i, item, ma_200, ema_200)
        } else if (item.indicator === 'EMA(10)') {
            checkMA(i, item, ma_10, ema_10)
        } else if (item.indicator === 'EMA(20)') {
            checkMA(i, item, ma_20, ema_20)
        } else if (item.indicator === 'EMA(30)') {
            checkMA(i, item, ma_30, ema_30)
        } else if (item.indicator === 'EMA(40)') {
            checkMA(i, item, ma_40, ema_40)
        } else if (item.indicator === 'EMA(50)') {
            checkMA(i, item, ma_50, ema_50)
        } else if (item.indicator === 'EMA(100)') {
            checkMA(i, item, ma_100, ema_100)
        } else if (item.indicator === 'EMA(200)') {
            checkMA(i, item, ma_200, ema_200)
        }

        // Candle Patterns
        if (item.indicator === "Hammer") {
            checkCandlePattern(i, item, previous.patterns.cdlhammer)
        } else if (item.indicator === "Inverted Hammer") {
            checkCandlePattern(i, item, previous.patterns.cdlinvertedhammer)
        } else if (item.indicator === "Engulfing Pattern") {
            checkCandlePattern(i, item, previous.patterns.cdlengulfing)
        } else if (item.indicator === "Piercing Pattern") {
            checkCandlePattern(i, item, previous.patterns.cdlpiercing)
        } else if (item.indicator === "Morning Star") {
            checkCandlePattern(i, item, previous.patterns.cdlmorningstar)
        } else if (item.indicator === "3 White Soldiers") {
            checkCandlePattern(i, item, previous.patterns.cdl3whitesoldiers)
        } else if (item.indicator === "Abandoned Baby") {
            checkCandlePattern(i, item, previous.patterns.cdlabandonedbaby)
        } else if (item.indicator === "Breakaway") {
            checkCandlePattern(i, item, previous.patterns.cdlbreakaway)
        } else if (item.indicator === "Hanging Man") {
            checkCandlePattern(i, item, previous.patterns.cdlhangingman)
        } else if (item.indicator === "Shooting Star") {
            checkCandlePattern(i, item, previous.patterns.cdlshootingstar)
        } else if (item.indicator === "Evening Star") {
            checkCandlePattern(i, item, previous.patterns.cdleveningstar)
        } else if (item.indicator === "3 Black Crows") {
            checkCandlePattern(i, item, previous.patterns.cdl3blackcrows)
        } else if (item.indicator === "Dark Cloud Cover") {
            checkCandlePattern(i, item, previous.patterns.cdldarkcloudcover)
        } else if (item.indicator === "Doji") {
            checkCandlePattern(i, item, previous.patterns.cdldoji)
        } else if (item.indicator === "Spinning Top") {
            checkCandlePattern(i, item, previous.patterns.cdlspinningtop)
        } else if (item.indicator === "Harami Pattern") {
            checkCandlePattern(i, item, previous.patterns.cdlharami)
        } else if (item.indicator === "Three-Line Strike") {
            checkCandlePattern(i, item, previous.patterns.cdl3linestrike)
        } else if (item.indicator === "Dragonfly Doji") {
            checkCandlePattern(i, item, previous.patterns.cdldragonflydoji)
        } else if (item.indicator === "Matching Low") {
            checkCandlePattern(i, item, previous.patterns.cdlmatchinglow)
        } else if (item.indicator === "Tasuki Gap") {
            checkCandlePattern(i, item, previous.patterns.cdltasukigap)
        }

        // RSI
        if (item.indicator === 'RSI') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(rsi >= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(rsi >= item.value & (previous.indicators.rsi >= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(rsi <= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(rsi <= item.value & (previous.indicators.rsi <= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        // Stochastic
        if (item.indicator === 'Stochastic') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(stochastic >= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(stochastic >= item.value & (previous.indicators.stoch.slowd >= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(stochastic <= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(stochastic <= item.value & (previous.indicators.stoch.slowd <= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        // Supertrend
        if (item.indicator === 'Supertrend') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(supertrend)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(supertrend & previous.indicators.supertrend === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(!supertrend)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(!supertrend & !previous.indicators.supertrend === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        // MACD
        if (item.indicator === 'MACD') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(macd.macd >= macd.macdsignal)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(macd.macd >= macd.macdsignal & (previous.indicators.macd.macd >= previous.indicators.macd.macdsignal) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(macd.macd <= macd.macdsignal)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(macd.macd <= macd.macdsignal & (previous.indicators.macd.macd <= previous.indicators.macd.macdsignal) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //ATR
        if (item.indicator === 'ATR') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(atr >= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(atr >= item.value & (previous.indicators.atr >= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(atr <= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(atr <= item.value & (previous.indicators.atr <= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //Bollinger Bands
        if (item.indicator === 'Bollinger Bands') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(bbands.upperband >= current_price)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(bbands.upperband >= current_price & (previous.indicators.bbands.upperband >= current_price) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(bbands.upperband <= current_price)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(bbands.upperband <= current_price & (previous.indicators.bbands.upperband <= current_price) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //ADX
        if (item.indicator === 'ADX') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(adx >= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(adx >= item.value & (previous.indicators.adx >= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(adx <= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(adx <= item.value & (previous.indicators.adx <= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //ARRON
        if (item.indicator === 'AROON') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(aroon.aroonup >= 90 & aroon.aroondown <= 10)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })

                } else {
                    const result = Boolean(aroon.aroonup >= 90 & aroon.aroondown <= 10 & (previous.indicators.aroon.aroonup >= 90 & previous.indicators.aroon.aroondown <= 10) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(aroon.aroondown >= 90 & aroon.aroonup <= 10)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(aroon.aroondown >= 90 & aroon.aroonup <= 10 & (previous.indicators.aroon.aroondown >= 90 & previous.indicators.aroon.aroonup <= 10) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //MFI
        if (item.indicator === 'MFI') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(mfi >= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(mfi >= item.value & (previous.indicators.mfi >= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(mfi <= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(mfi <= item.value & (previous.indicators.mfi <= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //MFI
        if (item.indicator === 'MOM') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(mom > 0)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(mom > 0 & (previous.indicators.mom > 0) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(mom < 0)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(mom < 0 & (previous.indicators.mom < 0) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        //WillR
        if (item.indicator === 'WillR') {
            if (item.conditional === ">") {
                if (!item.signal) {
                    const result = Boolean(willr >= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                } else {
                    const result = Boolean(willr >= item.value & (previous.indicators.willr >= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
            if (item.conditional === "<") {
                if (!item.signal) {
                    const result = Boolean(willr <= item.value)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })

                } else {
                    const result = Boolean(willr <= item.value & (previous.indicators.willr <= item.value) === false)
                    open_logic.push({ index: i, result: result, addConditional: item.addConditional })
                }
            }
        }

        // Price Increased     
        if (item.indicator === "Price Increased") {
            if (item.conditional === "buy") {
                const percent = Number(current_price) + (Number(item.value) / 100) * Number(current_price)
                const result = current_price >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "3m") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "5m") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "15m") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "30m") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "1h") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "2h") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "4h") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "1d") {
                const percent = ((Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close) + Number(response.interval[item.conditional].previous.candle.close))
                const result = Number(response.interval[item.conditional].current.candle.close) >= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            }
        }

        // Price Decreased
        if (item.indicator === "Price Decreased") {
            if (item.conditional === "buy") {
                const percent = Number(current_price) - (Number(item.value) / 100) * Number(current_price)
                const result = Number(response.interval["15m"].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "3m") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "5m") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "15m") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "30m") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "1h") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "2h") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "4h") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })

            } else if (item.conditional === "1d") {
                const percent = Number(response.interval[item.conditional].previous.candle.close) - (Number(item.value) / 100) * Number(response.interval[item.conditional].previous.candle.close)
                const result = Number(response.interval[item.conditional].current.candle.close) <= percent
                open_logic.push({ index: i, result: result, addConditional: item.addConditional })
            }
        }
    }

    const result = { logic: conditionLogic(open_logic), price: current_price }

    return result
}

module.exports = openLogic