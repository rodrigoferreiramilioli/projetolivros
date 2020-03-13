const dataRequest = require('../model/rotabase');
module.exports.listData = function (req, res, next){    
    async function getData(){          
        const data = await dataRequest.getLivros(req.params.id);
        return data;
    }
    getData().then((data) =>{
        let response = data;
        var message = {
            statusCode: '200',
            Livros: {
                data: response
            }
        }
        res.send(200, message);
        return next();        
    })
}
module.exports.postDataLivros = function (req, res, next){
    async function insLivrosData(){        
        var titulo = req.body.titulo;        
        var autor = req.body.autor;
        var edicao = req.body.edicao;        
        var result = await dataRequest.insLivros(titulo, autor, edicao);
        return result;
    }
    insLivrosData().then((data) =>{
        var nessage = {
            statusCode: '200',
            "message": "OK"
        }
        res.send(nessage);
        return next();
    }); 
}

module.exports.deleteDataLivros = function (req, res, next){
    async function getData(){                  
        const data = await dataRequest.delLivro(req.params.id);
        return data;
    }
    console.log(req.params.id);
    if(req.params.id == ""){
        var message = {
            statusCode: '400',
            message: 'Id não informado'
        }
        res.send(200, message);
        return next();        
    } else {
        getData().then((data) =>{
            let response = data;
            var message = {
                statusCode: '200',
                message: 'OK'
            }
            res.send(200, message);
            return next();        
        })
    }
    
}
module.exports.updateDataLivros = function (req, res, next){
    async function getData(){ 
        var titulo;
        var autor;
        var edicao;

        if(req.body.titulo != "")                 
            titulo = req.body.titulo;  
        if(req.body.autor != "")       
            autor = req.body.autor;
        if(req.body.edicao != "") 
            edicao = req.body.edicao;

        var result = await dataRequest.updateDataLivros(req.params.id,titulo, autor, edicao);
        return result;
    }    
    if(req.params.id == ""){
        var message = {
            statusCode: '400',
            message: 'Id não informado'
        }        
        res.send(200, message);
        return next();        
    } else {
        getData().then((data) =>{
            let response = data;
            if(data == true){
                var message = {
                    statusCode: '200',
                    message: 'OK'
                }
            }
            res.send(200, message);
            return next();        
        })
    }
    
}