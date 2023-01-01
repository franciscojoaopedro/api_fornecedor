const mongoose = require('mongoose')
const ConnectionMongoDB = () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const database = mongoose.connection
    database.once('open', () =>
      console.log('✅ mongodb connected successfully'),
    )
    mongoose.Promise = Promise
  } catch (error) {
    console.log({ messagem: 'Não foi possivel ligar o servidor', error: error })
  }
}

module.exports = ConnectionMongoDB
