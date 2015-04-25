var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

phantom.addCookie({
  'domain':'.bnp.org.uk',
  'name': 'cookie-agreed-en',
  'value': '1'
});

page.open('http://www.bnp.org.uk')
  .then(function() {
    window.setTimeout(function () {
      page.render('../partypages/bnp.png');
      phantom.exit();
    }, 4000);
});
