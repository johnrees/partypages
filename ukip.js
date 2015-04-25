var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

phantom.addCookie({
  'domain':'.ukip.org',
  'name': 'permissionbar',
  'value': 'CookiesAllowed'
});

page.open('http://www.ukip.org/index')
  .then(function() {
    window.setTimeout(function () {
      page.render('../ukip.png');
      phantom.exit();
    }, 10000);
});

