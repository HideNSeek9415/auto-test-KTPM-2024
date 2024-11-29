const { Builder, By, Key, until } = require('selenium-webdriver')
const config = require('./_const.js')
const assert = require('assert')

describe('Đăng nhập với sai thông tin mật khẩu', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser(config.browser).build()
    vars = {}
  })
  afterEach(async function() {
    // await driver.quit();
  })
  it('Đăng nhập với sai thông tin mật khẩu', async function() {
    await driver.get(`${config.urlpath}/index.php?page=signIn`)
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("thaovy3724@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("12388")
    await driver.findElement(By.id("btn-signin")).click()
  })
})
