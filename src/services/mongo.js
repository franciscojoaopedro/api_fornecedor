const mongoose = require('mongoose')
const ConnectionMongoDB = () => {
  try {
    console.log('conectado ao mongodb')
    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb://localhost:27017/fornecedores', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.log({ messagem: 'Não foi possivel ligar o servidor', error: error })
  }
}

module.exports = ConnectionMongoDB
