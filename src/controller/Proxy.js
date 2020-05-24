const persona = {
    name: `Pepe`,
    edad: 9
}

const handler = {
    get(obj, prop){
        if(prop == `name`){
            console.log(obj.name)
        } else {
            console.log(`Bobo marica`)
        }
    }
}

const proxy = new Proxy(persona, handler)

proxy.name