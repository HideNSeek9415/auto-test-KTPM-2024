const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Đăng nhập với email trống', function() {
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
  it('Đăng nhập với email trống', async function() {
    await driver.get("http://localhost:4002/index.php?page=signIn")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123")
    await driver.findElement(By.id("btn-signin")).click()
  })
})
