package com.browserstack;

import static org.junit.Assert.*;

//import junit.framework.Assert;
import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.net.URL;

import org.junit.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
//import org.testng.Assert;

public class SingleTest extends BrowserStackJUnitTest {

  public static final String USERNAME = "BROWSERSTACK_USERNAME";
  public static final String AUTOMATE_KEY = "BROWSERSTACK_ACCESS_KEY";
  public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";

  public static final String testString = "件置邮“有发件脱脱稿近请查有接近网的能机置件未邮邮机脱作没能连您件查脱机近没件接邮已稿期近邮机接网看草送未草近邮件脱邮脱机您您连近成有已邮稿“作稿件看脱步机设草送邮机置已您置件脱件能机和期在件步请在机已未近看机和接时的络作邮设络脱邮邮邮您草机件请看选机您设连邮脱时设发您选络送在的和邮成和件择网置件工的设同成接的机您择同“送有有设看件脱置连件置稿选件期选设择置选成件件期络近您步您邮连邮邮看未有件成机近网您择件的稿同时设稿件邮已件草草件脱的同邮在邮已脱选邮未邮邮件接的同“同草在查件置作在的邮时择发设机和件选步脱步邮未送您脱设近“完置请作置发有设步查近的件发设未连在网没脱同脱时未发作件步机草已邮作邮件成已您未件在连邮邮发设络完件邮送脱步草邮没未在您络草邮设网能已步设您未有脱时件机草邮网近请机查您脱草没机没没送机步查稿“有接“邮查选邮工稿机设步发未网连置邮有“邮连未工近和件机机草接成的邮送同您看作邮件有择邮请期完脱邮草件查邮能近稿送步近期邮未期连没送接件机件设期连您邮件看脱络件看脱机件您置草络步时在能脱接请看稿脱接在近期请“同设机作送请有能机您置连邮设机置件邮邮在作时时您机同同和络选邮接选机机置的成草完和未选时“作网步脱您邮完件接择作置期脱请的有步择稿件件草机置邮选没请查设设络发网的连选有络您有草件和置置件脱时已期络机机件件草近时接网发期脱草查邮机件稿完置查期“件作近稿件草置邮邮连和件接择送和步机没发成络查近脱选邮选您查件选邮成“时发作置工接选步作在机选置工择邮您机您机机工在送看件网您“脱邮“您机择您络设“件和机件设您脱您置络接置稿择邮的已邮时件看作作件件择没邮的脱步您件件和在件件脱的邮发的接未件置件工有未的稿您草择“脱邮您发成请邮件发近成没近您能作脱邮件网机置络和络的完邮同和连没络查稿您择在您和看脱邮看稿选件成您送没择步网脱成件已选和能件能件近完同近查时件工有有设完脱同选有工件能置已完没和的设请期脱有同在同网在连工和没工能件有邮置没期作脱您邮请选未您件没近完机稿设件置络工机机您脱连在的已成邮在近完未邮发设看件送稿脱成邮请工接看看没设作设已和您同步查机查设邮时您络脱工工选看邮能您请稿件送工置发机置机件网查请设您件同置和的近步机的步没机“稿时择机工机接接查件已设设邮的置设络有置件有送件脱件工能脱择送脱没工择完有未请件件机看有邮步发接同置同请未机近择完成已有机和连同络机机能已邮设择有机络机看送件发查看接择同能络发有和“同步步";

  public static final String script = ""
          + "var str = \"" + testString + "\";"
          + "var callback = arguments[arguments.length-1];"
          + "callback(str);";

  private WebDriver driver;

  @Before
  public void setup() throws Exception {
    boolean useBrowserStack = true;
    if (useBrowserStack) {
      DesiredCapabilities caps = new DesiredCapabilities();
      caps.setCapability("browser", "Chrome");
      caps.setCapability("browser_version", "69.0");
      caps.setCapability("os", "Windows");
      caps.setCapability("os_version", "10");
      caps.setCapability("resolution", "1024x768");
      driver = new RemoteWebDriver(new URL(URL), caps);
    } else {
//      System.setProperty("webdriver.chrome.driver","C:\\Users\\Chuck\\chromedriver.exe");
      driver = new ChromeDriver();
    }
  }

  @After
  public void teardown() {
    driver.quit();
  }

  @Test
  public void test() throws Exception {
    for (int i = 0; i < 100; i++) {
      Object result = ((JavascriptExecutor) driver).executeAsyncScript(script, new Object[] {});
      System.out.println("Expected = " + testString);
      System.out.println("Received = " + result);
      Assert.assertEquals(result, testString);
    }
  }
}
