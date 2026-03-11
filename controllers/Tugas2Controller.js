const {Tugas2} = require('../models/tugas2')

const Tugas2Controller = {
    find: (req, res, next) => {
        Tugas2.find()
        .then(tugas2 => {
            res.json(tugas2)
        })
        .catch(err => {
            next(err)
        })
    },
    findById: (req, res, next) => {
        Tugas2.findById(req.params.id)
        .then(tugas2 => {
            res.json(tugas2)
        })
        .catch(err => {
            next(err)
        })
    },
    create: (req, res, next) => {
        let { name, description} = req.body


        if (!name || !description) {
            new Error('All fields are required')
        }

        let userId = req.userId
        console.log(userId, '>>>>')

        Tugas2.create({name, description, userId})
        .then(tugas2 => {
            res.json(tugas2)
        })
        .catch(err => {
            next(err)
        })
    },
    update: (req, res, next) => { 
        let { name, description } = req.body

    
        if (!name || !description ) {
            new Error('All fields are required')
        }

        Tugas2.findByIdAndUpdate(req.params.id, {name, description}, { new: true })
        .then(tugas2 => {
            console.log('masuk====')
            res.json(tugas2)
        })
        .catch(err => {
            console.log('masuk error====')

            next(err)
        })
    },
    delete: (req, res, next) => {
        Tugas2.delete(req.params.id)
        .then(() => {
            res.json({ message: `tugas2 with id ${req.params.id} has been deleted`})
            })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = Tugas2Controller

