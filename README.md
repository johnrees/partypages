# PartyPages
### http://partypages.johnre.es

A tiny service that takes a screenshot of the homepage of political parties in the UK in the lead-up to the General Election on 7th May 2015. The images will later be analysed with OCR tools to see how the language changes as the date draws closer.

The server runs currently do.sh with a simple cron job - `0 0,6,12,18 * * * ./do.sh`

The delays in the individual scraper files are a lazy way of ensuring that the entire page has loaded. The cookies are to skip the splash pages that each site invariably has. The code is awful... but it was fast to write!

Pull requests are extremely welcome.
