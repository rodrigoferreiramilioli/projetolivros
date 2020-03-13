/**
 * @swagger
 *
 * /{route}:
 *   post:
 *     summary: Request call livros
 *     description: Envio/Atualização e remoção
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: titulo
 *         type: string
 *         in: body
 *         required: true
 *         example: {"titulo" : "Nome do livro"}
 *       - name: autor
 *         type: string
 *         in: body
 *         required: true
 *         example: {"autor" : "rodrigo mi"}
 *       - name: edicao
 *         type: string
 *         in: body
 *         required: true
 *         example: {"edicao" : "de abril de 2020"}
 */