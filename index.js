var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello Mastertech!!!')
});

app.post('/alunos', function (req, res) {
  var body = [{name:'Fulano'}]
});

// app.put('/spyvspy', function (req, res) {
//   res.send('Harry Reasons')
// });
//
// app.delete('/spyvspy', function (req, res) {
//   res.send('All over the world')
// });


app.listen(3000)

// GET /alunos - retorna uma lista de alunos
// request
// [
//   {
//     "id" : 1,
//     "nome" : "Guilherme",
//     "matricula" : "CS12568"
//     "idade" : 32,
//   },
//   {
//     ...
//   },
//   {
//     ...
//   }
// ]
//
// Suponhamos que uma lista tem 10 alunos. se eu peço um alunos/12, receberei um 404
// status
// 200 OK - aluno encontrado
// 403 forbidden FB - Aluno proibido
// 404 NF - aluno não encontrado
//
//
// GET /alunos/{id} - Retorna um aluno
// tudo entre {} é uma variável
// Não preciso passar nenhum request pois eu passei, no get um id junto como parametro
// request
// ""
// response
// {
//   "id" : 1,
//   "nome" : "Guilherme",
//   "matricula" : "CS12568"
//   "idade" : 32,
// }
//
// POST /alunos - Cria um novo aluno
// Para criar um aluno eu passei algumas informações para o meu servidor e ele me retornou outras além das que eu passei
// 401 DU - aluno já existe
//
// request
// {
//   "nome" : "Guilherme",
//   "idade" : 32,
//   "senha" : "senha123"
// }
// response
// {
//   "id" : 1,
//   "nome" : "Guilherme",
//   "matricula" : "CS12568"
//   "idade" : 32,
// }
//
//
//
// PUT /alunos/{id} - Atualizando um aluno que já existe
// status
// 200 OK - atualizado com sucesso
// request
// {
//   "nome" : "Gambit",
//   "matricula" : "CS12568"
//   "idade" : 32,
// }
// response{
//   "id" : 1,
//   "nome" : "Gambit",
//   "matricula" : "CS12568"
//   "idade" : 32,
// }
//
//
// DELETE /alunos/{id} - Apagar aluno
// status
//   200 Ok - apagado com sucesso
// request
//   ""
// response
//   ""
