var filename = 'src.geojson';
var fs = require('fs');
var contents = fs.readFileSync(filename);
var data = JSON.parse(contents);

for(var i = 0; i < data.features.length; i++) {
  if(!data.features[i].geometry || !data.features[i].properties.name) {
    continue;
  }
  console.log([`"${data.features[i].properties.name}"`, data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]].join(','));
}
// fs.writeFileSync("../data/gps/all.txt", resultAll);

