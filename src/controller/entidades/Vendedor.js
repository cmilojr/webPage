const general = require('./General')

function Vendedor(connection){
    this.connection = connection
}

Vendedor.prototype.notify = function(mensaje){
    //console.log(mensaje)
}

Vendedor.prototype.loadProfile = function(req, res){
    const {id} = req.params;
    this.connection.query(`SELECT * FROM vendedor WHERE Usuario_username = "hi"`, (err, result) =>
        general.render(res, err, result, '../../src/view/profile.ejs', {data: result[0]}))
}

Vendedor.prototype.updateProfile = function(req, res){
    const {id} = req.params;
    const {nombresU, apellidosU, celular, correo} = req.body
    connestion.query('UPDATE vendedor SET ? WHERE Usuario_username = ?', [{
        nombresU,
        apellidosU,
        celular,
        correo,
        Usuario_username: id},id], (err, result) => 
        general.redirect(res, err, result, '/updateProfile')
    )
}

module.exports = Vendedor