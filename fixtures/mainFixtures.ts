import { mergeTests } from 'playwright/test';
import { test as uiPages } from './UiPages';

export const test = mergeTests(uiPages);
export { expect } from '@playwright/test';
