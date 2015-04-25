var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

phantom.addCookie({
  'domain':'.snp.org',
  'name': 'cookie-agreed-en',
  'value': '2'
});

phantom.addCookie({
  'domain':'.snp.org',
  'name': 'has_js',
  'value': '1'
});

page.open('http://www.snp.org/')
  .then(function() {
    window.setTimeout(function () {
      page.render('../partypages/snp.png');
      phantom.exit();
    }, 5000);
});
