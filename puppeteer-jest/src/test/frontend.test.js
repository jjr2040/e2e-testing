const timeout = 90000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'networkidle0'});
});

describe('Angular form basic', () => {
    test('Register Page', async () => {
        const h2Handle = await page.$("h2");
        const html = await page.evaluate(h2Handle => h2Handle.innerHTML, h2Handle);

        expect(html).toBe("Register");
    }, timeout);
});

describe('Angular form happy path', () => {
    test('Happy path', async() => {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(URL, {waitUntil: 'networkidle0'});

        // Fills form up with short password (< 6 characters)
        await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
        await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
        await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
        await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

        await page.click('.btn.btn-primary');

        await expect(page).toMatch('Registration successful', {timeout: 10000});
    }, timeout);
});

describe('Angular form wrong data', () => {
    test('Short Password', async () => {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(URL, {waitUntil: 'networkidle0'});

        // Fills form up with short password (< 6 characters)
        await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
        await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
        await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
        await page.type('input[formcontrolname="password"]', 'short', {delay: 100});

        await page.click('.btn.btn-primary');

        await expect(page).toMatch('Password must be at least 6 characters');
    }, timeout);
});

describe('Angular form incomplete data', () => {
    test('No firstname', async () => {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(URL, {waitUntil: 'networkidle0'});

        // Fills form up with no first name
        await page.type('input[formcontrolname="firstName"]', '', {delay: 0});
        await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
        await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
        await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

        await page.click('.btn.btn-primary');

        await expect(page).toMatch('First Name is required');
    }, timeout);

    test('No lastname', async () => {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(URL, {waitUntil: 'networkidle0'});

        // Fills form up with no first name
        await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
        await page.type('input[formcontrolname="lastName"]', '', {delay: 100});
        await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
        await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

        await page.click('.btn.btn-primary');

        await expect(page).toMatch('Last Name is required');
    }, timeout);

    test('No username', async () => {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(URL, {waitUntil: 'networkidle0'});

        // Fills form up with no first name
        await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
        await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
        await page.type('input[formcontrolname="username"]', '', {delay: 100});
        await page.type('input[formcontrolname="password"]', 'longpassword', {delay: 100});

        await page.click('.btn.btn-primary');

        await expect(page).toMatch('Username is required');
    }, timeout);

    test('No password', async () => {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(URL, {waitUntil: 'networkidle0'});

        // Fills form up with no first name
        await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
        await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
        await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
        await page.type('input[formcontrolname="password"]', '', {delay: 100});

        await page.click('.btn.btn-primary');

        await expect(page).toMatch('Password is required');
    }, timeout);
});