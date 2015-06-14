#language: pt
	Funcionalidade: Busca na biblioteca
	Eu como usuario
	Desejo realizar uma busca na biblioteca do senac
	
Cenario: Busca de tcc orientado por luis ries
	Dado que estou na pagina da biblioteca
	Quando digito Luis Ries
	E clico em pesquisar
	Entao a pesquisa esperada aparece
	
Cenario: Busca de resultado inexistente
	Dado que estou na pagina da biblioteca
	Quando digito caracteres especiais
	E clico em pesquisar
	Entao o site retorna que o valor nao existe