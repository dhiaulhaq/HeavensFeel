const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', (req, res) => {
    res.render('reservasi')
})
router.get('/register', Controller.renderRegister)
router.post('/register', Controller.handleRegister)
router.get('/login', Controller.renderLogin)
router.post('/login', Controller.handleLogin)

module.exports = router;