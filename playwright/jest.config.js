module.exports = {
  preset: "jest-playwright-preset",
  globals: {
    URL: "https://angular-6-registration-login-example.stackblitz.io/register"
  },
  testMatch: [
      "**/tests/**/*.test.js"
  ],
  verbose: true
}