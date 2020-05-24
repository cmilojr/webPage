const dbConnection = require('../../src/model/dbConnection')
const AbstractFactory = require('./entidades/AbstractFactory')
const controller = {}
const connection = dbConnection();

const absFactory = new AbstractFactory(connection)
const p = absFactory.create(0)
const v = absFactory.create(1)
const c = absFactory.create(2)
/*o.register(p)
o.register(v)
o.register(c)*/

//Controlador Productos
controller.list = (req, res)            => p.list(req, res)

controller.deleteProduct = (req, res)   => p.deleteProduct(req, res)

controller.addProduct = (req, res)      => p.addProduct(req, res)

controller.editProducts = (req, res)    => p.editProducts(req, res)

controller.updateProduct = (req, res)   => p.updateProduct(req, res)

controller.listshop = (req, res)        => p.listshop(req, res)

controller.info = (req, res)            => p.info(req, res)

//Controlador Vendedor
controller.loadProfile = (req, res)     => v.loadProfile(req, res)

controller.updateProfile = (req, res)   => v.updateProfile(req, res)

//Controlador Compras
controller.purchased = (req, res)       => c.purchased(req, res)


module.exports = controller