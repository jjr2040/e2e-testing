const playwright = require('playwright');
const timeout = 90000;

describe('Angular form happy path', () => {
    test('Happy path', async() => {

        for (const browserType of ['chromium', 'firefox', 'webkit']) {
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(URL, {waitUntil: 'networkidle0'});

            // Fills form up with short password (< 6 characters)
            await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
            await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
            await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
            await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

            await page.click('.btn.btn-primary');

            await expect(page).toMatch('Registration successful', {timeout: 10000});
        }

    }, timeout);
});

describe('Angular form wrong data', () => {
    test('Short Password', async () => {

        for (const browserType of ['chromium', 'firefox', 'webkit']) {
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(URL, {waitUntil: 'networkidle0'});

            // Fills form up with short password (< 6 characters)
            await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
            await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
            await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
            await page.type('input[formcontrolname="password"]', 'short', {delay: 100});

            await page.click('.btn.btn-primary');

            await expect(page).toMatch('Password must be at least 6 characters');
        }
        
    }, timeout);
});

describe('Angular form incomplete data', () => {
    test('No firstname', async () => {
        for (const browserType of ['chromium', 'firefox', 'webkit']) { 
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(URL, {waitUntil: 'networkidle0'});

            // Fills form up with no first name
            await page.type('input[formcontrolname="firstName"]', '', {delay: 0});
            await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
            await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
            await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

            await page.click('.btn.btn-primary');

            await expect(page).toMatch('First Name is required');
        }
            
    }, timeout);

    test('No lastname', async () => {
        for (const browserType of ['chromium', 'firefox', 'webkit']) { 
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(URL, {waitUntil: 'networkidle0'});

            // Fills form up with no first name
            await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
            await page.type('input[formcontrolname="lastName"]', '', {delay: 100});
            await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
            await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

            await page.click('.btn.btn-primary');

            await expect(page).toMatch('Last Name is required');
        }
        
    }, timeout);

    test('No username', async () => {
        for (const browserType of ['chromium', 'firefox', 'webkit']) { 
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(URL, {waitUntil: 'networkidle0'});

            // Fills form up with no first name
            await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
            await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
            await page.type('input[formcontrolname="username"]', '', {delay: 100});
            await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

            await page.click('.btn.btn-primary');

            await expect(page).toMatch('Username is required');
        }
        
    }, timeout);

    test('No password', async () => {
        for (const browserType of ['chromium', 'firefox', 'webkit']) { 
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(URL, {waitUntil: 'networkidle0'});

            // Fills form up with no first name
            await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
            await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
            await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
            await page.type('input[formcontrolname="password"]', '', {delay: 100});

            await page.click('.btn.btn-primary');

            await expect(page).toMatch('Password is required');
        }
        
    }, timeout);
});