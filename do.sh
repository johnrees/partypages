now=$(date +"%Y_%m_%d_%H_%M")

echo 'bnp'
xvfb-run -a slimerjs --ssl-protocol=any bnp.js
sleep 1
rm ../bnp-fs8.png
pngquant ../bnp.png
cp ../bnp-fs8.png "../bnp-$now.png"

echo 'conservatives'
xvfb-run -a slimerjs --ssl-protocol=any conservatives.js
sleep 1
rm ../conservatives-fs8.png
pngquant ../conservatives.png
cp ../conservatives-fs8.png "../conservatives-$now.png"

echo 'greens'
xvfb-run -a slimerjs --ssl-protocol=any greens.js
sleep 1
rm ../greens-fs8.png
pngquant ../greens.png
cp ../greens-fs8.png "../greens-$now.png"

echo 'labour'
xvfb-run -a slimerjs --ssl-protocol=any labour.js
sleep 1
rm ../labour-fs8.png
pngquant ../labour.png
cp ../labour-fs8.png "../labour-$now.png"

echo 'libdems'
xvfb-run -a slimerjs --ssl-protocol=any libdems.js
sleep 1
rm ../libdems-fs8.png
pngquant ../libdems.png
cp ../libdems-fs8.png "../libdems-$now.png"

echo 'pirateparty'
xvfb-run -a slimerjs --ssl-protocol=any pirateparty.js
sleep 1
rm ../pirateparty-fs8.png
pngquant ../pirateparty.png
cp ../pirateparty-fs8.png "../pirateparty-$now.png"

echo 'plaidcymru'
xvfb-run -a slimerjs --ssl-protocol=any plaidcymru.js
sleep 1
rm ../plaidcymru-fs8.png
pngquant ../plaidcymru.png
cp ../plaidcymru-fs8.png "../plaidcymru-$now.png"

echo 'respect'
xvfb-run -a slimerjs --ssl-protocol=any respect.js
sleep 1
rm ../respect-fs8.png
pngquant ../respect.png
cp ../respect-fs8.png "../respect-$now.png"

echo 'snp'
xvfb-run -a slimerjs --ssl-protocol=any snp.js
sleep 1
rm ../snp-fs8.png
pngquant ../snp.png
cp ../snp-fs8.png "../snp-$now.png"

echo 'ukip'
xvfb-run -a slimerjs --ssl-protocol=any ukip.js
sleep 1
rm ../ukip-fs8.png
pngquant ../ukip.png
cp ../ukip-fs8.png "../ukip-$now.png"

