const dbConnection = require('../../src/model/dbConnection')
const Productos = require('./entidades/Productos')
const Vendedor = require('./entidades/Vendedor')
const controller = {}
const connestion = dbConnection();

const p = new Productos(connestion)
const v = new Vendedor(connestion)

//Controlador Productos
controller.list = (req, res) => p.list(req, res)

controller.deleteProduct = (req, res) => p.deleteProduct(req, res)

controller.addProduct = (req, res) => p.addProduct(req, res)

controller.editProducts = (req, res) => p.editProducts(req, res)

controller.updateProduct = (req, res) => p.updateProduct(req, res)

controller.listshop = (req, res) => p.listshop(req, res)

controller.info = (req, res) => p.info(req, res)

//Controlador Vendedor
controller.loadProfile = (req, res) => v.loadProfile(req, res)

controller.updateProfile = (req, res) => v.updateProfile(req, res)

module.exports = controller