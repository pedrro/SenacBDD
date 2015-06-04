$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login_Portal_do_Aluno.feature");
formatter.feature({
  "id": "login-no-portal-do-aluno",
  "description": "\r\nEu como aluno\r\nDesejo realizar o meu login no portal do aluno\r\nPara visualizar minhas notas",
  "name": "Login no Portal do Aluno",
  "keyword": "Funcionalidade",
  "line": 2,
  "comments": [
    {
      "value": "#language: pt",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "login-no-portal-do-aluno;login-errado-no-portal-do-aluno",
  "description": "",
  "name": "Login errado no portal do aluno",
  "keyword": "Cenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "que estou no portal do aluno",
  "keyword": "Dado ",
  "line": 9
});
formatter.step({
  "name": "seleciono a minha unidade",
  "keyword": "Quando ",
  "line": 10
});
formatter.step({
  "name": "digito um usuario",
  "keyword": "E ",
  "line": 11
});
formatter.step({
  "name": "digito uma senha",
  "keyword": "E ",
  "line": 12
});
formatter.step({
  "name": "clico no botao de login",
  "keyword": "Entao ",
  "line": 13
});
formatter.step({
  "name": "uma mensagem de erro aparece na tela",
  "keyword": "E ",
  "line": 14
});
formatter.match({
  "location": "LoginPortalDoAlunoSteps.que_estou_no_portal_do_aluno()"
});
formatter.result({
  "duration": 5447695310,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Login - ]Portal Acadêmico SEN...\u003e but was:\u003c[]Portal Acadêmico SEN...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat SeleniumTests.LoginPortalDoAlunoSteps.que_estou_no_portal_do_aluno(LoginPortalDoAlunoSteps.java:23)\r\n\tat ✽.Dado que estou no portal do aluno(Login_Portal_do_Aluno.feature:9)\r\n"
});
formatter.match({
  "location": "LoginPortalDoAlunoSteps.seleciono_a_minha_unidade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPortalDoAlunoSteps.digito_um_usuario()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPortalDoAlunoSteps.digito_uma_senha()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PortaldoAlunoSteps.clico_no_botao_de_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPortalDoAlunoSteps.uma_mensagem_de_erro_aparece_na_tela()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Portal_do_Aluno.feature");
formatter.feature({
  "id": "portal-do-aluno",
  "description": "\r\nEu como aluno\r\nDesejo entrar no portal do aluno",
  "name": "Portal do Aluno",
  "keyword": "Funcionalidade",
  "line": 2,
  "comments": [
    {
      "value": "#language: pt",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "portal-do-aluno;encontrar-o-portal-do-aluno",
  "description": "",
  "name": "Encontrar o portal do aluno",
  "keyword": "Cenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "que estou no site do Senac-RS",
  "keyword": "Dado ",
  "line": 8
});
formatter.step({
  "name": "clico na aba Graduacao",
  "keyword": "Quando ",
  "line": 9
});
formatter.step({
  "name": "clico no botao de login",
  "keyword": "Entao ",
  "line": 10
});
formatter.step({
  "name": "sou direcionado para a tela de login do portal",
  "keyword": "E ",
  "line": 11
});
formatter.match({
  "location": "PortaldoAlunoSteps.que_estou_no_site_do_Senac_RS()"
});
formatter.result({
  "duration": 7133195115,
  "status": "passed"
});
formatter.match({
  "location": "PortaldoAlunoSteps.clico_na_aba_Graduacao()"
});
formatter.result({
  "duration": 1533401193,
  "status": "passed"
});
formatter.match({
  "location": "PortaldoAlunoSteps.clico_no_botao_de_login()"
});
formatter.result({
  "duration": 1365180989,
  "status": "passed"
});
formatter.match({
  "location": "PortaldoAlunoSteps.sou_direcionado_para_a_tela_de_login_do_portal()"
});
formatter.result({
  "duration": 3628098075,
  "status": "passed"
});
});