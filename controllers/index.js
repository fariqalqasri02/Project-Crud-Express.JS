const express = require('express')
const router = express.Router()
const Tugas2 = require('../models/Tugas2')


router.get('/', async (req, res) => {
    try {
        const data = await Tugas2.find()
        res.json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = await Tugas2.findById(req.params.id)

        if (!data) {
            return res.status(404).json({ message: "Data tidak ditemukan" })
        }

        res.json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


router.post('/', (req, res) => {
    const { title, status } = req.body;

    Tugas2.create({ title, status })
        .then(Tugas2 => res.json(Tugas2))
        .catch(err => res.send(err))
})

router.put('/:id', (req, res) => {
    const { title, status } = req.body

    Tugas2.findByIdAndUpdate(req.params.id, { title, status})
    .then(Tugas2 => {
        res.json(Tugas2)
    })

    .catch(err =>{
        res.send(err)
    })
})


router.delete('/:id', (req, res) => {

    Tugas2.findByIdAndDelete(req.params.id)
    .then(Tugas2 => {
        res.json({message: 'berhasil Delete'})
        
    })
    .catch(err =>{
        res.send(err)
    })
})
module.exports = router