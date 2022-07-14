const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const processBots = require('./controllers/processBots')

dotenv.config({ path: './config.env' })
mongoose
    .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB connection successful!"))
    .catch(err => console.log(err.message))

processBots()

const port = 8001
app.listen(process.env.PORT || port, () =>
    console.log(`Running on port ${port}`)
)
