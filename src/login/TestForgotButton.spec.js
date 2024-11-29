const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Kiểm tra nút "Quên mật khẩu"', function() {
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
  it('Kiểm tra nút "Quên mật khẩu"', async function() {
    await driver.get("http://localhost:4002/index.php?page=signIn")
    await driver.findElement(By.linkText("quên mật khẩu?")).click()
  })
})
