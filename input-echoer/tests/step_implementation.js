/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
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



step("Go to input echoer page", async () => {
    await goto("http://localhost:3000/");
})

step("Write a <item>", async () => {
    await write(item);
})

step("Click submit button", async () => {
    await click("SUBMIT");
})

step("Must display <item>", async () => {
    assert.ok(await text(item).exists(0, 0));
})
