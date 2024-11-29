const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Đăng nhập với mật khẩu trống', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('MicrosoftEdge').build()
    vars = {}
  })
  afterEach(async function() {
    // await driver.quit();
  })
  it('Đăng nhập với mật khẩu trống', async function() {
    await driver.get("http://localhost:4002/index.php?page=signIn")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("thaovy3724@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("")
    await driver.findElement(By.id("btn-signin")).click()
  })
})
