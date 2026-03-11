const  User  = require('../models/User')
const { hash, compare } = require('../helpers/password')
const {generateToken} = require('../helpers/token')

// 1. Definisikan fungsi login
const login = (req, res, next) => {
    const { email, password } = req.body
    User.findOne({ email })
    .then(user => {
        if (user) {
            const isMatch = compare(password, user.password)
            if (isMatch) {
                const token = generateToken({ id: user._id, email: user.email})
                res.json({
                    id: user._id,
                    email: user.email,
                    token
                })
            } else {
                res.status(401).json({ message: 'Invalid email or password'})
            }
        } else {
            res.status(401).json({ message: 'Invalid email or password'})
        }
    })
    .catch(err => {
        next(err)
    })
}

// 2. Definisikan fungsi register
const register = (req, res, next) => {
    const { email, password, id } = req.body || {}
    User.create({ email, password, id})
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        next(err)
    })
}

// 3. Ekspor fungsinya sebagai object (PENTING!)
module.exports = {
    login,
    register
}