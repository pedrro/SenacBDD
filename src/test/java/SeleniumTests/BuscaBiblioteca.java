package SeleniumTests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import static org.junit.Assert.*;


public class BuscaBiblioteca {
	  private WebDriver driver;
	  private String baseUrl;
	
	@Before
	public void setUp() throws Exception{
		driver = new FirefoxDriver();
		baseUrl="http://biblioteca.senacrs.com.br/pergamum_web/biblioteca/index.php";
		
	}
	
	@Dado("^que estou na pagina da biblioteca$")
	public void que_estou_na_pagina_da_biblioteca() throws Throwable {
		driver.get(baseUrl);
	    assertEquals("...SENAC-RS...",driver.getTitle());
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Quando("^digito Luis Ries$")
	public void digito_Luis_Ries() throws Throwable {
	    driver.findElement(By.name("termo_para_pesquisa")).sendKeys("Luis Ries");
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Quando("^clico em pesquisar$")
	public void clico_em_pesquisar() throws Throwable {
	    driver.findElement(By.id("pesq")).click();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Entao("^a pesquisa esperada aparece$")
	public void a_pesquisa_esperada_aparece() throws Throwable {
	   //driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	   String pesquisa = driver.findElement(By.xpath("/html/body/form/table[@class='altura']/tbody/tr[1]/td/table[2]"
	   		+ "/tbody/tr/td[2]/table/tbody/tr/td/table[2]"
	   		+ "/tbody/tr/td/span[@id='div_resultados']/div[@id='id_avancado']"
	   		+ "/table/tbody/tr/td[1]/fieldset[@class='borda_termo']"
	   		+ "/a[@class='txt_acervo']")).getText();
	   assertEquals("\"Luis Ries\"",pesquisa);
	   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Quando("^digito caracteres especiais$")
	public void digito_caracteres_especiais() throws Throwable {
	    driver.findElement(By.name("termo_para_pesquisa")).sendKeys("@#$%¨¨");
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Entao("^o site retorna que o valor nao existe$")
	public void o_site_retorna_que_o_valor_nao_existe() throws Throwable {
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		String pesquisa = driver.findElement(By.xpath("/html/body/form/table[@class='altura']/tbody/tr[1]/td/table[2]/tbody/tr/td[2]/table/tbody/tr/td/table[2]/tbody/tr/td/span[@id='div_resultados']/table/tbody/tr/td/div[@id='TabbedPanels1']/div[@class='TabbedPanelsContentGroup']/div[@class='TabbedPanelsContent TabbedPanelsContentVisible']/span[@id='id_resultados_temp']/div[@class='pmu_dados1']/b/center")).getText();
		assertEquals("Não existe registro cadastrado com o(s) filtro(s) utilizado(s).\n\nSugestão: Pesquise nas outras guias.",pesquisa);

	}
	
	@After
	public void tearDown() throws Exception{
		driver.quit();
	}
}

