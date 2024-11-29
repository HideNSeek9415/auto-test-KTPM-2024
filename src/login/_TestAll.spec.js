const { Builder, By, Key, until } = require('selenium-webdriver')
const config = require('./_const.js')
const assert = require('assert')

describe('Kiểm thử tất cả', function() {
  this.timeout(30000)

  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser(config.browser).build()
    vars = {}
  })
  afterEach(async function() {
		await new Promise(resolve => setTimeout(resolve, 2000));
    await driver.quit();
  })
	it('Đăng nhập đúng thông tin', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("thaovy3724@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123")
    await driver.findElement(By.id("btn-signin")).click()
  })
  it('Đăng nhập với email trống', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123")
    await driver.findElement(By.id("btn-signin")).click()
  })
  it('Đăng nhập với mật khẩu trống', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("thaovy3724@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("")
    await driver.findElement(By.id("btn-signin")).click()
  })
  it('Đăng nhập với email sai định dạng', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("thaov...............y3724????@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123")
    await driver.findElement(By.id("btn-signin")).click()
  })
	it('Đăng nhập với email không tồn tại', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("vcxvn@fhsudasdf.vsdfgn")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123")
    await driver.findElement(By.id("btn-signin")).click()
  })
	it('Đăng nhập với sai thông tin mật khẩu', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("thaovy3724@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("12388")
    await driver.findElement(By.id("btn-signin")).click()
  })
	it('Đăng nhập với trường chứa mã SQL Injection', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("'or 1 = 1; --'")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123")
    await driver.findElement(By.id("btn-signin")).click()
  })
	it('Kiểm tra nút "Quên mật khẩu"', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.linkText("quên mật khẩu?")).click()
  })
})
