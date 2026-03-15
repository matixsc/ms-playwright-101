import { expect,  test } from '@playwright/test';

test.describe("Feature 01 - Use case 01", async () => {

    test("Test0101.Dummy Title 01", {tag:['@tag01','@regression','@uc01']}, async ({ }, testInfo) => { 
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });

    test("Test0102.Dummy Title 02", {tag:['@tag02','@smoke','@uc01']}, async ({ }, testInfo) => { 
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });

    test("Test0103.Dummy Title 03", {tag:['@tag03','@smoke','@uc01']}, async ({ }, testInfo) => { 
        console.log(`Test:${testInfo.title} is running!`);
        expect(testInfo.title).toBeTruthy();
    });

});