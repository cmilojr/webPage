const general = require('./General')

function Productos(connection){
    this.connection = connection
}

Productos.prototype.list = function(req, res){
    this.connection.query('SELECT * from productos', (err, result) => 
        general.render(res, err, result, '../../src/view/products.ejs', { shop: result })
    )
}

Productos.prototype.deleteProduct = function(req, res){
    const {id} = req.params;
    this.connection.query(`DELETE FROM productos WHERE idProductos = ${id}`, (err, result) => 
        this.redirect(res, err, result, '/products')
    )
}

Productos.prototype.addProduct = function(req, res){
    const {nombreP, precioP, stock, categoria} = req.body
    this.connection.query('INSERT INTO productos SET?', {
        nombreP,
        precioP,
        stock,
        categoria,
        Vendedor_Usuario_username: 'hi'},
        (err, result) => general.redirect(res, err, result, '/products')
    )
}

Productos.prototype.editProducts = function(req, res){
    const {id} = req.params;
    this.connection.query(`SELECT * FROM productos WHERE idProductos = ${id}`, (err, result) => {
        general.render(res, err, result, '../../src/view/editProducts.ejs', {data: result[0]})
    })
}

Productos.prototype.updateProduct = function(req, res){
    const {id} = req.params;
    const {nombreP, precioP, stock, categoria} = req.body
    this.connection.query('UPDATE productos SET ? WHERE idProductos = ?', [{
        nombreP,
        precioP,
        stock,
        categoria,
        Vendedor_Usuario_username: 'hi'},id],
        (err, result) => general.redirect(res, err, result, '/products')
    )
}

Productos.prototype.listshop = function(req, res){
    this.connection.query('SELECT * from productos', (err, result) => {
        general.render(res, err, result, '../../src/view/buy.ejs', { shop: result })
    })
}

Productos.prototype.info = function(req, res){
    const {id} = req.params;
    this.connection.query(`SELECT * FROM productos WHERE idProductos = ${id}`, (err, result) => {
        general.render(res, err, result, '../../src/view/info.ejs', {data: result[0]})
    })
}

module.exports = Productos