const mongoose = require('mongoose')

const db ='mongodb+srv://last:last1@cluster0.2jfojy4.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(db)
    .then(res => console.log('connected to db'))
    .catch(err => console.log(err))