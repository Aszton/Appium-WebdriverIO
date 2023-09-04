require("dotenv").config();
const path = require("path");
const { config } = require("./wdio.shared.conf");

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_PASSWORD;

config.specs = [path.join(process.cwd(), "./test/specs/swagLabs.spec.js")];
config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "16",
    "appium:deviceName": "iPhone 14 Pro Max",
    "appium:app": "bs://5d2cbe40ec7778268de4e0171f443c1a6bbf14ee",
    "appium:automationName": "XCUITest",
  },
];

config.services = ["browserstack"];

exports.config = config;
