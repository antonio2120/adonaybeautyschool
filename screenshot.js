const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Establecer viewport para captura vertical
  await page.setViewportSize({ width: 1080, height: 1440 });
  
  // Navegar a la página
  await page.goto('http://localhost:8001/landing.html', { waitUntil: 'networkidle' });
  
  // Esperar a que las animaciones se carguen
  await page.waitForTimeout(2000);
  
  // Capturar screenshot de toda la página
  await page.screenshot({ 
    path: '/private/var/www/adonaisbeautyschool/landing-screenshot.png',
    fullPage: true
  });
  
  console.log('✅ Screenshot capturado: landing-screenshot.png');
  await browser.close();
})();
