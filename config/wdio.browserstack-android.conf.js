// require("dotenv").config();
const path = require("path");
const { config } = require("./wdio.shared.conf");

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_PASSWORD;

config.specs = [
  path.join(process.cwd(), "./test/specs/android-noteColor.spec.js"),
];

config.capabilities = [
  {
    platformName: "android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UiAutomator2",
    "appium:autoGrantPermissions": true,
    "appium:app": "bs://1cbdca0564349fab17ab77de47a7a5d329c843fb",
  },
];

config.services = ["browserstack"];

exports.config = config;
