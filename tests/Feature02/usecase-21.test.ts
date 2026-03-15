import { expect,  test } from '@playwright/test';

test.describe("Feature 02 - Use case 03", async () => {

    test("Test2101.Dummy Title 31", {tag:['@tag31','@regression','@uc03']}, async ({ }, testInfo) => { 
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });

    test("Test2102.Dummy Title 32", {tag:['@tag32','@smoke','@uc03']}, async ({ }, testInfo) => { 
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });

    test("Test2103.Dummy Title 33", {tag:['@tag33','@smoke','@uc03']}, async ({ }, testInfo) => { 
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });

});