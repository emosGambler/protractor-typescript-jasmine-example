import { browser } from 'protractor';
import { HomePage } from './../pages/examplePage.page';
import { namesData } from './../data/example.td';
import * as using from 'jasmine-data-provider';

const homePage: HomePage = new HomePage();

using(namesData, (name: string) => {
    describe('The Basics - greetings', () => {
        beforeAll(() => {
            homePage.open();
        });

        it('should open home page', () => {
            expect(browser.getCurrentUrl()).toEqual(homePage.url);
        });

        it('should type name', () => {
            homePage.setName(name);
            expect(homePage.getName()).toEqual(name);
        });

        it('should update greeting', () => {
            expect(homePage.getGreetings()).toEqual(`Hello ${name}!`);
        });
    });
});