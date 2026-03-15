import { expect,  test } from '@playwright/test';

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
] as const;

test.describe.serial("Feature 01 - Use case 02",async () => {


    test("Test0201.Dummy Title 21", {tag:['@tag21','@regression','@uc02']}, async ({ }, testInfo) => { 
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });

    test("Test0202.Dummy Title 22", {tag:['@tag22','@smoke','@uc02']}, async ({ page }, testInfo) => { 
        test.setTimeout(10000);
        console.log(`Test:${testInfo.title} is running!`);
        await page.goto('https://demo.playwright.dev/todomvc');
        const newTodo = page.getByPlaceholder('What needs to be done?')
        await newTodo.fill(TODO_ITEMS[0]);
        await newTodo.press('Enter');
        await expect(page.getByTestId('todo-title')).toHaveText([
            TODO_ITEMS[0]
        ]); 
        expect(testInfo.title).toBeTruthy();
    });

    test("Test0203.Dummy Title 23", {tag:['@tag23','@smoke','@uc02']}, async ({ }, testInfo) => {
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });    

})