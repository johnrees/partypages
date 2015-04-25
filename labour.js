var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

phantom.addCookie({
  'domain':'.labour.org.uk',
  'name': 'userSplashed',
  'value': 'yes'
});

page.open('http://www.labour.org.uk')
  .then(function() {
    window.setTimeout(function () {
      page.render('../labour.png');
      phantom.exit();
    }, 10000);
});
