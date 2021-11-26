/* globals gauge*/
"use strict";
const path = require('path');
const { openBrowser, write, closeBrowser, goto, press, screenshot, above, click, checkBox, listItem, toLeftOf, link, text, into, textBox, evaluate } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};


//--------------------- Guest Ledger Book -----------------
step("Open guest-ledger-book application", async function () {
    await goto("http://localhost:3000/");
});

step("Write <item> on email field", async (item) => {
    await write(item, into(textBox("please enter your email..")));
    await press('Tab');
});

step("Write <item> on message field", async (item) => {
    await write(item, into(textBox("please enter your message..")));
});

step("Click <item> button", async (item) => {
    await click(item);
});

step("Must display <email> on list", async function (email) {
    assert.ok(await text(email).exists(0, 0));
});
