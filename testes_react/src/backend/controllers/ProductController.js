const Product = require('../models/Product')
const User = require('../models/User')
const { getAll, remove } = require('./UserController')

module.exports = {
    async save(req, res) {
        const { owner_id } = req.params
        const { name, price, amount } = req.body

        const user = await User.findByPk(owner_id)

        if(!user) {
            return res.status(404).json({ error: 'Usuario não encontrado' })
        }

        const product = await Product.create({
            name,
            price,
            amount,
            owner_id
        })

        return res.status(200).json(product)
    },

    async getAll(req, res) {
        const products = await Product.findAll()

        return res.status(200).json(products)
    },

    async getByOwner(req, res) {
        const { owner_id } = req.params

        const user = await User.findByPk(owner_id)

        if(!user) {
            return res.status(404).json({ error: 'Usuario não encontrado' })
        }

        const products = await Product.findAll({where: { owner_id }})

        return res.status(200).json(products)
    },

    async remove(req, res) {
        const {owner_id, id} = req.params

        const user = await User.findByPk(owner_id)

        if(!user) {
            return res.status(404).json({ error: 'Usuario não encontrado' })
        }

        const product = await Product.findOne({where: {
            id,
            owner_id
        }})

        if(!product) return res.status(404).json({error: 'Produto não encontrado'})

        const remove = await Product.destroy({where: { id }})

        if(!remove) {
            return res.status(404).json({error: 'Produto não encontrado'})
        }

        return res.status(200).send()
    }

}