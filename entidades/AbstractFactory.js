const Productos = require('./Productos')
const Vendedor = require('./Vendedor')
const Compras = require('./Compras')

function AbstractFactory(connection){
    this.connection = connection
}

AbstractFactory.prototype.create = function(type){
    switch (type) {
        case 0: // Productos
            return new Productos(this.connection)
        case 1: // Vendedor
            return new Vendedor(this.connection)
        case 2: // Compras
            return new Compras(this.connection)
    }
}

module.exports = AbstractFactory