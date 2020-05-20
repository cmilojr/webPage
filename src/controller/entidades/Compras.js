const general = require('./General')

function Compras(connection){
    this.connection = connection
}

Compras.prototype.notify = function(mensaje){
    console.log(mensaje)
}

Compras.prototype.purchased = function(req, res){
    var todayDate = new Date().toISOString().slice(0,10);
    const {id} = req.params;
    const {nombreP, precioP, stock, categoria} = req.body
    this.connection.query(`SELECT * FROM productos WHERE idProductos = ${id}`, 
    (err, res) => {
        if(err){
            console.log(err);
        } else {
            this.connection.query('INSERT INTO compras SET?', {
                fechaC: todayDate,
                Cliente_Usuario_username: 'hello'
            }, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            })
        }
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