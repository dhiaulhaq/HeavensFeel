const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('detail')
})

module.exports = router;