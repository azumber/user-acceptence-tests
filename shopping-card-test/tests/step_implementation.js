/* globals gauge*/
"use strict";
const path = require('path');
const {
    focus,
    openBrowser,
    closeBrowser,
    goto,
    click,
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

step("Open basic-shopping-card application", async function () {
    await goto("http://localhost:3000/");
});

step("Focus Add to List button", async function () {
    await focus("Add to List");
});

step("Click Add to List button", async function () {
    await click("Add to List");
});

step("Focus Basket button", async function () {
    await focus("Basket");
});

step("Click Basket button", async function () {
    await click("Basket");
});

step("Focus + button", async function () {
    await focus("+");
});

step("Click + button", async function () {
    await click("+");
});

step("Focus - button", async function () {
    await focus("-");
});

step("Click - button", async function () {
    await click("-");
});

step("Focus Empty the Basket button", async function () {
    await focus("Empty the Basket");
});

step("Click Empty the Basket button", async function () {
    await click("Empty the Basket");
});