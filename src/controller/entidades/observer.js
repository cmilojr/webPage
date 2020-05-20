/*function Observer(){
    this.notify = function(message){
        //Pon aqui tu codigo
    }
}*/

function Subject(){
    this.observers = []
    this.register = function(observer){
        if(this.observers.indexOf(observer) === -1){
            this.observers.push(observer)
        }
    }
    this.unRegister = function(observer){
        var index = this.observers.indexOf(observer)
        if (index > -1){
            this.observers.splice(index, 1)
        }
    }
    this.notify = function(message){
        this.observers.forEach(function(observer){
            observer.notify(message)
        })
    }
}
module.exports = Subject
/*function nomClas(parametros){
    this.loQueNecesites = parametros
    this.notify = function(message){
        console.log(`Tu mensaje ${message}`)
    }
}*/

/*const notificador = new Subject()
const obj1 = new nomClas('Lo que tu quieras vv')
const obj2 = new nomClas('Lo que tu quieras vv X2')

notificador.register(obj1)
notificador.register(obj2)

notificador.notify('Tu mensaje bb')*/