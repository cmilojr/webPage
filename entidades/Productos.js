const general = require('./General')
const query = require('./queries')
const observer = require('./Observador')

function Productos(connection){
    this.connection = connection
    this.q = new query(connection)
    this.chance = new observer(connection);
}

Productos.prototype.notify = function(mensaje){
        console.log(`PRODUCTOS => ${mensaje}`)
}

Productos.prototype.list = function(req, res){
    this.q.list(res, "productos", "products.ejs")
}

Productos.prototype.listshop = function(req, res){
    this.q.list(res, "productos", "buy.ejs")
}

Productos.prototype.deleteProduct = function(req, res){
    const {id} = req.params;
    this.q.deleteData(res, id)
    //this.o.notify("PRODUCT DELETED")
}

Productos.prototype.editProducts = function(req, res){
    const {id} = req.params;

    this.q.information(res, "productos", "editProducts.ejs", id)
}

Productos.prototype.info = function(req, res){
    const {id} = req.params;
    this.q.information(res, "productos", "info.ejs", id)
}

Productos.prototype.updateProduct = function(req, res){
    const {id} = req.params;
    const {nombreP, precioP, stock, categoria} = req.body
    this.chance.actualizarEstado(id, stock)
    this.connection.query('UPDATE productos SET ? WHERE idProductos = ?', [{
        nombreP,
        precioP,
        stock,
        categoria,
        Vendedor_Usuario_username: 'hi'},id],
        (err, result) => general.redirect(res, err, result, '/products')
    )
}

Productos.prototype.addProduct = function(req, res){
    var estado = true
    const {nombreP, precioP, stock, categoria} = req.body
    this.connection.query('INSERT INTO productos SET?', {
        nombreP,
        precioP,
        stock,
        categoria,
        estado,
        Vendedor_Usuario_username: 'hi'},
        (err, result) => general.redirect(res, err, result, '/products')
    )
}

module.exports = Productos