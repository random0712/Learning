const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { authSecret } = require("../../.env.local")

module.exports = {
	async singIn(req, res) {
		if(!req.body.email || !req.body.password) {
			return res.status(400).json({error: "Email/Senha Invalidos"})
		}

		const user = await User.findOne({where: {email: req.body.email}})

		if(!user) {
			return res.json({error: "Usuario não encontrado"})
		}

		const validatePassword = bcrypt.compareSync(req.body.password, user.password)

		if(!validatePassword) {
			return res.json({error: "Senha invalida"})
		} 

		const token = jwt.sign({}, authSecret, { expiresIn: "7 days" });

		console.debug("Signin Data", `${token}, ${user}`)

		return res.status(200).json({token: token, user: user});
	}
}