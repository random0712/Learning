const User = require('../models/User')

module.exports = {
    async getAll(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async getByiD(req, res) {
        const { id } = req.params
        
        const user = await User.findByPk(id)

        if(!user) {
            return res.status(404).json({error: "Usuario não encontrado"})
        }

        return res.status(200).json(user)
    },

    async save(req,  res) {
        const { name, email } = req.body
        const validateEmail = await User.findOne({where: {email}})

        if(validateEmail) return res.status(400).json({error: 'Email já cadastrado'}) 

        const user = await User.create({ name, email })

        return res.json(user)
    },

    async remove(req, res) {
        const { id } = req.params

        const remove = await User.destroy({
            where: {
              id
            }
        })

        if(!remove) return res.status(404).json({error: "Usuario não encontrado"})

        return res.status(204).send()
    }
}