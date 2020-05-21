const dbConnection = require('../../src/model/dbConnection')
const Productos = require('./entidades/Productos')
const Vendedor = require('./entidades/Vendedor')
const Compras = require('./entidades/Compras')
const controller = {}
const connection = dbConnection();

const p = new Productos(connection)
const v = new Vendedor(connection)
const c = new Compras(connection)
/*o.register(p)
o.register(v)
o.register(c)*/

//Controlador Productos
controller.list = (req, res)            => p.list(req, res)

controller.deleteProduct = (req, res)   => {
    p.deleteProduct(req, res)
    o.notify("PASO ALGO MK")
}

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