const data = require('../src/rotabase');
module.exports  = function(server){    
    server.get(
        '/:id',
        data.listData
    );
    server.post(
        '/',
        data.postDataLivros
    );
    server.del(
        '/:id',
        data.deleteDataLivros
    );
    server.put(
        '/:id',
        data.updateDataLivros
    );
}