var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

phantom.addCookie({
  'domain':'.partyof.wales',
  'name': 'cookiescriptaccept',
  'value': 'visit'
});

phantom.addCookie({
  'domain':'.partyof.wales',
  'name': 'languageselection',
  'value': '1'
});

page.open('http://www.partyof.wales/?force=1')
  .then(function() {
    window.setTimeout(function () {
      page.render('../partypages/plaidcymru.png');
      phantom.exit();
    }, 5000);
});
