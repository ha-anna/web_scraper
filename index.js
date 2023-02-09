const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://en.wikipedia.org/wiki/Extraordinary_Attorney_Woo', {waitUntil : 'domcontentloaded'})

  const links = await page.evaluate(() => Array.from(document.querySelectorAll('table.wikitable:nth-child(62) > tbody:nth-child(2) > tr'), (e) => e.textContent))

  console.log(links[2])

  await browser.close()
}

run()
