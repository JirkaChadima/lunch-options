# What is this?

List of restaurants around our office. If you need something else, modify the `scripts/overpass-query.txt`. You can test it on http://overpass-turbo.eu/#

# How to get current data
1. Install [osmtogeojson](https://tyrasd.github.io/osmtogeojson/) with `npm i -g osmtogeojson`
1. Run `cd scripts && ./refresh-data.sh && cd ..`

Visualized source OSM data can be found [here](https://render.githubusercontent.com/view/geojson?url=https://raw.githubusercontent.com/JirkaChadima/lunch-options/master/scripts/src.geojson).
