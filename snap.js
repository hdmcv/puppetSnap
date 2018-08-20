
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://pittsburgh.craigslist.org');
  await page.screenshot({path: '/tmp/myCl.png'});

  await browser.close();
})();

