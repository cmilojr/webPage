const general = require('./General')
const observer = require('./Observador')

function Compras(connection){
    this.connection = connection
    this.chance = new observer(connection)
}

Compras.prototype.notify = function(mensaje){
    console.log(mensaje)
}

Compras.prototype.purchased = function(req, res){
    var todayDate = new Date().toISOString().slice(0,10);
    const {id} = req.params;
    const {precioP,cantidadP,stock} = req.body;
    var valor = cantidadP * precioP
    this.connection.query(`SELECT precioP FROM productos WHERE idProductos = ${id}`, 
    (err, result) => {
        this.connection.query('INSERT INTO compras SET?', {
            fechaC: todayDate,
            Cliente_Usuario_username: 'hello'}, 
            (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        })
        this.connection.query('INSERT INTO detallecompra SET?', {
            cantidadP,
            valor,
            Compras_idCompras: 1,
            Productos_idProductos: id}, 
            (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        })

        
        this.chance.cambiarEstado(id,cantidadP,stock)
        general.redirect(res, err, result, '/products')
    })
}

Compras.prototype.addProduct = function(req, res){
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

Compras.prototype.updateProduct = function(req, res){
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

// Compras.prototype.info = function(req, res){
//     const {id} = req.params;
//     this.connection.query(`SELECT * FROM productos WHERE idProductos = ${id}`, (err, result) => {
//         general.render(res, err, result, '../../src/view/info.ejs', {data: result[0]})
//     })
// }

module.exports = Compras