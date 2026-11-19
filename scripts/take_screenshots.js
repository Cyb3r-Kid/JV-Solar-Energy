import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('C:\\Users\\Dell\\.gemini\\antigravity\\brain\\f7af8171-dacb-451a-a825-8a5bd77bb30e\\scratch\\screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 1: Desktop Homepage at top (1440x900)
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '01_homepage_top.png') });
  console.log('Saved 01_homepage_top.png');

  // Test 2: Desktop Homepage after scrolling 500px (navbar solid state)
  await page.evaluate(() => window.scrollTo(0, 500));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '02_homepage_scrolled.png') });
  console.log('Saved 02_homepage_scrolled.png');

  // Test 3: About page hero
  await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '03_about_hero.png') });
  console.log('Saved 03_about_hero.png');

  // Test 4: Solutions page hero
  await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '04_solutions_hero.png') });
  console.log('Saved 04_solutions_hero.png');

  // Test 5: Projects page hero
  await page.goto('http://localhost:5173/projects', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '05_projects_hero.png') });
  console.log('Saved 05_projects_hero.png');

  // Test 6: Workflow (Process) page hero
  await page.goto('http://localhost:5173/process', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '06_workflow_hero.png') });
  console.log('Saved 06_workflow_hero.png');

  // Test 7: Desktop Footer at bottom
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '07_footer_bottom.png') });
  console.log('Saved 07_footer_bottom.png');

  // Test 8: Mobile Homepage (390x844)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '08_mobile_homepage.png') });
  console.log('Saved 08_mobile_homepage.png');

  // Test 9: Mobile Navigation Open
  const hamburgerBtn = await page.$('button[aria-label="Open Mobile Menu"]');
  if (hamburgerBtn) {
    await hamburgerBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(OUTPUT_DIR, '09_mobile_nav_open.png') });
    console.log('Saved 09_mobile_nav_open.png');
  }

  // Test 10: Mobile Footer
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '10_mobile_footer.png') });
  console.log('Saved 10_mobile_footer.png');

  // Responsive horizontal overflow audit across all breakpoints
  const viewports = [320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440];
  console.log('\n--- Auditing Horizontal Overflow across Viewports ---');
  for (const w of viewports) {
    await page.setViewport({ width: w, height: 800 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`Viewport ${w}px: ${overflow ? 'FAIL (Horizontal Overflow!)' : 'PASS (Zero Overflow)'}`);
  }

  await browser.close();
  console.log('\nAll 10 screenshot tests and responsive overflow audit completed!');
}

run().catch(console.error);
