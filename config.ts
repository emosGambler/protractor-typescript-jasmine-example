import { browser, Config } from 'protractor';

export let config: Config = {
    baseUrl: 'https://angularjs.org/',
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized'
            ]
        }
    },
    framework: 'jasmine2',
    specs: ['specs/**/*.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};