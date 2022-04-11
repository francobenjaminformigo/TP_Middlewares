let express = require('express')
let router = express.Router()
let controller = require('../controllers/mainController')
let adminUsers = require('../middlewares/adminUsers')


router.get('/', controller.index)
router.get('/admin', adminUsers, controller.admin)

module.exports = router
