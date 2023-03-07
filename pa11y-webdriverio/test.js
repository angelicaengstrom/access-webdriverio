import { remote } from 'webdriverio';
import pa11y from 'pa11y';

const WCAG = Array('WCAG2A', 'WCAG2AA', 'WCAG2AAA');

run();

async function run(){
    let browser;
    try{
        browser = await remote({
            capabilities: { browserName: 'chrome' }
        })
        browser.url('http://studenter.miun.se/~anen1805/DT155G/CV/')

        WCAG.forEach(async function(sc, index){
            const result1 = await pa11y(await browser.getUrl(), {
                runners : [
                    'axe',
                    'htmlcs'
                ],
                standard : sc
            });
            console.log(result1);
        });

    }catch(error){
        console.error(error.message);
    }
}