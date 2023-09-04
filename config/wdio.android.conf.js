const path = require("path");
const { config } = require("./wdio.shared.conf.js");

config.port = 4723;

config.specs = [path.join(process.cwd(), "./test/specs/swagLabs.spec.js")];
config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:platformVersion": "10.0",
    "appium:udid": "emulator-5554",
    "appium:deviceName": "Pixel 3",
    "appium:automationName": "UiAutomator2",
    "appium:autoGrantPermissions": true,
    "appium:appPackage": "com.swaglabsmobileapp",
    "appium:appActivity": "com.swaglabsmobileapp.SplashActivity",
    // "appium:noReset": true,
    "appium:app": path.join(process.cwd(), "./app/android/SwagLabs.apk"),
  },
];

config.services = [
  [
    "appium",
    {
      args: {
        address: "localhost",
        port: 4723,
        relaxedSecurity: true,
      },
      logPath: "./",
    },
  ],
];

exports.config = config;
