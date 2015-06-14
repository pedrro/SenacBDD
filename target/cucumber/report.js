$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaBiblioteca.feature");
formatter.feature({
  "id": "busca-na-biblioteca",
  "description": "Eu como usuario\r\nDesejo realizar uma busca na biblioteca do senac",
  "name": "Busca na biblioteca",
  "keyword": "Funcionalidade",
  "line": 2,
  "comments": [
    {
      "value": "#language: pt",
      "line": 1
    }
  ]
});
formatter.before({
  "duration": 11650592528,
  "status": "passed"
});
formatter.scenario({
  "id": "busca-na-biblioteca;busca-de-tcc-orientado-por-luis-ries",
  "description": "",
  "name": "Busca de tcc orientado por luis ries",
  "keyword": "Cenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "que estou na pagina da biblioteca",
  "keyword": "Dado ",
  "line": 7
});
formatter.step({
  "name": "digito Luis Ries",
  "keyword": "Quando ",
  "line": 8
});
formatter.step({
  "name": "clico em pesquisar",
  "keyword": "E ",
  "line": 9
});
formatter.step({
  "name": "a pesquisa esperada aparece",
  "keyword": "Entao ",
  "line": 10
});
formatter.match({
  "location": "BuscaBiblioteca.que_estou_na_pagina_da_biblioteca()"
});
formatter.result({
  "duration": 4344505441,
  "status": "passed"
});
formatter.match({
  "location": "BuscaBiblioteca.digito_Luis_Ries()"
});
formatter.result({
  "duration": 728346277,
  "status": "passed"
});
formatter.match({
  "location": "BuscaBiblioteca.clico_em_pesquisar()"
});
formatter.result({
  "duration": 813418489,
  "status": "passed"
});
formatter.match({
  "location": "BuscaBiblioteca.a_pesquisa_esperada_aparece()"
});
formatter.result({
  "duration": 2143775202,
  "status": "passed"
});
formatter.after({
  "duration": 885052399,
  "status": "passed"
});
formatter.before({
  "duration": 5445795632,
  "status": "passed"
});
formatter.scenario({
  "id": "busca-na-biblioteca;busca-de-resultado-inexistente",
  "description": "",
  "name": "Busca de resultado inexistente",
  "keyword": "Cenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "que estou na pagina da biblioteca",
  "keyword": "Dado ",
  "line": 13
});
formatter.step({
  "name": "digito caracteres especiais",
  "keyword": "Quando ",
  "line": 14
});
formatter.step({
  "name": "clico em pesquisar",
  "keyword": "E ",
  "line": 15
});
formatter.step({
  "name": "o site retorna que o valor nao existe",
  "keyword": "Entao ",
  "line": 16
});
formatter.match({
  "location": "BuscaBiblioteca.que_estou_na_pagina_da_biblioteca()"
});
formatter.result({
  "duration": 4266195667,
  "status": "passed"
});
formatter.match({
  "location": "BuscaBiblioteca.digito_caracteres_especiais()"
});
formatter.result({
  "duration": 758401506,
  "status": "passed"
});
formatter.match({
  "location": "BuscaBiblioteca.clico_em_pesquisar()"
});
formatter.result({
  "duration": 828002310,
  "status": "passed"
});
formatter.match({
  "location": "BuscaBiblioteca.o_site_retorna_que_o_valor_nao_existe()"
});
formatter.result({
  "duration": 1538774907,
  "status": "passed"
});
formatter.after({
  "duration": 960378561,
  "status": "passed"
});
});