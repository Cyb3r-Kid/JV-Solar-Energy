import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('C:\\Users\\Dell\\.gemini\\antigravity\\brain\\f7af8171-dacb-451a-a825-8a5bd77bb30e\\scratch\\screenshots_audit2');

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

  // 1. Homepage navbar at the top
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '01_homepage_navbar_top.png') });
  console.log('Saved 01_homepage_navbar_top.png');

  // 2. Homepage navbar after scrolling
  await page.evaluate(() => window.scrollTo(0, 450));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '02_homepage_navbar_scrolled.png') });
  console.log('Saved 02_homepage_navbar_scrolled.png');

  // 3. Homepage hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '03_homepage_hero.png') });
  console.log('Saved 03_homepage_hero.png');

  // 4. Our Contribution section (on /about)
  await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Our Contribution'));
    if (el) el.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '04_our_contribution_section.png') });
  console.log('Saved 04_our_contribution_section.png');

  // 5. Customized Solar Feasibility CTA (on /solutions)
  await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Feasibility Assessment'));
    if (el) el.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '05_customized_feasibility_cta.png') });
  console.log('Saved 05_customized_feasibility_cta.png');

  // 6. About page
  await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '06_about_page.png') });
  console.log('Saved 06_about_page.png');

  // 7. Solutions page
  await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '07_solutions_page.png') });
  console.log('Saved 07_solutions_page.png');

  // 8. Projects page
  await page.goto('http://localhost:5173/projects', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '08_projects_page.png') });
  console.log('Saved 08_projects_page.png');

  // 9. Workflow page
  await page.goto('http://localhost:5173/process', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '09_workflow_page.png') });
  console.log('Saved 09_workflow_page.png');

  // 10. Contact page
  await page.goto('http://localhost:5173/contact', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '10_contact_page.png') });
  console.log('Saved 10_contact_page.png');

  // 11. Footer
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '11_footer.png') });
  console.log('Saved 11_footer.png');

  // 12. Mobile homepage (390x844)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '12_mobile_homepage.png') });
  console.log('Saved 12_mobile_homepage.png');

  // 13. Mobile navigation open
  const hamburgerBtn = await page.$('button[aria-label="Open Mobile Menu"]');
  if (hamburgerBtn) {
    await hamburgerBtn.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(OUTPUT_DIR, '13_mobile_navigation.png') });
    console.log('Saved 13_mobile_navigation.png');
  }

  // 14. Mobile footer
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '14_mobile_footer.png') });
  console.log('Saved 14_mobile_footer.png');

  await browser.close();
  console.log('\nAll 14 visual verification screenshots captured successfully!');
}

run().catch(console.error);
