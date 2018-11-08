const express = require('express')
const controller = require('../controllers/rooms')
const models = require('../models/')
const router = express.Router()
const { protecByToken } = require('../midd/auth')

//dependencias 
const dependencias = {
  ...models
};
router.get('/', controller.index.bind(null, dependencias))
router.post('/', controller.create.bind(null, dependencias))
router.get('/:id', controller.show.bind(null, dependencias))
router.put('/:id', controller.update.bind(null, dependencias))
router.delete('/:id', controller.destroy.bind(null, dependencias))
module.exports = router