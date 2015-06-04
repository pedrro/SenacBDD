package SeleniumTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.pt.*;
import static org.junit.Assert.*;

public class LoginPortalDoAlunoSteps {
	private WebDriver driver;
	
@Dado("^que estou no portal do aluno$")
public void que_estou_no_portal_do_aluno() throws Throwable {
	driver = new FirefoxDriver();
	driver.get("http://apsweb.senacrs.com.br/modulos/aluno/login.php5");
	/*if(driver.getTitle().equals("Portal acadêmico SENAC")){
		driver.findElement(By.xpath().click();
	}*/
	String titleExpected ="Login - Portal Acadêmico SENAC";
    assertEquals(titleExpected, driver.getTitle());

}

@Quando("^seleciono a minha unidade$")
public void seleciono_a_minha_unidade() throws Throwable {
    driver.findElement(
    		By.xpath("/html[@class='x4-border-box x4-quirks']/body[@id='ExtBox1-ext-gen1015']"
    				+ "/form[@id='login']/table/tbody/tr[2]/td/table/tbody/tr[3]/td[2]/select[@id='lstUnidades']"
    				+ "/option[61]")).click();
}

@Quando("^digito um usuario$")
public void digito_um_usuario() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Quando("^digito uma senha$")
public void digito_uma_senha() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Entao("^uma mensagem de erro aparece na tela$")
public void uma_mensagem_de_erro_aparece_na_tela() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

}
