#!/bin/bash
curl -X POST 'https://lz4.overpass-api.de/api/interpreter' -d@overpass-query.txt | osmtogeojson > src.geojson
node prepare-gps-data.js

