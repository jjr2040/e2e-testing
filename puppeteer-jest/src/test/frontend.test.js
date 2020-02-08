const timeout = 30000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'networkidle0'})
});

describe('Angular form', () => {
    test('Register Page', async () => {
        const h2Handle = await page.$("h2");
        const html = await page.evaluate(h2Handle => h2Handle.innerHTML, h2Handle);

        expect(html).toBe("Register");
    }, timeout);

    test('Short Password', async () => {
        // Fills form up with short password (< 6 characters)
        await page.type('input[formcontrolname="firstName"]', 'fake firstname', {delay: 100});
        await page.type('input[formcontrolname="lastName"]', 'fake lastname', {delay: 100});
        await page.type('input[formcontrolname="username"]', 'fake username', {delay: 100});
        await page.type('input[formcontrolname="password"]', 'short', {delay: 100});

        await page.click('.btn.btn-primary');

        await expect(page).toMatch('Password must be at least 6 characters')
    }, timeout);
});