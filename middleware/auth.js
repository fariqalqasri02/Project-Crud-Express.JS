const { decodedToken } = require('../helpers/token')
const { Tugas2 } = require('../models/tugas2')

// cek login atau belum
const authentication = (req, res, next) => {
    // cek req nya mengandung token atau tidak
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = decodedToken(token)
    
        req.userId = decoded.id
        next()
    } catch (error) {
        next({ message: 'You should login', status: 401})
    }
}

const authorization = (req, res, next) => {
    // cocokkan apakah userId di product sama dengan userId di req
    Tugas2.findById(req.params.id)
    .then(Tugas2 => {
        if (Tugas2.userId == req.userId) {
            next()
        } else {
            next({ message: 'You are not allowed', status: 401})
        }
    })
    .catch(err => {
        next({ message: 'You are not allowed', status: 401})

    })
}

module.exports = { authentication, authorization }