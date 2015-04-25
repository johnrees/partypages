var page = require('webpage').create();

page.viewportSize = {
  width: 1024,
  height: 768
};

page.open('https://www.pirateparty.org.uk')
  .then(function() {
    window.setTimeout(function () {
      page.render('../partypages/pirateparty.png');
      phantom.exit();
    }, 5000);
});
