var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

page.open('http://www.respectparty.org/')
  .then(function() {
    window.setTimeout(function () {
      page.render('../partypages/respect.png');
      phantom.exit();
    }, 5000);
});
