/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _garden_garden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garden/garden */ "./src/garden/garden.js");
/* harmony import */ var _spore_spores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spore/spores */ "./src/spore/spores.js");
/* harmony import */ var _util_line_drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/line-drawing */ "./src/util/line-drawing.js");



var canvasElement = document.getElementById('canvas');
var canvas = canvasElement.getContext('2d');
var garden = new _garden_garden__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, 300, 200, _spore_spores__WEBPACK_IMPORTED_MODULE_1__["default"]);
var selectedSpore = 'mPlantSpore';
var draw = false;
var lastPoint = null;
canvasElement.addEventListener('mousedown', function (e) {
  draw = true;
  var x = [Math.floor(e.offsetX / 2)];
  var y = [Math.floor(e.offsetY / 2)];
  garden.updatePixel(x, y, selectedSpore);
});
canvasElement.addEventListener('mousemove', function (e) {
  if (draw) {
    var x = [Math.floor(e.offsetX / 2)];
    var y = [Math.floor(e.offsetY / 2)];
    garden.updatePixel(x, y, selectedSpore);
  }
});
canvasElement.addEventListener('mouseup', function (e) {
  draw = false;
});
canvasElement.addEventListener('mouseleave', function (e) {
  draw = false;
});

var selectRPlant = function selectRPlant() {
  selectedSpore = 'rPlantSpore';
};

window.selectRPlant = selectRPlant;

var selectMPlant = function selectMPlant() {
  selectedSpore = 'mPlantSpore';
};

window.selectMPlant = selectMPlant;

var selectKPlant = function selectKPlant() {
  selectedSpore = 'kPlantSpore';
};

window.selectKPlant = selectKPlant;

var selectRFungus = function selectRFungus() {
  selectedSpore = 'rFungusSpore';
};

window.selectRFungus = selectRFungus;

var selectMFungus = function selectMFungus() {
  selectedSpore = 'mFungusSpore';
};

window.selectMFungus = selectMFungus;

var selectKFungus = function selectKFungus() {
  selectedSpore = 'kFungusSpore';
};

window.selectKFungus = selectKFungus;

var selectRAnimal = function selectRAnimal() {
  selectedSpore = 'rAnimalSpore';
};

window.selectRAnimal = selectRAnimal;

var selectMAnimal = function selectMAnimal() {
  selectedSpore = 'mAnimalSpore';
};

window.selectMAnimal = selectMAnimal;

var selectKAnimal = function selectKAnimal() {
  selectedSpore = 'kAnimalSpore';
};

window.selectKAnimal = selectKAnimal;

var animate = function animate() {
  garden.updateGarden();
  garden.renderGarden();
  requestAnimationFrame(animate);
};

animate();

/***/ }),

/***/ "./src/garden/garden.js":
/*!******************************!*\
  !*** ./src/garden/garden.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Garden =
/*#__PURE__*/
function () {
  function Garden(canvas, width, height, spores) {
    _classCallCheck(this, Garden);

    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.spores = spores;
    this.garden = this.generateGarden();
    this.competeArr = this.generateCompeteArr();
  }

  _createClass(Garden, [{
    key: "generateGarden",
    value: function generateGarden() {
      var arr = [];

      for (var i = 0; i < this.width; i++) {
        var subArr = [];

        for (var j = 0; j < this.height; j++) {
          subArr.push(this.spores.empty);
        }

        arr.push(subArr);
      }

      return arr;
    }
  }, {
    key: "generateCompeteArr",
    value: function generateCompeteArr() {
      var arr = [];

      for (var i = 0; i < this.width; i++) {
        var subArr = [];

        for (var j = 0; j < this.height; j++) {
          subArr.push({});
        }

        arr.push(subArr);
      }

      return arr;
    }
  }, {
    key: "updatePixel",
    value: function updatePixel(x, y, sporeName) {
      this.garden[x][y] = this.spores[sporeName];
    }
  }, {
    key: "countNeighbors",
    value: function countNeighbors(x, y, type) {
      var count = 0;
      var neighborPixels = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

      for (var i = 0; i < neighborPixels.length; i++) {
        var move = neighborPixels[i];
        var moveX = x + move[0];
        var moveY = y + move[1];

        if (moveX >= 0 && moveX < this.width && moveY >= 0 && moveY < this.height) {
          var spore = this.garden[moveX][moveY];
          if (spore.type === type) count++;
        }
      }

      return count;
    }
  }, {
    key: "reproduction",
    value: function reproduction(x, y, spore) {
      for (var i = 0; i < spore.growthPattern.length; i++) {
        var move = spore.growthPattern[i];
        var moveX = x + move[0];
        var moveY = y + move[1];

        if (moveX >= 0 && moveX < this.width && moveY >= 0 && moveY < this.height) {
          var pixel = this.competeArr[moveX][moveY];
          pixel[spore.name] = spore;
        }
      }
    }
  }, {
    key: "processCompetition",
    value: function processCompetition(x, y, collection, type) {
      var spores = Object.values(collection);
      var currSpore = null;
      var currScore = 0;

      for (var i = 0; i < spores.length; i++) {
        var roll = Math.random();
        var growthRate = spores[i].growthRate;
        var toughness = spores[i].toughness;

        if (growthRate > roll && toughness - roll > currScore && spores[i].type === type) {
          currSpore = spores[i];
          currScore = toughness - roll;
        }
      }

      if (currSpore && this.countNeighbors(x, y, currSpore.type) < 3) {
        this.garden[x][y] = currSpore;
      }
    }
  }, {
    key: "processAnimalVsFungus",
    value: function processAnimalVsFungus(x, y, collection) {
      var spores = Object.values(collection);
      var currSpore = null;
      var currScore = 0;

      for (var i = 0; i < spores.length; i++) {
        var roll = Math.random();
        var growthRate = spores[i].growthRate;
        var toughness = spores[i].toughness;

        if (growthRate > roll && toughness - roll > currScore && spores[i].type > 1) {
          currSpore = spores[i];
          currScore = toughness - roll;
        }
      }

      if (currSpore && this.countNeighbors(x, y, currSpore.type) < 3) {
        var newSporeRoll = Math.random();
        var oldSporeRoll = Math.random();
        if (currSpore.toughness - newSporeRoll > this.garden[x][y].toughness - oldSporeRoll) this.garden[x][y] = currSpore;
      }
    }
  }, {
    key: "sortCompetition",
    value: function sortCompetition(x, y, collection) {
      if (this.garden[x][y].type === -1) {
        this.processCompetition(x, y, collection, 1);
      } else if (this.garden[x][y].type === 0) {
        this.processCompetition(x, y, collection, 2);
      } else if (this.garden[x][y].type === 1) {
        this.processCompetition(x, y, collection, 3);
      } else {
        this.processAnimalVsFungus(x, y, collection);
      }
    }
  }, {
    key: "updateGarden",
    value: function updateGarden() {
      for (var i = 0; i < this.garden.length; i++) {
        var subArr = this.garden[i];

        for (var j = 0; j < subArr.length; j++) {
          var spore = subArr[j];
          var roll = Math.random() < spore.lifeSpan;

          if (spore.type === 1 && !roll) {
            this.garden[i][j] = this.spores[spore.name[0] + 'Dead'];
          } else if (spore.type === 0 && roll) {
            null;
          } else if (spore.type > 0 && roll) {
            this.reproduction(i, j, spore);
          } else {
            this.garden[i][j] = this.spores.empty;
          }
        }
      }

      for (var _i = 0; _i < this.competeArr.length; _i++) {
        var _subArr = this.competeArr[_i];

        for (var _j = 0; _j < _subArr.length; _j++) {
          var competeCollection = this.competeArr[_i][_j];
          this.sortCompetition(_i, _j, competeCollection);
          this.competeArr[_i][_j] = {};
        }
      }
    }
  }, {
    key: "renderGarden",
    value: function renderGarden() {
      for (var i = 0; i < this.garden.length; i++) {
        var subArr = this.garden[i];

        for (var j = 0; j < subArr.length; j++) {
          this.canvas.fillStyle = subArr[j].color;
          this.canvas.fillRect(i * 2, j * 2, 2, 2);
        }
      }
    }
  }]);

  return Garden;
}();

/* harmony default export */ __webpack_exports__["default"] = (Garden);

/***/ }),

/***/ "./src/spore/spores.js":
/*!*****************************!*\
  !*** ./src/spore/spores.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var empty = {
  growthRate: 0,
  growthPattern: [],
  toughness: 0,
  lifeSpan: 0,
  type: -1,
  name: 'empty',
  color: '#1D1D1D'
};
var rDead = {
  growthRate: 0,
  growthPattern: [],
  toughness: 1,
  lifeSpan: 0.5,
  type: 0,
  name: 'rDead',
  color: '#68543c'
};
var mDead = {
  growthRate: 0,
  growthPattern: [],
  toughness: 1,
  lifeSpan: 0.99,
  type: 0,
  name: 'mDead',
  color: '#6f491d'
};
var kDead = {
  growthRate: 0,
  growthPattern: [],
  toughness: 1,
  lifeSpan: 0.999,
  type: 0,
  name: 'kDead',
  color: '#442d12'
};
var rPlantSpore = {
  growthRate: 0.99,
  growthPattern: [[-3, 0], [-2, 2], [0, 3], [2, 2], [3, 0], [2, -2], [0, -3], [-2, -2]],
  toughness: 0.3,
  lifeSpan: 0.5,
  type: 1,
  name: 'rPlantSpore',
  color: '#b7ff6a'
};
var mPlantSpore = {
  growthRate: 0.2,
  growthPattern: [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]],
  toughness: 0.5,
  lifeSpan: 0.9,
  type: 1,
  name: 'mPlantSpore',
  color: '#52FF00'
};
var kPlantSpore = {
  growthRate: 0.1,
  growthPattern: [[-1, 0], [0, 1], [1, 0], [0, -1]],
  toughness: 0.9,
  lifeSpan: 0.99,
  type: 1,
  name: 'kPlantSpore',
  color: '#038400'
};
var rFungusSpore = {
  growthRate: 0.99,
  growthPattern: [[-1, 0], [-2, 2], [0, 1], [2, 2], [1, 0], [2, -2], [0, -1], [-2, -2]],
  toughness: 0.3,
  lifeSpan: 0.7,
  type: 2,
  name: 'rFungusSpore',
  color: '#b3ffe5'
};
var mFungusSpore = {
  growthRate: 0.2,
  growthPattern: [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]],
  toughness: 0.5,
  lifeSpan: 0.9,
  type: 2,
  name: 'mFungusSpore',
  color: '#00fcff'
};
var kFungusSpore = {
  growthRate: 0.1,
  growthPattern: [[-1, 0], [0, 1], [1, 0], [0, -1]],
  toughness: 0.9,
  lifeSpan: 0.99,
  type: 2,
  name: 'kFungusSpore',
  color: '#0083c7'
};
var rAnimalSpore = {
  growthRate: 0.9,
  growthPattern: [[-3, 0], [-2, 2], [0, 3], [2, 2], [3, 0], [2, -2], [0, -3], [-2, -2]],
  toughness: 0.3,
  lifeSpan: 0.85,
  type: 3,
  name: 'rAnimalSpore',
  color: '#ff7c66'
};
var mAnimalSpore = {
  growthRate: 0.7,
  growthPattern: [[-2, 0], [-1, 1], [0, 2], [1, 1], [2, 0], [1, -1], [0, -2], [-1, -1]],
  toughness: 0.5,
  lifeSpan: 0.9,
  type: 3,
  name: 'mAnimalSpore',
  color: '#ff2400'
};
var kAnimalSpore = {
  growthRate: 0.5,
  growthPattern: [[-1, 0], [0, 1], [1, 0], [0, -1]],
  toughness: 0.9,
  lifeSpan: 0.99,
  type: 3,
  name: 'kAnimalSpore',
  color: '#9d1600'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  empty: empty,
  rDead: rDead,
  mDead: mDead,
  kDead: kDead,
  rPlantSpore: rPlantSpore,
  mPlantSpore: mPlantSpore,
  kPlantSpore: kPlantSpore,
  rFungusSpore: rFungusSpore,
  mFungusSpore: mFungusSpore,
  kFungusSpore: kFungusSpore,
  rAnimalSpore: rAnimalSpore,
  mAnimalSpore: mAnimalSpore,
  kAnimalSpore: kAnimalSpore
});

/***/ }),

/***/ "./src/util/line-drawing.js":
/*!**********************************!*\
  !*** ./src/util/line-drawing.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (x0, y0, x1, y1) {
  var dx = x1 - x0;
  var dy = y1 - y0;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FyZGVuL2dhcmRlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BvcmUvc3BvcmVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xpbmUtZHJhd2luZy5qcyJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImdldENvbnRleHQiLCJnYXJkZW4iLCJHYXJkZW4iLCJzcG9yZXMiLCJzZWxlY3RlZFNwb3JlIiwiZHJhdyIsImxhc3RQb2ludCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwieCIsIk1hdGgiLCJmbG9vciIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsInVwZGF0ZVBpeGVsIiwic2VsZWN0UlBsYW50Iiwid2luZG93Iiwic2VsZWN0TVBsYW50Iiwic2VsZWN0S1BsYW50Iiwic2VsZWN0UkZ1bmd1cyIsInNlbGVjdE1GdW5ndXMiLCJzZWxlY3RLRnVuZ3VzIiwic2VsZWN0UkFuaW1hbCIsInNlbGVjdE1BbmltYWwiLCJzZWxlY3RLQW5pbWFsIiwiYW5pbWF0ZSIsInVwZGF0ZUdhcmRlbiIsInJlbmRlckdhcmRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2VuZXJhdGVHYXJkZW4iLCJjb21wZXRlQXJyIiwiZ2VuZXJhdGVDb21wZXRlQXJyIiwiYXJyIiwiaSIsInN1YkFyciIsImoiLCJwdXNoIiwiZW1wdHkiLCJzcG9yZU5hbWUiLCJ0eXBlIiwiY291bnQiLCJuZWlnaGJvclBpeGVscyIsImxlbmd0aCIsIm1vdmUiLCJtb3ZlWCIsIm1vdmVZIiwic3BvcmUiLCJncm93dGhQYXR0ZXJuIiwicGl4ZWwiLCJuYW1lIiwiY29sbGVjdGlvbiIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJTcG9yZSIsImN1cnJTY29yZSIsInJvbGwiLCJyYW5kb20iLCJncm93dGhSYXRlIiwidG91Z2huZXNzIiwiY291bnROZWlnaGJvcnMiLCJuZXdTcG9yZVJvbGwiLCJvbGRTcG9yZVJvbGwiLCJwcm9jZXNzQ29tcGV0aXRpb24iLCJwcm9jZXNzQW5pbWFsVnNGdW5ndXMiLCJsaWZlU3BhbiIsInJlcHJvZHVjdGlvbiIsImNvbXBldGVDb2xsZWN0aW9uIiwic29ydENvbXBldGl0aW9uIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJmaWxsUmVjdCIsInJEZWFkIiwibURlYWQiLCJrRGVhZCIsInJQbGFudFNwb3JlIiwibVBsYW50U3BvcmUiLCJrUGxhbnRTcG9yZSIsInJGdW5ndXNTcG9yZSIsIm1GdW5ndXNTcG9yZSIsImtGdW5ndXNTcG9yZSIsInJBbmltYWxTcG9yZSIsIm1BbmltYWxTcG9yZSIsImtBbmltYWxTcG9yZSIsIngwIiwieTAiLCJ4MSIsInkxIiwiZHgiLCJkeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7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QVRXO0FBVVhDLGNBQVksRUFBWkEsWUFWVztBQVdYQyxjQUFZLEVBQVpBLFlBWFc7QUFZWEMsY0FBWSxFQUFaQSxZQVpXO0FBYVhDLGNBQVksRUFBWkE7QUFiVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hNQTtBQUFlLHlFQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQW9CO0FBQy9CLE1BQUlDLEVBQUUsR0FBR0YsRUFBRSxHQUFHRixFQUFkO0FBQ0EsTUFBSUssRUFBRSxHQUFHRixFQUFFLEdBQUdGLEVBQWQ7QUFFSCxDQUpELEUiLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCBHYXJkZW4gZnJvbSAnLi9nYXJkZW4vZ2FyZGVuJztcbmltcG9ydCBzcG9yZXMgZnJvbSAnLi9zcG9yZS9zcG9yZXMnO1xuaW1wb3J0IGRyYXdMaW5lIGZyb20gJy4vdXRpbC9saW5lLWRyYXdpbmcnO1xuXG5sZXQgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmxldCBjYW52YXMgPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG5cbmxldCBnYXJkZW4gPSBuZXcgR2FyZGVuKGNhbnZhcywgMzAwLCAyMDAsIHNwb3Jlcyk7XG5sZXQgc2VsZWN0ZWRTcG9yZSA9ICdtUGxhbnRTcG9yZSc7XG5sZXQgZHJhdyA9IGZhbHNlO1xubGV0IGxhc3RQb2ludCA9IG51bGw7XG5cbmNhbnZhc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgZHJhdyA9IHRydWU7XG5cbiAgICBsZXQgeCA9IFtNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDIpXTtcbiAgICBsZXQgeSA9IFtNYXRoLmZsb29yKGUub2Zmc2V0WSAvIDIpXTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoeCwgeSwgc2VsZWN0ZWRTcG9yZSk7XG59KTtcblxuY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBpZiAoZHJhdykge1xuICAgICAgICBsZXQgeCA9IFtNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDIpXTtcbiAgICAgICAgbGV0IHkgPSBbTWF0aC5mbG9vcihlLm9mZnNldFkgLyAyKV07XG4gICAgICAgIGdhcmRlbi51cGRhdGVQaXhlbCh4LCB5LCBzZWxlY3RlZFNwb3JlKTtcbiAgICB9XG59KTtcblxuY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiB7XG4gICAgZHJhdyA9IGZhbHNlO1xufSk7XG5cbmNhbnZhc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgIGRyYXcgPSBmYWxzZTtcbn0pO1xuXG5cbmNvbnN0IHNlbGVjdFJQbGFudCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ3JQbGFudFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RSUGxhbnQgPSBzZWxlY3RSUGxhbnQ7XG5cbmNvbnN0IHNlbGVjdE1QbGFudCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ21QbGFudFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RNUGxhbnQgPSBzZWxlY3RNUGxhbnQ7XG5cbmNvbnN0IHNlbGVjdEtQbGFudCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ2tQbGFudFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RLUGxhbnQgPSBzZWxlY3RLUGxhbnQ7XG5cblxuXG5jb25zdCBzZWxlY3RSRnVuZ3VzID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnckZ1bmd1c1Nwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RSRnVuZ3VzID0gc2VsZWN0UkZ1bmd1cztcblxuY29uc3Qgc2VsZWN0TUZ1bmd1cyA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ21GdW5ndXNTcG9yZSc7XG59O1xuXG53aW5kb3cuc2VsZWN0TUZ1bmd1cyA9IHNlbGVjdE1GdW5ndXM7XG5cbmNvbnN0IHNlbGVjdEtGdW5ndXMgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTcG9yZSA9ICdrRnVuZ3VzU3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdEtGdW5ndXMgPSBzZWxlY3RLRnVuZ3VzO1xuXG5cblxuY29uc3Qgc2VsZWN0UkFuaW1hbCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ3JBbmltYWxTcG9yZSc7XG59O1xuXG53aW5kb3cuc2VsZWN0UkFuaW1hbCA9IHNlbGVjdFJBbmltYWw7XG5cbmNvbnN0IHNlbGVjdE1BbmltYWwgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTcG9yZSA9ICdtQW5pbWFsU3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdE1BbmltYWwgPSBzZWxlY3RNQW5pbWFsO1xuXG5jb25zdCBzZWxlY3RLQW5pbWFsID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAna0FuaW1hbFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RLQW5pbWFsID0gc2VsZWN0S0FuaW1hbDtcblxuXG5cbmxldCBhbmltYXRlID0gKCkgPT4ge1xuICAgIGdhcmRlbi51cGRhdGVHYXJkZW4oKTtcbiAgICBnYXJkZW4ucmVuZGVyR2FyZGVuKCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59O1xuXG5hbmltYXRlKCk7IiwiXG5jbGFzcyBHYXJkZW4ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgd2lkdGgsIGhlaWdodCwgc3BvcmVzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnNwb3JlcyA9IHNwb3JlcztcbiAgICAgICAgdGhpcy5nYXJkZW4gPSB0aGlzLmdlbmVyYXRlR2FyZGVuKCk7XG4gICAgICAgIHRoaXMuY29tcGV0ZUFyciA9IHRoaXMuZ2VuZXJhdGVDb21wZXRlQXJyKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVHYXJkZW4oKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3ViQXJyLnB1c2godGhpcy5zcG9yZXMuZW1wdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLnB1c2goc3ViQXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb21wZXRlQXJyKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyci5wdXNoKHN1YkFycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHVwZGF0ZVBpeGVsKHgsIHksIHNwb3JlTmFtZSkge1xuICAgICAgICB0aGlzLmdhcmRlblt4XVt5XSA9IHRoaXMuc3BvcmVzW3Nwb3JlTmFtZV07XG4gICAgfVxuXG4gICAgY291bnROZWlnaGJvcnMoeCwgeSwgdHlwZSkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgbmVpZ2hib3JQaXhlbHMgPSBbXG4gICAgICAgICAgICBbLTEsIDBdLFxuICAgICAgICAgICAgWy0xLCAxXSxcbiAgICAgICAgICAgIFswLCAxXSxcbiAgICAgICAgICAgIFsxLCAxXSxcbiAgICAgICAgICAgIFsxLCAwXSxcbiAgICAgICAgICAgIFsxLCAtMV0sXG4gICAgICAgICAgICBbMCwgLTFdLFxuICAgICAgICAgICAgWy0xLCAtMV1cbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm9yUGl4ZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbW92ZSA9IG5laWdoYm9yUGl4ZWxzW2ldO1xuICAgICAgICAgICAgbGV0IG1vdmVYID0geCArIG1vdmVbMF07XG4gICAgICAgICAgICBsZXQgbW92ZVkgPSB5ICsgbW92ZVsxXTtcbiAgICAgICAgICAgIGlmIChtb3ZlWCA+PSAwICYmIG1vdmVYIDwgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgICAgIG1vdmVZID49IDAgJiYgbW92ZVkgPCB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGxldCBzcG9yZSA9IHRoaXMuZ2FyZGVuW21vdmVYXVttb3ZlWV07XG4gICAgICAgICAgICAgICAgaWYgKHNwb3JlLnR5cGUgPT09IHR5cGUpIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuXG4gICAgcmVwcm9kdWN0aW9uKHgsIHksIHNwb3JlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BvcmUuZ3Jvd3RoUGF0dGVybi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG1vdmUgPSBzcG9yZS5ncm93dGhQYXR0ZXJuW2ldO1xuICAgICAgICAgICAgbGV0IG1vdmVYID0geCArIG1vdmVbMF07XG4gICAgICAgICAgICBsZXQgbW92ZVkgPSB5ICsgbW92ZVsxXTtcbiAgICAgICAgICAgIGlmIChtb3ZlWCA+PSAwICYmIG1vdmVYIDwgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgICAgIG1vdmVZID49IDAgJiYgbW92ZVkgPCB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGxldCBwaXhlbCA9IHRoaXMuY29tcGV0ZUFyclttb3ZlWF1bbW92ZVldO1xuICAgICAgICAgICAgICAgIHBpeGVsW3Nwb3JlLm5hbWVdID0gc3BvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzQ29tcGV0aXRpb24oeCwgeSwgY29sbGVjdGlvbiwgdHlwZSkge1xuICAgICAgICBsZXQgc3BvcmVzID0gT2JqZWN0LnZhbHVlcyhjb2xsZWN0aW9uKTtcbiAgICAgICAgbGV0IGN1cnJTcG9yZSA9IG51bGw7XG4gICAgICAgIGxldCBjdXJyU2NvcmUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwb3Jlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvbGwgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgbGV0IGdyb3d0aFJhdGUgPSBzcG9yZXNbaV0uZ3Jvd3RoUmF0ZTtcbiAgICAgICAgICAgIGxldCB0b3VnaG5lc3MgPSBzcG9yZXNbaV0udG91Z2huZXNzO1xuICAgICAgICAgICAgaWYgKGdyb3d0aFJhdGUgPiByb2xsXG4gICAgICAgICAgICAgICAgJiYgKHRvdWdobmVzcyAtIHJvbGwpID4gY3VyclNjb3JlXG4gICAgICAgICAgICAgICAgJiYgc3BvcmVzW2ldLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyU3BvcmUgPSBzcG9yZXNbaV07XG4gICAgICAgICAgICAgICAgY3VyclNjb3JlID0gdG91Z2huZXNzIC0gcm9sbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VyclNwb3JlICYmIHRoaXMuY291bnROZWlnaGJvcnMoeCwgeSwgY3VyclNwb3JlLnR5cGUpIDwgMykge1xuICAgICAgICAgICAgdGhpcy5nYXJkZW5beF1beV0gPSBjdXJyU3BvcmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzQW5pbWFsVnNGdW5ndXMoeCwgeSwgY29sbGVjdGlvbikge1xuICAgICAgICBsZXQgc3BvcmVzID0gT2JqZWN0LnZhbHVlcyhjb2xsZWN0aW9uKTtcbiAgICAgICAgbGV0IGN1cnJTcG9yZSA9IG51bGw7XG4gICAgICAgIGxldCBjdXJyU2NvcmUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwb3Jlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvbGwgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgbGV0IGdyb3d0aFJhdGUgPSBzcG9yZXNbaV0uZ3Jvd3RoUmF0ZTtcbiAgICAgICAgICAgIGxldCB0b3VnaG5lc3MgPSBzcG9yZXNbaV0udG91Z2huZXNzO1xuICAgICAgICAgICAgaWYgKGdyb3d0aFJhdGUgPiByb2xsXG4gICAgICAgICAgICAgICAgJiYgKHRvdWdobmVzcyAtIHJvbGwpID4gY3VyclNjb3JlXG4gICAgICAgICAgICAgICAgJiYgc3BvcmVzW2ldLnR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgY3VyclNwb3JlID0gc3BvcmVzW2ldO1xuICAgICAgICAgICAgICAgIGN1cnJTY29yZSA9IHRvdWdobmVzcyAtIHJvbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJTcG9yZSAmJiB0aGlzLmNvdW50TmVpZ2hib3JzKHgsIHksIGN1cnJTcG9yZS50eXBlKSA8IDMpIHtcbiAgICAgICAgICAgIGxldCBuZXdTcG9yZVJvbGwgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgbGV0IG9sZFNwb3JlUm9sbCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBpZiAoKGN1cnJTcG9yZS50b3VnaG5lc3MgLSBuZXdTcG9yZVJvbGwpXG4gICAgICAgICAgICAgICAgPiAodGhpcy5nYXJkZW5beF1beV0udG91Z2huZXNzIC0gb2xkU3BvcmVSb2xsKSlcbiAgICAgICAgICAgIHRoaXMuZ2FyZGVuW3hdW3ldID0gY3VyclNwb3JlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydENvbXBldGl0aW9uKHgsIHksIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FyZGVuW3hdW3ldLnR5cGUgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCAxKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhcmRlblt4XVt5XS50eXBlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhcmRlblt4XVt5XS50eXBlID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCAzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0FuaW1hbFZzRnVuZ3VzKHgsIHksIGNvbGxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlR2FyZGVuKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FyZGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gdGhpcy5nYXJkZW5baV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YkFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcG9yZSA9IHN1YkFycltqXTtcbiAgICAgICAgICAgICAgICBsZXQgcm9sbCA9IE1hdGgucmFuZG9tKCkgPCBzcG9yZS5saWZlU3BhbjtcbiAgICAgICAgICAgICAgICBpZiAoc3BvcmUudHlwZSA9PT0gMSAmJiAhcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmRlbltpXVtqXSA9IHRoaXMuc3BvcmVzW3Nwb3JlLm5hbWVbMF0gKyAnRGVhZCddO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BvcmUudHlwZSA9PT0gMCAmJiByb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcG9yZS50eXBlID4gMCAmJiByb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwcm9kdWN0aW9uKGksIGosIHNwb3JlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmRlbltpXVtqXSA9IHRoaXMuc3BvcmVzLmVtcHR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21wZXRlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gdGhpcy5jb21wZXRlQXJyW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcGV0ZUNvbGxlY3Rpb24gPSB0aGlzLmNvbXBldGVBcnJbaV1bal07XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0Q29tcGV0aXRpb24oaSwgaiwgY29tcGV0ZUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGV0ZUFycltpXVtqXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyR2FyZGVuKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FyZGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gdGhpcy5nYXJkZW5baV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YkFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmZpbGxTdHlsZSA9IHN1YkFycltqXS5jb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5maWxsUmVjdChpICogMiwgaiAqIDIsIDIsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJkZW47IiwiY29uc3QgZW1wdHkgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMCxcbiAgICBncm93dGhQYXR0ZXJuOiBbXSxcbiAgICB0b3VnaG5lc3M6IDAsXG4gICAgbGlmZVNwYW46IDAsXG4gICAgdHlwZTogLTEsXG4gICAgbmFtZTogJ2VtcHR5JyxcbiAgICBjb2xvcjogJyMxRDFEMUQnXG59O1xuXG5jb25zdCByRGVhZCA9IHtcbiAgICBncm93dGhSYXRlOiAwLFxuICAgIGdyb3d0aFBhdHRlcm46IFtdLFxuICAgIHRvdWdobmVzczogMSxcbiAgICBsaWZlU3BhbjogMC41LFxuICAgIHR5cGU6IDAsXG4gICAgbmFtZTogJ3JEZWFkJyxcbiAgICBjb2xvcjogJyM2ODU0M2MnXG59O1xuXG5jb25zdCBtRGVhZCA9IHtcbiAgICBncm93dGhSYXRlOiAwLFxuICAgIGdyb3d0aFBhdHRlcm46IFtdLFxuICAgIHRvdWdobmVzczogMSxcbiAgICBsaWZlU3BhbjogMC45OSxcbiAgICB0eXBlOiAwLFxuICAgIG5hbWU6ICdtRGVhZCcsXG4gICAgY29sb3I6ICcjNmY0OTFkJ1xufTtcblxuY29uc3Qga0RlYWQgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMCxcbiAgICBncm93dGhQYXR0ZXJuOiBbXSxcbiAgICB0b3VnaG5lc3M6IDEsXG4gICAgbGlmZVNwYW46IDAuOTk5LFxuICAgIHR5cGU6IDAsXG4gICAgbmFtZTogJ2tEZWFkJyxcbiAgICBjb2xvcjogJyM0NDJkMTInXG59O1xuXG5jb25zdCByUGxhbnRTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjk5LFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0zLCAwXSxcbiAgICAgICAgWy0yLCAyXSxcbiAgICAgICAgWzAsIDNdLFxuICAgICAgICBbMiwgMl0sXG4gICAgICAgIFszLCAwXSxcbiAgICAgICAgWzIsIC0yXSxcbiAgICAgICAgWzAsIC0zXSxcbiAgICAgICAgWy0yLCAtMl1cbiAgICBdLFxuICAgIHRvdWdobmVzczogMC4zLFxuICAgIGxpZmVTcGFuOiAwLjUsXG4gICAgdHlwZTogMSxcbiAgICBuYW1lOiAnclBsYW50U3BvcmUnLFxuICAgIGNvbG9yOiAnI2I3ZmY2YSdcbn07XG5cbmNvbnN0IG1QbGFudFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuMixcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsxLCAtMV0sXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFstMSwgLTFdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuNSxcbiAgICBsaWZlU3BhbjogMC45LFxuICAgIHR5cGU6IDEsXG4gICAgbmFtZTogJ21QbGFudFNwb3JlJyxcbiAgICBjb2xvcjogJyM1MkZGMDAnXG59O1xuXG5jb25zdCBrUGxhbnRTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjEsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzAsIC0xXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjksXG4gICAgbGlmZVNwYW46IDAuOTksXG4gICAgdHlwZTogMSxcbiAgICBuYW1lOiAna1BsYW50U3BvcmUnLFxuICAgIGNvbG9yOiAnIzAzODQwMCdcbn07XG5cbmNvbnN0IHJGdW5ndXNTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjk5LFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgWy0yLCAyXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbMiwgMl0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzIsIC0yXSxcbiAgICAgICAgWzAsIC0xXSxcbiAgICAgICAgWy0yLCAtMl1cbiAgICBdLFxuICAgIHRvdWdobmVzczogMC4zLFxuICAgIGxpZmVTcGFuOiAwLjcsXG4gICAgdHlwZTogMixcbiAgICBuYW1lOiAnckZ1bmd1c1Nwb3JlJyxcbiAgICBjb2xvcjogJyNiM2ZmZTUnXG59O1xuXG5jb25zdCBtRnVuZ3VzU3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC4yLFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgWy0xLCAxXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIC0xXSxcbiAgICAgICAgWzAsIC0xXSxcbiAgICAgICAgWy0xLCAtMV1cbiAgICBdLFxuICAgIHRvdWdobmVzczogMC41LFxuICAgIGxpZmVTcGFuOiAwLjksXG4gICAgdHlwZTogMixcbiAgICBuYW1lOiAnbUZ1bmd1c1Nwb3JlJyxcbiAgICBjb2xvcjogJyMwMGZjZmYnXG59O1xuXG5jb25zdCBrRnVuZ3VzU3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC4xLFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFswLCAtMV1cbiAgICBdLFxuICAgIHRvdWdobmVzczogMC45LFxuICAgIGxpZmVTcGFuOiAwLjk5LFxuICAgIHR5cGU6IDIsXG4gICAgbmFtZTogJ2tGdW5ndXNTcG9yZScsXG4gICAgY29sb3I6ICcjMDA4M2M3J1xufTtcblxuY29uc3QgckFuaW1hbFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuOSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMywgMF0sXG4gICAgICAgIFstMiwgMl0sXG4gICAgICAgIFswLCAzXSxcbiAgICAgICAgWzIsIDJdLFxuICAgICAgICBbMywgMF0sXG4gICAgICAgIFsyLCAtMl0sXG4gICAgICAgIFswLCAtM10sXG4gICAgICAgIFstMiwgLTJdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuMyxcbiAgICBsaWZlU3BhbjogMC44NSxcbiAgICB0eXBlOiAzLFxuICAgIG5hbWU6ICdyQW5pbWFsU3BvcmUnLFxuICAgIGNvbG9yOiAnI2ZmN2M2Nidcbn07XG5cbmNvbnN0IG1BbmltYWxTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjcsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTIsIDBdLFxuICAgICAgICBbLTEsIDFdLFxuICAgICAgICBbMCwgMl0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzIsIDBdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMCwgLTJdLFxuICAgICAgICBbLTEsIC0xXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjUsXG4gICAgbGlmZVNwYW46IDAuOSxcbiAgICB0eXBlOiAzLFxuICAgIG5hbWU6ICdtQW5pbWFsU3BvcmUnLFxuICAgIGNvbG9yOiAnI2ZmMjQwMCdcbn07XG5cbmNvbnN0IGtBbmltYWxTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjUsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzAsIC0xXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjksXG4gICAgbGlmZVNwYW46IDAuOTksXG4gICAgdHlwZTogMyxcbiAgICBuYW1lOiAna0FuaW1hbFNwb3JlJyxcbiAgICBjb2xvcjogJyM5ZDE2MDAnXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlbXB0eSxcbiAgICByRGVhZCxcbiAgICBtRGVhZCxcbiAgICBrRGVhZCxcbiAgICByUGxhbnRTcG9yZSxcbiAgICBtUGxhbnRTcG9yZSxcbiAgICBrUGxhbnRTcG9yZSxcbiAgICByRnVuZ3VzU3BvcmUsXG4gICAgbUZ1bmd1c1Nwb3JlLFxuICAgIGtGdW5ndXNTcG9yZSxcbiAgICByQW5pbWFsU3BvcmUsXG4gICAgbUFuaW1hbFNwb3JlLFxuICAgIGtBbmltYWxTcG9yZVxufTsiLCJleHBvcnQgZGVmYXVsdCAoeDAsIHkwLCB4MSwgeTEpID0+IHtcbiAgICBsZXQgZHggPSB4MSAtIHgwO1xuICAgIGxldCBkeSA9IHkxIC0geTA7XG4gICAgXG59OyJdLCJzb3VyY2VSb290IjoiIn0=