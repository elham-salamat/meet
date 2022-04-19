
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

//   test('User can expand an event to see its details', async () => {
//     await page.click('.event .showDetails');
//     const eventDetails = await page.$('.event .event__Details');
//     expect(eventDetails).toBeDefined();
//   });

  afterAll(() => {
    browser.close();
  });

});


