web.init();
web.open('https://www.wikipedia.org/');
web.click('id=js-link-box-en');
web.type('name=search', 'selenium');
web.click('name=go');
web.assertText('id=firstHeading', 'Selenium');