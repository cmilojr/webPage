function General(){}

General.prototype.render = function(res, err, result, ruta, data){
    if(err) {
        throw err
    }else {
        res.status(200)
        res.render(ruta, data);
    }
}

General.prototype.redirect = function(res, err, result, ruta){
    if(err) {
        throw err
    }else {
        res.redirect(ruta)
    }
}

module.exports = new General()