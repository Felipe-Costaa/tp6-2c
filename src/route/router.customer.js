const express = require('express')
const router = express.Router()
const controller = require('../controller/controller.customers')

router.get('/customers/:cpf/dependents', controller.getAllDependents)
router.delete('/customers/:cpf', controller.remove)
router.get('/customers/:cpf', controller.getCustomerById)
router.put('/customers/:cpf', controller.update)
router.get('/customers', controller.getAll)
router.post('/customers', controller.create)

module.exports = router