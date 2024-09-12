const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', (req, res) => {
    res.render('detail')
})
router.get('/index', Controller.renderHome)
router.get('/lahan', Controller.renderGrave)
router.get('/pemakaman', Controller.renderCemetery)
router.get('/lahan/:id', Controller.detailGrave)

module.exports = router;