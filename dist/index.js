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
        // || currSpore.type > 2
        this.garden[x][y] = currSpore;
      }
    }
  }, {
    key: "sortCompetition",
    value: function sortCompetition(x, y, collection) {
      if (this.garden[x][y].type === -1) {
        this.processCompetition(x, y, collection, 1);
      } else if (this.garden[x][y].type === 0) {
        this.processCompetition(x, y, collection, 2);
      } else {
        this.processCompetition(x, y, collection, 3);
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
  growthRate: 0.1,
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
  growthRate: 0.1,
  growthPattern: [[-3, 0], [-2, 2], [0, 3], [2, 2], [3, 0], [2, -2], [0, -3], [-2, -2]],
  toughness: 0.3,
  lifeSpan: 0.85,
  type: 3,
  name: 'rAnimalSpore',
  color: '#ff7c66'
};
var mAnimalSpore = {
  growthRate: 0.15,
  growthPattern: [[-3, 0], [-2, 2], [0, 3], [2, 2], [3, 0], [2, -2], [0, -3], [-2, -2]],
  toughness: 0.5,
  lifeSpan: 0.9,
  type: 3,
  name: 'mAnimalSpore',
  color: '#ff2400'
};
var kAnimalSpore = {
  growthRate: 0.2,
  growthPattern: [[-1, 0], [-2, 2], [0, 1], [2, 2], [1, 0], [2, -2], [0, -1], [-2, -2]],
  toughness: 0.9,
  lifeSpan: 0.95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FyZGVuL2dhcmRlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BvcmUvc3BvcmVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xpbmUtZHJhd2luZy5qcyJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImdldENvbnRleHQiLCJnYXJkZW4iLCJHYXJkZW4iLCJzcG9yZXMiLCJzZWxlY3RlZFNwb3JlIiwiZHJhdyIsImxhc3RQb2ludCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwieCIsIk1hdGgiLCJmbG9vciIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsInVwZGF0ZVBpeGVsIiwic2VsZWN0UlBsYW50Iiwid2luZG93Iiwic2VsZWN0TVBsYW50Iiwic2VsZWN0S1BsYW50Iiwic2VsZWN0UkZ1bmd1cyIsInNlbGVjdE1GdW5ndXMiLCJzZWxlY3RLRnVuZ3VzIiwic2VsZWN0UkFuaW1hbCIsInNlbGVjdE1BbmltYWwiLCJzZWxlY3RLQW5pbWFsIiwiYW5pbWF0ZSIsInVwZGF0ZUdhcmRlbiIsInJlbmRlckdhcmRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2VuZXJhdGVHYXJkZW4iLCJjb21wZXRlQXJyIiwiZ2VuZXJhdGVDb21wZXRlQXJyIiwiYXJyIiwiaSIsInN1YkFyciIsImoiLCJwdXNoIiwiZW1wdHkiLCJzcG9yZU5hbWUiLCJ0eXBlIiwiY291bnQiLCJuZWlnaGJvclBpeGVscyIsImxlbmd0aCIsIm1vdmUiLCJtb3ZlWCIsIm1vdmVZIiwic3BvcmUiLCJncm93dGhQYXR0ZXJuIiwicGl4ZWwiLCJuYW1lIiwiY29sbGVjdGlvbiIsIk9iamVjdCIsInZhbHVlcyIsImN1cnJTcG9yZSIsImN1cnJTY29yZSIsInJvbGwiLCJyYW5kb20iLCJncm93dGhSYXRlIiwidG91Z2huZXNzIiwiY291bnROZWlnaGJvcnMiLCJwcm9jZXNzQ29tcGV0aXRpb24iLCJsaWZlU3BhbiIsInJlcHJvZHVjdGlvbiIsImNvbXBldGVDb2xsZWN0aW9uIiwic29ydENvbXBldGl0aW9uIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJmaWxsUmVjdCIsInJEZWFkIiwibURlYWQiLCJrRGVhZCIsInJQbGFudFNwb3JlIiwibVBsYW50U3BvcmUiLCJrUGxhbnRTcG9yZSIsInJGdW5ndXNTcG9yZSIsIm1GdW5ndXNTcG9yZSIsImtGdW5ndXNTcG9yZSIsInJBbmltYWxTcG9yZSIsIm1BbmltYWxTcG9yZSIsImtBbmltYWxTcG9yZSIsIngwIiwieTAiLCJ4MSIsInkxIiwiZHgiLCJkeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtB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RUFBTCxFQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBb0I7QUFDL0IsTUFBSUMsRUFBRSxHQUFHRixFQUFFLEdBQUdGLEVBQWQ7QUFDQSxNQUFJSyxFQUFFLEdBQUdGLEVBQUUsR0FBR0YsRUFBZDtBQUVILENBSkQsRSIsImZpbGUiOiIuL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IEdhcmRlbiBmcm9tICcuL2dhcmRlbi9nYXJkZW4nO1xuaW1wb3J0IHNwb3JlcyBmcm9tICcuL3Nwb3JlL3Nwb3Jlcyc7XG5pbXBvcnQgZHJhd0xpbmUgZnJvbSAnLi91dGlsL2xpbmUtZHJhd2luZyc7XG5cbmxldCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xubGV0IGNhbnZhcyA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcblxubGV0IGdhcmRlbiA9IG5ldyBHYXJkZW4oY2FudmFzLCAzMDAsIDIwMCwgc3BvcmVzKTtcbmxldCBzZWxlY3RlZFNwb3JlID0gJ21QbGFudFNwb3JlJztcbmxldCBkcmF3ID0gZmFsc2U7XG5sZXQgbGFzdFBvaW50ID0gbnVsbDtcblxuY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICBkcmF3ID0gdHJ1ZTtcblxuICAgIGxldCB4ID0gW01hdGguZmxvb3IoZS5vZmZzZXRYIC8gMildO1xuICAgIGxldCB5ID0gW01hdGguZmxvb3IoZS5vZmZzZXRZIC8gMildO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCh4LCB5LCBzZWxlY3RlZFNwb3JlKTtcbn0pO1xuXG5jYW52YXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGlmIChkcmF3KSB7XG4gICAgICAgIGxldCB4ID0gW01hdGguZmxvb3IoZS5vZmZzZXRYIC8gMildO1xuICAgICAgICBsZXQgeSA9IFtNYXRoLmZsb29yKGUub2Zmc2V0WSAvIDIpXTtcbiAgICAgICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKHgsIHksIHNlbGVjdGVkU3BvcmUpO1xuICAgIH1cbn0pO1xuXG5jYW52YXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcbiAgICBkcmF3ID0gZmFsc2U7XG59KTtcblxuY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XG4gICAgZHJhdyA9IGZhbHNlO1xufSk7XG5cblxuY29uc3Qgc2VsZWN0UlBsYW50ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnclBsYW50U3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdFJQbGFudCA9IHNlbGVjdFJQbGFudDtcblxuY29uc3Qgc2VsZWN0TVBsYW50ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnbVBsYW50U3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdE1QbGFudCA9IHNlbGVjdE1QbGFudDtcblxuY29uc3Qgc2VsZWN0S1BsYW50ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAna1BsYW50U3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdEtQbGFudCA9IHNlbGVjdEtQbGFudDtcblxuXG5cbmNvbnN0IHNlbGVjdFJGdW5ndXMgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTcG9yZSA9ICdyRnVuZ3VzU3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdFJGdW5ndXMgPSBzZWxlY3RSRnVuZ3VzO1xuXG5jb25zdCBzZWxlY3RNRnVuZ3VzID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnbUZ1bmd1c1Nwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RNRnVuZ3VzID0gc2VsZWN0TUZ1bmd1cztcblxuY29uc3Qgc2VsZWN0S0Z1bmd1cyA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ2tGdW5ndXNTcG9yZSc7XG59O1xuXG53aW5kb3cuc2VsZWN0S0Z1bmd1cyA9IHNlbGVjdEtGdW5ndXM7XG5cblxuXG5jb25zdCBzZWxlY3RSQW5pbWFsID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnckFuaW1hbFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RSQW5pbWFsID0gc2VsZWN0UkFuaW1hbDtcblxuY29uc3Qgc2VsZWN0TUFuaW1hbCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ21BbmltYWxTcG9yZSc7XG59O1xuXG53aW5kb3cuc2VsZWN0TUFuaW1hbCA9IHNlbGVjdE1BbmltYWw7XG5cbmNvbnN0IHNlbGVjdEtBbmltYWwgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTcG9yZSA9ICdrQW5pbWFsU3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdEtBbmltYWwgPSBzZWxlY3RLQW5pbWFsO1xuXG5cblxubGV0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgZ2FyZGVuLnVwZGF0ZUdhcmRlbigpO1xuICAgIGdhcmRlbi5yZW5kZXJHYXJkZW4oKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn07XG5cbmFuaW1hdGUoKTsiLCJcbmNsYXNzIEdhcmRlbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBzcG9yZXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3BvcmVzID0gc3BvcmVzO1xuICAgICAgICB0aGlzLmdhcmRlbiA9IHRoaXMuZ2VuZXJhdGVHYXJkZW4oKTtcbiAgICAgICAgdGhpcy5jb21wZXRlQXJyID0gdGhpcy5nZW5lcmF0ZUNvbXBldGVBcnIoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUdhcmRlbigpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdWJBcnIucHVzaCh0aGlzLnNwb3Jlcy5lbXB0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnIucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvbXBldGVBcnIoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3ViQXJyLnB1c2goe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLnB1c2goc3ViQXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgdXBkYXRlUGl4ZWwoeCwgeSwgc3BvcmVOYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FyZGVuW3hdW3ldID0gdGhpcy5zcG9yZXNbc3BvcmVOYW1lXTtcbiAgICB9XG5cbiAgICBjb3VudE5laWdoYm9ycyh4LCB5LCB0eXBlKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBuZWlnaGJvclBpeGVscyA9IFtcbiAgICAgICAgICAgIFstMSwgMF0sXG4gICAgICAgICAgICBbLTEsIDFdLFxuICAgICAgICAgICAgWzAsIDFdLFxuICAgICAgICAgICAgWzEsIDFdLFxuICAgICAgICAgICAgWzEsIDBdLFxuICAgICAgICAgICAgWzEsIC0xXSxcbiAgICAgICAgICAgIFswLCAtMV0sXG4gICAgICAgICAgICBbLTEsIC0xXVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JQaXhlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtb3ZlID0gbmVpZ2hib3JQaXhlbHNbaV07XG4gICAgICAgICAgICBsZXQgbW92ZVggPSB4ICsgbW92ZVswXTtcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IHkgKyBtb3ZlWzFdO1xuICAgICAgICAgICAgaWYgKG1vdmVYID49IDAgJiYgbW92ZVggPCB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICAgICAgbW92ZVkgPj0gMCAmJiBtb3ZlWSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwb3JlID0gdGhpcy5nYXJkZW5bbW92ZVhdW21vdmVZXTtcbiAgICAgICAgICAgICAgICBpZiAoc3BvcmUudHlwZSA9PT0gdHlwZSkgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICByZXByb2R1Y3Rpb24oeCwgeSwgc3BvcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcG9yZS5ncm93dGhQYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbW92ZSA9IHNwb3JlLmdyb3d0aFBhdHRlcm5baV07XG4gICAgICAgICAgICBsZXQgbW92ZVggPSB4ICsgbW92ZVswXTtcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IHkgKyBtb3ZlWzFdO1xuICAgICAgICAgICAgaWYgKG1vdmVYID49IDAgJiYgbW92ZVggPCB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICAgICAgbW92ZVkgPj0gMCAmJiBtb3ZlWSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBpeGVsID0gdGhpcy5jb21wZXRlQXJyW21vdmVYXVttb3ZlWV07XG4gICAgICAgICAgICAgICAgcGl4ZWxbc3BvcmUubmFtZV0gPSBzcG9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCB0eXBlKSB7XG4gICAgICAgIGxldCBzcG9yZXMgPSBPYmplY3QudmFsdWVzKGNvbGxlY3Rpb24pO1xuICAgICAgICBsZXQgY3VyclNwb3JlID0gbnVsbDtcbiAgICAgICAgbGV0IGN1cnJTY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BvcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm9sbCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBsZXQgZ3Jvd3RoUmF0ZSA9IHNwb3Jlc1tpXS5ncm93dGhSYXRlO1xuICAgICAgICAgICAgbGV0IHRvdWdobmVzcyA9IHNwb3Jlc1tpXS50b3VnaG5lc3M7XG4gICAgICAgICAgICBpZiAoZ3Jvd3RoUmF0ZSA+IHJvbGxcbiAgICAgICAgICAgICAgICAmJiB0b3VnaG5lc3MgLSByb2xsID4gY3VyclNjb3JlXG4gICAgICAgICAgICAgICAgJiYgc3BvcmVzW2ldLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyU3BvcmUgPSBzcG9yZXNbaV07XG4gICAgICAgICAgICAgICAgY3VyclNjb3JlID0gdG91Z2huZXNzIC0gcm9sbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VyclNwb3JlXG4gICAgICAgICAgICAmJiAodGhpcy5jb3VudE5laWdoYm9ycyh4LCB5LCBjdXJyU3BvcmUudHlwZSkgPCAzXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgLy8gfHwgY3VyclNwb3JlLnR5cGUgPiAyXG4gICAgICAgICAgICB0aGlzLmdhcmRlblt4XVt5XSA9IGN1cnJTcG9yZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmdhcmRlblt4XVt5XS50eXBlID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ29tcGV0aXRpb24oeCwgeSwgY29sbGVjdGlvbiwgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYXJkZW5beF1beV0udHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ29tcGV0aXRpb24oeCwgeSwgY29sbGVjdGlvbiwgMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCAzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUdhcmRlbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhcmRlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IHRoaXMuZ2FyZGVuW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BvcmUgPSBzdWJBcnJbal07XG4gICAgICAgICAgICAgICAgbGV0IHJvbGwgPSBNYXRoLnJhbmRvbSgpIDwgc3BvcmUubGlmZVNwYW47XG4gICAgICAgICAgICAgICAgaWYgKHNwb3JlLnR5cGUgPT09IDEgJiYgIXJvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJkZW5baV1bal0gPSB0aGlzLnNwb3Jlc1tzcG9yZS5uYW1lWzBdICsgJ0RlYWQnXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwb3JlLnR5cGUgPT09IDAgJiYgcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BvcmUudHlwZSA+IDAgJiYgcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcHJvZHVjdGlvbihpLCBqLCBzcG9yZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJkZW5baV1bal0gPSB0aGlzLnNwb3Jlcy5lbXB0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcGV0ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IHRoaXMuY29tcGV0ZUFycltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ViQXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBldGVDb2xsZWN0aW9uID0gdGhpcy5jb21wZXRlQXJyW2ldW2pdO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydENvbXBldGl0aW9uKGksIGosIGNvbXBldGVDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBldGVBcnJbaV1bal0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckdhcmRlbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhcmRlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IHRoaXMuZ2FyZGVuW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBzdWJBcnJbal0uY29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZmlsbFJlY3QoaSAqIDIsIGogKiAyLCAyLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FyZGVuOyIsImNvbnN0IGVtcHR5ID0ge1xuICAgIGdyb3d0aFJhdGU6IDAsXG4gICAgZ3Jvd3RoUGF0dGVybjogW10sXG4gICAgdG91Z2huZXNzOiAwLFxuICAgIGxpZmVTcGFuOiAwLFxuICAgIHR5cGU6IC0xLFxuICAgIG5hbWU6ICdlbXB0eScsXG4gICAgY29sb3I6ICcjMUQxRDFEJ1xufTtcblxuY29uc3QgckRlYWQgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMCxcbiAgICBncm93dGhQYXR0ZXJuOiBbXSxcbiAgICB0b3VnaG5lc3M6IDEsXG4gICAgbGlmZVNwYW46IDAuNSxcbiAgICB0eXBlOiAwLFxuICAgIG5hbWU6ICdyRGVhZCcsXG4gICAgY29sb3I6ICcjNjg1NDNjJ1xufTtcblxuY29uc3QgbURlYWQgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMCxcbiAgICBncm93dGhQYXR0ZXJuOiBbXSxcbiAgICB0b3VnaG5lc3M6IDEsXG4gICAgbGlmZVNwYW46IDAuOTksXG4gICAgdHlwZTogMCxcbiAgICBuYW1lOiAnbURlYWQnLFxuICAgIGNvbG9yOiAnIzZmNDkxZCdcbn07XG5cbmNvbnN0IGtEZWFkID0ge1xuICAgIGdyb3d0aFJhdGU6IDAsXG4gICAgZ3Jvd3RoUGF0dGVybjogW10sXG4gICAgdG91Z2huZXNzOiAxLFxuICAgIGxpZmVTcGFuOiAwLjk5OSxcbiAgICB0eXBlOiAwLFxuICAgIG5hbWU6ICdrRGVhZCcsXG4gICAgY29sb3I6ICcjNDQyZDEyJ1xufTtcblxuY29uc3QgclBsYW50U3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC45OSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMywgMF0sXG4gICAgICAgIFstMiwgMl0sXG4gICAgICAgIFswLCAzXSxcbiAgICAgICAgWzIsIDJdLFxuICAgICAgICBbMywgMF0sXG4gICAgICAgIFsyLCAtMl0sXG4gICAgICAgIFswLCAtM10sXG4gICAgICAgIFstMiwgLTJdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuMyxcbiAgICBsaWZlU3BhbjogMC41LFxuICAgIHR5cGU6IDEsXG4gICAgbmFtZTogJ3JQbGFudFNwb3JlJyxcbiAgICBjb2xvcjogJyNiN2ZmNmEnXG59O1xuXG5jb25zdCBtUGxhbnRTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjIsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbLTEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbLTEsIC0xXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjUsXG4gICAgbGlmZVNwYW46IDAuOSxcbiAgICB0eXBlOiAxLFxuICAgIG5hbWU6ICdtUGxhbnRTcG9yZScsXG4gICAgY29sb3I6ICcjNTJGRjAwJ1xufTtcblxuY29uc3Qga1BsYW50U3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC4xLFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFswLCAtMV1cbiAgICBdLFxuICAgIHRvdWdobmVzczogMC45LFxuICAgIGxpZmVTcGFuOiAwLjk5LFxuICAgIHR5cGU6IDEsXG4gICAgbmFtZTogJ2tQbGFudFNwb3JlJyxcbiAgICBjb2xvcjogJyMwMzg0MDAnXG59O1xuXG5jb25zdCByRnVuZ3VzU3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC45OSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMiwgMl0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzIsIDJdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsyLCAtMl0sXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFstMiwgLTJdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuMyxcbiAgICBsaWZlU3BhbjogMC43LFxuICAgIHR5cGU6IDIsXG4gICAgbmFtZTogJ3JGdW5ndXNTcG9yZScsXG4gICAgY29sb3I6ICcjYjNmZmU1J1xufTtcblxuY29uc3QgbUZ1bmd1c1Nwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuMSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsxLCAtMV0sXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFstMSwgLTFdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuNSxcbiAgICBsaWZlU3BhbjogMC45LFxuICAgIHR5cGU6IDIsXG4gICAgbmFtZTogJ21GdW5ndXNTcG9yZScsXG4gICAgY29sb3I6ICcjMDBmY2ZmJ1xufTtcblxuY29uc3Qga0Z1bmd1c1Nwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuMSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMCwgLTFdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuOSxcbiAgICBsaWZlU3BhbjogMC45OSxcbiAgICB0eXBlOiAyLFxuICAgIG5hbWU6ICdrRnVuZ3VzU3BvcmUnLFxuICAgIGNvbG9yOiAnIzAwODNjNydcbn07XG5cbmNvbnN0IHJBbmltYWxTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjEsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTMsIDBdLFxuICAgICAgICBbLTIsIDJdLFxuICAgICAgICBbMCwgM10sXG4gICAgICAgIFsyLCAyXSxcbiAgICAgICAgWzMsIDBdLFxuICAgICAgICBbMiwgLTJdLFxuICAgICAgICBbMCwgLTNdLFxuICAgICAgICBbLTIsIC0yXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjMsXG4gICAgbGlmZVNwYW46IDAuODUsXG4gICAgdHlwZTogMyxcbiAgICBuYW1lOiAnckFuaW1hbFNwb3JlJyxcbiAgICBjb2xvcjogJyNmZjdjNjYnXG59O1xuXG5jb25zdCBtQW5pbWFsU3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC4xNSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMywgMF0sXG4gICAgICAgIFstMiwgMl0sXG4gICAgICAgIFswLCAzXSxcbiAgICAgICAgWzIsIDJdLFxuICAgICAgICBbMywgMF0sXG4gICAgICAgIFsyLCAtMl0sXG4gICAgICAgIFswLCAtM10sXG4gICAgICAgIFstMiwgLTJdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuNSxcbiAgICBsaWZlU3BhbjogMC45LFxuICAgIHR5cGU6IDMsXG4gICAgbmFtZTogJ21BbmltYWxTcG9yZScsXG4gICAgY29sb3I6ICcjZmYyNDAwJ1xufTtcblxuY29uc3Qga0FuaW1hbFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuMixcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMiwgMl0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzIsIDJdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsyLCAtMl0sXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFstMiwgLTJdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuOSxcbiAgICBsaWZlU3BhbjogMC45NSxcbiAgICB0eXBlOiAzLFxuICAgIG5hbWU6ICdrQW5pbWFsU3BvcmUnLFxuICAgIGNvbG9yOiAnIzlkMTYwMCdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVtcHR5LFxuICAgIHJEZWFkLFxuICAgIG1EZWFkLFxuICAgIGtEZWFkLFxuICAgIHJQbGFudFNwb3JlLFxuICAgIG1QbGFudFNwb3JlLFxuICAgIGtQbGFudFNwb3JlLFxuICAgIHJGdW5ndXNTcG9yZSxcbiAgICBtRnVuZ3VzU3BvcmUsXG4gICAga0Z1bmd1c1Nwb3JlLFxuICAgIHJBbmltYWxTcG9yZSxcbiAgICBtQW5pbWFsU3BvcmUsXG4gICAga0FuaW1hbFNwb3JlXG59OyIsImV4cG9ydCBkZWZhdWx0ICh4MCwgeTAsIHgxLCB5MSkgPT4ge1xuICAgIGxldCBkeCA9IHgxIC0geDA7XG4gICAgbGV0IGR5ID0geTEgLSB5MDtcbiAgICBcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==