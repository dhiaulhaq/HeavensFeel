const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', (req, res) => {
    res.redirect('/index')
})
router.get('/index', Controller.renderHome)
router.get('/lahan', Controller.renderGrave)
router.get('/pemakaman', Controller.renderCemetery)
router.get('/lahan/:id', Controller.detailGrave)
router.get('/register', Controller.renderRegister)
router.post('/register', Controller.handleRegister)
router.get('/login', Controller.renderLogin)
router.post('/login', Controller.handleLogin)

module.exports = router;