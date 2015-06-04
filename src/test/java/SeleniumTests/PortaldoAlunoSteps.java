package SeleniumTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.java.pt.*;
import static org.junit.Assert.*;

public class PortaldoAlunoSteps {
	  private WebDriver driver;
	
	
	@Dado("^que estou no site do Senac-RS$")
	public void que_estou_no_site_do_Senac_RS() throws Throwable {
	    driver = new FirefoxDriver();
		driver.get("http://www.senacrs.com.br/");
		String titleExpected ="Senac-RS | Cursos de Formação e Aperfeicoamento, Técnicos, Graduação, Pós-Graduação e Extensão";
	    assertEquals(titleExpected, driver.getTitle());
	}

	@Quando("^clico na aba Graduacao$")
	public void clico_na_aba_Graduacao() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[@id='container']/div[@id='cabecalho']/ul[@class='menu']/div[@id='menunovo']/span[@class='menunovo'][6]/a")).click();
		String validatePage = driver.findElement(By.xpath("/html/body/div[@id='container']/div[@id='pagina']/div[@id='colDupla']/div[@id='colCentroInterna']/div[@class='graduacao']/h2[@class='bg']")).getText();
		assertEquals(validatePage,"Graduação - Aliança entre teoria e prática para o aluno");
	}

	@Entao("^clico no botao de login$")
	public void clico_no_botao_de_login() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[@id='container']/div[@id='pagina']/div[@id='colDir']/div[@class='portal']/div[@class='box clearfix']/form/input[@class='botao']")).click();
	}

	@Entao("^sou direcionado para a tela de login do portal$")
	public void sou_direcionado_para_a_tela_de_login_do_portal() throws Throwable {
	    String portalTitleExpected="Login - Portal Acadêmico SENAC";
	    assertEquals(portalTitleExpected, driver.getTitle());
	    driver.quit();
	}
}
