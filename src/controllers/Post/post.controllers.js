const Post = require('../../models/Post/post.model')
module.exports = {
  async buscar(req, res) {
    try {
      const todosLinks = [
        {
          nome: 'jhdd',
          descricacao: 'sadhushu9dhu9i   iuoashi9sd9 ',
          url: 'http:jisipos',
        },
        {
          nome: 'jhdd',
          descricacao: 'sadhushu9dhu9i   iuoashi9sd9 ',
          url: 'http:jisipos',
        },
        {
          nome: 'jhdd',
          descricacao: 'sadhushu9dhu9i   iuoashi9sd9 ',
          url: 'http:jisipos',
        },
      ]
      res.status(200).json({ error: false, links: todosLinks })
    } catch (error) {
      res.status(404).json({ error: true, message: ' links não encontrado' })
    }
  },
  async postar(req, res) {
    try {
      const { nome, url, descricacao } = req.body
      const link = await Post.create({
        nome,
        url,
        descricacao,
      })
      res.status(201).json({ error: false, link: link })
    } catch (error) {
      res
        .status(400)
        .json({ error: true, message: 'não foi possivel criar o link' })
    }
  },
}
