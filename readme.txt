
/*
ALGUNS DADOS ESTÃO DISPONÍVEIS NA DOCUMENTAÇÃO DO SWAGGER.
FIZ SEM ORM.
MUDAR DAO > rotalivros.js para o seu banco de dados.
Iniciar o projeto com node index e acessar na porta 3000
Será necessário consumir put ou post de um aplicativo de envios exemplo postman
Prints dos dados e funcionamento soltos na pasta

create table livros (
	id_livro int identity(1,1),
	titulo varchar(50),
	autor varchar(80),
	edicao varchar(40)
 CONSTRAINT pk_livro_id PRIMARY KEY CLUSTERED
(
  id_livro ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

INSERT INTO livros values ('teste livro 1','rodrigo bil','abril 2020')
INSERT INTO livros values ('teste livro 3','robeval pires','abril 2010')
INSERT INTO livros values ('teste livro 2','rodrigo Lavras','abril 2018')

*/
/*
exemplos de chamada

POST
localhost:3000/
Enviar no <body> json
{
	"titulo": "AAAA",
	"autor": "aaaa",
	"edicao" : "aaaa"
}

DELETE
Enviar na solicitação o metodo delete + id localhost:3000/1

PUT
localhost:3000/:id
{
	"nome": "XITOSxx",
	"data_nascimento": "05/01/1992",
	
}

GET
localhost:3000/:id
ID do livro específico
localhost:3000/
Todos os livros


*/