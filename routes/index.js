const express = require('express')
const router = express.Router()
const { UserControl, Tugas2Controller } = require('../controllers')
const { authentication, authorization } = require('../middleware/auth')
const passport = require('passport')

router.post('/login', UserControl.login)

router.post('/register', UserControl.register)

// router.get('/auth/google/callback', passport.authenticate('google', { session: false }), UserControl.loginGoogle)

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false
  })
)

router.use(authentication)

router.get('/tugas2', Tugas2Controller.find)

router.get('/tugas2/:id', Tugas2Controller.findById)

router.post('/tugas2', Tugas2Controller.create)

router.put('/tugas2/:id', authorization, Tugas2Controller.update)

router.delete('/tugas2/:id', authorization, Tugas2Controller.delete)


module.exports = router;