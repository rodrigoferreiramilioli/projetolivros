var restifySwaggerJsdoc = require('restify-swagger-jsdoc');
module.exports.swagger =  function(server){
    restifySwaggerJsdoc.createSwaggerPage({
        title: 'Livros', 
        version: '1.0.0',
        server: server,
        path: "/docs",
        apis: ['./docs/*']
    });
}