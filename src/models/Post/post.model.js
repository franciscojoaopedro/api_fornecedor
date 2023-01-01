const mongoose = require('mongoose')

const Post = new mongoose.Schema({
  nome: String,
  url: String,
  descricao: String,
  tipoDefornecedor:String
})

module.exports = mongoose.model('Post', Post)
