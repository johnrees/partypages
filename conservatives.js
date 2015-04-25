var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

phantom.addCookie({
  'domain':'.conservatives.com',
  'name': 'tccookiesprefs',
  'value': 'yes'
});

phantom.addCookie({
  'domain':'.conservatives.com',
  'name': 'OneTimeRedirect',
  'value': '1'
});

page.open('https://www.conservatives.com')
  .then(function() {
    window.setTimeout(function () {
      page.render('../conservatives.png');
      phantom.exit();
    }, 20000);
});
