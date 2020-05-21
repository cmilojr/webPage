function Observador(conex){
        this.conex = conex
}

Observador.prototype.cambiarEstado = function(id, cantidad, stock){
        var estado = false;
        var stock = stock - cantidad
        this.conex.query(`SELECT * FROM productos WHERE idProductos = ${id}`,
        (err,result) => {
                if (stock <= 0){
                    this.conex.query('UPDATE productos SET ? WHERE idProductos = ?', [{
                        estado},id],
                        (err, res) => {
                            if (err) {
                                console.log(err);
                            } else {
                                //console.log(res);
                            }
                    })
            }
            this.conex.query('UPDATE productos SET ? WHERE idProductos = ?', [{
                stock},id],
                (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        //console.log(res);
                    }
            })
        }
    )
}

Observador.prototype.actualizarEstado = function (id, stock) {
        var estado = true
        if (stock > 0){
            this.conex.query('UPDATE productos SET ? WHERE idProductos = ?', [{
                estado},id],
                (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        //console.log(res);
                    }
            })
        }else{
            var estado = false
            this.conex.query('UPDATE productos SET ? WHERE idProductos = ?', [{
                estado},id],
                (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        //console.log(res);
                    }
            })
        }
}

module.exports = Observador