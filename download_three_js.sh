#!/bin/sh

cd public/js
curl -L -O http://threejs.org/build/three.min.js
curl -L -O https://raw.githubusercontent.com/dataarts/dat.gui/master/build/dat.gui.min.js
curl -L -O https://raw.githubusercontent.com/mrdoob/stats.js/master/build/stats.min.js
