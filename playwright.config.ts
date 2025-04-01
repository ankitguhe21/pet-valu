import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL || 'https://api.petvalu.ca',
    extraHTTPHeaders: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  tsconfig: 'tsconfig.json',

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testDir: './',
      testMatch: 'auth.setup.ts',
    },
    {
      name: 'API Tests',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './.auth/user.json',
        baseURL: 'https://api.petvalu.ca',
      },

      dependencies: ['setup'],
      testDir: './tests/api',
      testMatch: '**/*.spec.ts',
    },
    {
      name: 'UI Tests',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './.auth/user.json',
        baseURL: 'https://www.petvalu.ca/',
        permissions: ['geolocation'],
        geolocation: { latitude: 43.7, longitude: -79.4 },
        locale: 'en-CA',
      },

      dependencies: ['setup'],
      testDir: './tests/UI',
      testMatch: '**/*.spec.ts',
    },
  ],
});
