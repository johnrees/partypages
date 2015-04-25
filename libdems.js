var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

phantom.addCookie({
  'domain':'.libdems.org.uk',
  'name': 'cookie_assistant_enable_cookies',
  'value': 'true'
});

page.open('http://www.libdems.org.uk')
  .then(function() {
    window.setTimeout(function () {
      page.render('../libdems.png');
      phantom.exit();
    }, 10000);
});
