const sql = require('mssql');
const request = require('request');
const config = require('../dao/rotalivros').configSql();

async function getLivros(idTitulo){ 
    let aCmdSql = "";    
    if(idTitulo != "")
        aCmdSql = ' Where (id_livro = '+idTitulo.toString()+')';
    let conn = await sql.connect(config);
    aCmdSql = 'Select \
                    id_livro,       \
                    titulo,         \
                    autor,          \
                    edicao          \
                from livros '+ aCmdSql;
    let result = await conn.request()               
        .query(aCmdSql);                
    await sql.close(conn);   
    return result.recordset;
}

async function insLivros(titulo, autor, edicao){     
    let conn = await sql.connect(config);
    let result = await conn.request()       
        .input("titulo", sql.VarChar(50), titulo)
        .input("autor", sql.VarChar(80), autor)
        .input("edicao", sql.VarChar(40), edicao)     
        .query("INSERT INTO livros (titulo, autor, edicao) values (@titulo, @autor, @edicao)");
    await sql.close(conn);   
    return result.recordset;
}

async function delLivro(idLivro){     
    let conn = await sql.connect(config);
    let result = await conn.request()       
        .input("idLivro", sql.INT, idLivro)
        .query("delete from livros where id_livro = @idLivro")
        await sql.close(conn);   
    return true;
}

async function updateDataLivros(idLivro, titulo, autor, edicao){   
    var aCmdSql = "UPDATE LIVROS SET ";
    if(titulo != undefined)
        aCmdSql = aCmdSql + " titulo = '" + titulo.toString() + "'";
    if(autor != undefined){
        if(titulo != undefined)
            aCmdSql = aCmdSql + " , autor = '" + autor.toString() + "'";
        else    
            aCmdSql = aCmdSql + " autor = '"+autor.toString() + "'";
    }        
    if(edicao != undefined){
        if((titulo != undefined)||(autor != undefined))
            aCmdSql = aCmdSql + ", edicao = '" + edicao.toString() + "'";  
        else
            aCmdSql = aCmdSql + " edicao = '" + edicao.toString() + "'";       
    }        
    aCmdSql = aCmdSql + " Where id_livro = " + idLivro.toString();
    let conn = await sql.connect(config);  
    let result = await conn.request()
        .query(aCmdSql);
    await sql.close(conn);    
    return true;
}

module.exports.getLivros = getLivros;
module.exports.insLivros = insLivros;
module.exports.delLivro = delLivro;
module.exports.updateDataLivros = updateDataLivros;