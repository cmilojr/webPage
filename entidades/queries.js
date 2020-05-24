const general = require('./General')

function queries(connection){
    this.connection = connection
}

// queries.prototype.notify = function(mensaje){
//     console.log(mensaje)
// }

queries.prototype.list = function(res, table, view){
    this.connection.query(`SELECT * from ${table}`, (err, result) => 
    general.render(res, err, result, `../../src/view/${view}`, { shop: result }))
}

queries.prototype.deleteData = function(res, id){
    this.connection.query(`DELETE FROM productos WHERE idProductos = ${id}`, (err, result) => 
        general.redirect(res, err, result, '/products')
    )
}

queries.prototype.information = function(res, table, file, id){
    this.connection.query(`SELECT * FROM ${table} WHERE idProductos = ${id}`, (err, result) => {
        general.render(res, err, result, `../../src/view/${file}`, {data: result[0]})
    })
}

// queries.prototype.updateData = function(res, table, data){
//     this.connection.query(`INSERT INTO ${table} SET?`, {
//         nombreP,
//         precioP,
//         stock,
//         categoria,
//         Vendedor_Usuario_username: 'hi'},
//         (err, result) => general.redirect(res, err, result, '/products')
//     )
// }

module.exports = queries