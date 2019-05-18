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


var canvasElement = document.getElementById('canvas');
var canvas = canvasElement.getContext('2d');
var garden = new _garden_garden__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, 300, 200, _spore_spores__WEBPACK_IMPORTED_MODULE_1__["default"]);
var selectedSpore = 'mPlantSpore';
var draw = false;
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

var resetGarden = function resetGarden() {
  garden = new _garden_garden__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, 300, 200, _spore_spores__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

window.resetGarden = resetGarden;

var demoGarden = function demoGarden() {
  garden = new _garden_garden__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, 300, 200, _spore_spores__WEBPACK_IMPORTED_MODULE_1__["default"]);
  garden.updatePixel(100, 50, 'mPlantSpore');
  garden.updatePixel(101, 50, 'kFungusSpore');
  garden.updatePixel(102, 50, 'mPlantSpore');
  garden.updatePixel(100, 51, 'mPlantSpore');
  garden.updatePixel(101, 51, 'kFungusSpore');
  garden.updatePixel(102, 51, 'mPlantSpore');
  garden.updatePixel(100, 52, 'mPlantSpore');
  garden.updatePixel(101, 52, 'kFungusSpore');
  garden.updatePixel(102, 52, 'mPlantSpore');
  garden.updatePixel(220, 130, 'kPlantSpore');
  garden.updatePixel(221, 130, 'kPlantSpore');
  garden.updatePixel(222, 130, 'kPlantSpore');
  garden.updatePixel(220, 131, 'kPlantSpore');
  garden.updatePixel(221, 131, 'kPlantSpore');
  garden.updatePixel(222, 131, 'kPlantSpore');
  garden.updatePixel(220, 132, 'kPlantSpore');
  garden.updatePixel(221, 132, 'kPlantSpore');
  garden.updatePixel(222, 132, 'kPlantSpore');
  garden.updatePixel(30, 170, 'kAnimalSpore');
  garden.updatePixel(31, 170, 'rPlantSpore');
  garden.updatePixel(32, 170, 'rPlantSpore');
  garden.updatePixel(33, 170, 'kAnimalSpore');
  garden.updatePixel(30, 171, 'rPlantSpore');
  garden.updatePixel(31, 171, 'rPlantSpore');
  garden.updatePixel(32, 171, 'rPlantSpore');
  garden.updatePixel(33, 171, 'rPlantSpore');
  garden.updatePixel(30, 172, 'rPlantSpore');
  garden.updatePixel(31, 172, 'rPlantSpore');
  garden.updatePixel(32, 172, 'rPlantSpore');
  garden.updatePixel(33, 172, 'rPlantSpore');
  garden.updatePixel(30, 173, 'kAnimalSpore');
  garden.updatePixel(31, 173, 'rPlantSpore');
  garden.updatePixel(32, 173, 'rPlantSpore');
  garden.updatePixel(33, 173, 'kAnimalSpore');
};

window.demoGarden = demoGarden;

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
      } else if (this.garden[x][y].type === 2 || this.garden[x][y].type === 3) {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FyZGVuL2dhcmRlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BvcmUvc3BvcmVzLmpzIl0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsImdhcmRlbiIsIkdhcmRlbiIsInNwb3JlcyIsInNlbGVjdGVkU3BvcmUiLCJkcmF3IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ4IiwiTWF0aCIsImZsb29yIiwib2Zmc2V0WCIsInkiLCJvZmZzZXRZIiwidXBkYXRlUGl4ZWwiLCJzZWxlY3RSUGxhbnQiLCJ3aW5kb3ciLCJzZWxlY3RNUGxhbnQiLCJzZWxlY3RLUGxhbnQiLCJzZWxlY3RSRnVuZ3VzIiwic2VsZWN0TUZ1bmd1cyIsInNlbGVjdEtGdW5ndXMiLCJzZWxlY3RSQW5pbWFsIiwic2VsZWN0TUFuaW1hbCIsInNlbGVjdEtBbmltYWwiLCJyZXNldEdhcmRlbiIsImRlbW9HYXJkZW4iLCJhbmltYXRlIiwidXBkYXRlR2FyZGVuIiwicmVuZGVyR2FyZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJnZW5lcmF0ZUdhcmRlbiIsImNvbXBldGVBcnIiLCJnZW5lcmF0ZUNvbXBldGVBcnIiLCJhcnIiLCJpIiwic3ViQXJyIiwiaiIsInB1c2giLCJlbXB0eSIsInNwb3JlTmFtZSIsInR5cGUiLCJjb3VudCIsIm5laWdoYm9yUGl4ZWxzIiwibGVuZ3RoIiwibW92ZSIsIm1vdmVYIiwibW92ZVkiLCJzcG9yZSIsImdyb3d0aFBhdHRlcm4iLCJwaXhlbCIsIm5hbWUiLCJjb2xsZWN0aW9uIiwiT2JqZWN0IiwidmFsdWVzIiwiY3VyclNwb3JlIiwiY3VyclNjb3JlIiwicm9sbCIsInJhbmRvbSIsImdyb3d0aFJhdGUiLCJ0b3VnaG5lc3MiLCJjb3VudE5laWdoYm9ycyIsIm5ld1Nwb3JlUm9sbCIsIm9sZFNwb3JlUm9sbCIsInByb2Nlc3NDb21wZXRpdGlvbiIsInByb2Nlc3NBbmltYWxWc0Z1bmd1cyIsImxpZmVTcGFuIiwicmVwcm9kdWN0aW9uIiwiY29tcGV0ZUNvbGxlY3Rpb24iLCJzb3J0Q29tcGV0aXRpb24iLCJmaWxsU3R5bGUiLCJjb2xvciIsImZpbGxSZWN0IiwickRlYWQiLCJtRGVhZCIsImtEZWFkIiwiclBsYW50U3BvcmUiLCJtUGxhbnRTcG9yZSIsImtQbGFudFNwb3JlIiwickZ1bmd1c1Nwb3JlIiwibUZ1bmd1c1Nwb3JlIiwia0Z1bmd1c1Nwb3JlIiwickFuaW1hbFNwb3JlIiwibUFuaW1hbFNwb3JlIiwia0FuaW1hbFNwb3JlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxh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QUUsY0FmVztBQWdCakJvQixPQUFLLEVBQUU7QUFoQlUsQ0FBckI7QUFtQkEsSUFBTWEsWUFBWSxHQUFHO0FBQ2pCekIsWUFBVSxFQUFFLEdBREs7QUFFakJWLGVBQWEsRUFBRSxDQUNYLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQURXLEVBRVgsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZXLEVBR1gsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUhXLEVBSVgsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBSlcsQ0FGRTtBQVFqQlcsV0FBUyxFQUFFLEdBUk07QUFTakJNLFVBQVEsRUFBRSxJQVRPO0FBVWpCekIsTUFBSSxFQUFFLENBVlc7QUFXakJVLE1BQUksRUFBRSxjQVhXO0FBWWpCb0IsT0FBSyxFQUFFO0FBWlUsQ0FBckI7QUFnQmU7QUFDWGhDLE9BQUssRUFBTEEsS0FEVztBQUVYa0MsT0FBSyxFQUFMQSxLQUZXO0FBR1hDLE9BQUssRUFBTEEsS0FIVztBQUlYQyxPQUFLLEVBQUxBLEtBSlc7QUFLWEMsYUFBVyxFQUFYQSxXQUxXO0FBTVhDLGFBQVcsRUFBWEEsV0FOVztBQU9YQyxhQUFXLEVBQVhBLFdBUFc7QUFRWEMsY0FBWSxFQUFaQSxZQVJXO0FBU1hDLGNBQVksRUFBWkEsWUFUVztBQVVYQyxjQUFZLEVBQVpBLFlBVlc7QUFXWEMsY0FBWSxFQUFaQSxZQVhXO0FBWVhDLGNBQVksRUFBWkEsWUFaVztBQWFYQyxjQUFZLEVBQVpBO0FBYlcsQ0FBZixFIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgR2FyZGVuIGZyb20gJy4vZ2FyZGVuL2dhcmRlbic7XG5pbXBvcnQgc3BvcmVzIGZyb20gJy4vc3BvcmUvc3BvcmVzJztcblxubGV0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5sZXQgY2FudmFzID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgZ2FyZGVuID0gbmV3IEdhcmRlbihjYW52YXMsIDMwMCwgMjAwLCBzcG9yZXMpO1xubGV0IHNlbGVjdGVkU3BvcmUgPSAnbVBsYW50U3BvcmUnO1xubGV0IGRyYXcgPSBmYWxzZTtcblxuY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICBkcmF3ID0gdHJ1ZTtcblxuICAgIGxldCB4ID0gW01hdGguZmxvb3IoZS5vZmZzZXRYIC8gMildO1xuICAgIGxldCB5ID0gW01hdGguZmxvb3IoZS5vZmZzZXRZIC8gMildO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCh4LCB5LCBzZWxlY3RlZFNwb3JlKTtcbn0pO1xuXG5jYW52YXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGlmIChkcmF3KSB7XG4gICAgICAgIGxldCB4ID0gW01hdGguZmxvb3IoZS5vZmZzZXRYIC8gMildO1xuICAgICAgICBsZXQgeSA9IFtNYXRoLmZsb29yKGUub2Zmc2V0WSAvIDIpXTtcbiAgICAgICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKHgsIHksIHNlbGVjdGVkU3BvcmUpO1xuICAgIH1cbn0pO1xuXG5jYW52YXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcbiAgICBkcmF3ID0gZmFsc2U7XG59KTtcblxuY2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XG4gICAgZHJhdyA9IGZhbHNlO1xufSk7XG5cblxuY29uc3Qgc2VsZWN0UlBsYW50ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnclBsYW50U3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdFJQbGFudCA9IHNlbGVjdFJQbGFudDtcblxuY29uc3Qgc2VsZWN0TVBsYW50ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnbVBsYW50U3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdE1QbGFudCA9IHNlbGVjdE1QbGFudDtcblxuY29uc3Qgc2VsZWN0S1BsYW50ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAna1BsYW50U3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdEtQbGFudCA9IHNlbGVjdEtQbGFudDtcblxuXG5cbmNvbnN0IHNlbGVjdFJGdW5ndXMgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTcG9yZSA9ICdyRnVuZ3VzU3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdFJGdW5ndXMgPSBzZWxlY3RSRnVuZ3VzO1xuXG5jb25zdCBzZWxlY3RNRnVuZ3VzID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnbUZ1bmd1c1Nwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RNRnVuZ3VzID0gc2VsZWN0TUZ1bmd1cztcblxuY29uc3Qgc2VsZWN0S0Z1bmd1cyA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ2tGdW5ndXNTcG9yZSc7XG59O1xuXG53aW5kb3cuc2VsZWN0S0Z1bmd1cyA9IHNlbGVjdEtGdW5ndXM7XG5cblxuXG5jb25zdCBzZWxlY3RSQW5pbWFsID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnckFuaW1hbFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RSQW5pbWFsID0gc2VsZWN0UkFuaW1hbDtcblxuY29uc3Qgc2VsZWN0TUFuaW1hbCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ21BbmltYWxTcG9yZSc7XG59O1xuXG53aW5kb3cuc2VsZWN0TUFuaW1hbCA9IHNlbGVjdE1BbmltYWw7XG5cbmNvbnN0IHNlbGVjdEtBbmltYWwgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTcG9yZSA9ICdrQW5pbWFsU3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdEtBbmltYWwgPSBzZWxlY3RLQW5pbWFsO1xuXG5cblxuY29uc3QgcmVzZXRHYXJkZW4gPSAoKSA9PiB7XG4gICAgZ2FyZGVuID0gbmV3IEdhcmRlbihjYW52YXMsIDMwMCwgMjAwLCBzcG9yZXMpO1xufTtcblxud2luZG93LnJlc2V0R2FyZGVuID0gcmVzZXRHYXJkZW47XG5cbmNvbnN0IGRlbW9HYXJkZW4gPSAoKSA9PiB7XG4gICAgZ2FyZGVuID0gbmV3IEdhcmRlbihjYW52YXMsIDMwMCwgMjAwLCBzcG9yZXMpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgxMDAsIDUwLCAnbVBsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMTAxLCA1MCwgJ2tGdW5ndXNTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgxMDIsIDUwLCAnbVBsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMTAwLCA1MSwgJ21QbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDEwMSwgNTEsICdrRnVuZ3VzU3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMTAyLCA1MSwgJ21QbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDEwMCwgNTIsICdtUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgxMDEsIDUyLCAna0Z1bmd1c1Nwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDEwMiwgNTIsICdtUGxhbnRTcG9yZScpO1xuXG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDIyMCwgMTMwLCAna1BsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMjIxLCAxMzAsICdrUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgyMjIsIDEzMCwgJ2tQbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDIyMCwgMTMxLCAna1BsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMjIxLCAxMzEsICdrUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgyMjIsIDEzMSwgJ2tQbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDIyMCwgMTMyLCAna1BsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMjIxLCAxMzIsICdrUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgyMjIsIDEzMiwgJ2tQbGFudFNwb3JlJyk7XG5cblxuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgzMCwgMTcwLCAna0FuaW1hbFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDMxLCAxNzAsICdyUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgzMiwgMTcwLCAnclBsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMzMsIDE3MCwgJ2tBbmltYWxTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgzMCwgMTcxLCAnclBsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMzEsIDE3MSwgJ3JQbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDMyLCAxNzEsICdyUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgzMywgMTcxLCAnclBsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMzAsIDE3MiwgJ3JQbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDMxLCAxNzIsICdyUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgzMiwgMTcyLCAnclBsYW50U3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMzMsIDE3MiwgJ3JQbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDMwLCAxNzMsICdrQW5pbWFsU3BvcmUnKTtcbiAgICBnYXJkZW4udXBkYXRlUGl4ZWwoMzEsIDE3MywgJ3JQbGFudFNwb3JlJyk7XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKDMyLCAxNzMsICdyUGxhbnRTcG9yZScpO1xuICAgIGdhcmRlbi51cGRhdGVQaXhlbCgzMywgMTczLCAna0FuaW1hbFNwb3JlJyk7XG59O1xuXG53aW5kb3cuZGVtb0dhcmRlbiA9IGRlbW9HYXJkZW47XG5cblxubGV0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgZ2FyZGVuLnVwZGF0ZUdhcmRlbigpO1xuICAgIGdhcmRlbi5yZW5kZXJHYXJkZW4oKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn07XG5cbmFuaW1hdGUoKTsiLCJcbmNsYXNzIEdhcmRlbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBzcG9yZXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3BvcmVzID0gc3BvcmVzO1xuICAgICAgICB0aGlzLmdhcmRlbiA9IHRoaXMuZ2VuZXJhdGVHYXJkZW4oKTtcbiAgICAgICAgdGhpcy5jb21wZXRlQXJyID0gdGhpcy5nZW5lcmF0ZUNvbXBldGVBcnIoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUdhcmRlbigpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdWJBcnIucHVzaCh0aGlzLnNwb3Jlcy5lbXB0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnIucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvbXBldGVBcnIoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3ViQXJyLnB1c2goe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLnB1c2goc3ViQXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgdXBkYXRlUGl4ZWwoeCwgeSwgc3BvcmVOYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FyZGVuW3hdW3ldID0gdGhpcy5zcG9yZXNbc3BvcmVOYW1lXTtcbiAgICB9XG5cbiAgICBjb3VudE5laWdoYm9ycyh4LCB5LCB0eXBlKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBuZWlnaGJvclBpeGVscyA9IFtcbiAgICAgICAgICAgIFstMSwgMF0sXG4gICAgICAgICAgICBbLTEsIDFdLFxuICAgICAgICAgICAgWzAsIDFdLFxuICAgICAgICAgICAgWzEsIDFdLFxuICAgICAgICAgICAgWzEsIDBdLFxuICAgICAgICAgICAgWzEsIC0xXSxcbiAgICAgICAgICAgIFswLCAtMV0sXG4gICAgICAgICAgICBbLTEsIC0xXVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JQaXhlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtb3ZlID0gbmVpZ2hib3JQaXhlbHNbaV07XG4gICAgICAgICAgICBsZXQgbW92ZVggPSB4ICsgbW92ZVswXTtcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IHkgKyBtb3ZlWzFdO1xuICAgICAgICAgICAgaWYgKG1vdmVYID49IDAgJiYgbW92ZVggPCB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICAgICAgbW92ZVkgPj0gMCAmJiBtb3ZlWSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwb3JlID0gdGhpcy5nYXJkZW5bbW92ZVhdW21vdmVZXTtcbiAgICAgICAgICAgICAgICBpZiAoc3BvcmUudHlwZSA9PT0gdHlwZSkgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICByZXByb2R1Y3Rpb24oeCwgeSwgc3BvcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcG9yZS5ncm93dGhQYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbW92ZSA9IHNwb3JlLmdyb3d0aFBhdHRlcm5baV07XG4gICAgICAgICAgICBsZXQgbW92ZVggPSB4ICsgbW92ZVswXTtcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IHkgKyBtb3ZlWzFdO1xuICAgICAgICAgICAgaWYgKG1vdmVYID49IDAgJiYgbW92ZVggPCB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICAgICAgbW92ZVkgPj0gMCAmJiBtb3ZlWSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBpeGVsID0gdGhpcy5jb21wZXRlQXJyW21vdmVYXVttb3ZlWV07XG4gICAgICAgICAgICAgICAgcGl4ZWxbc3BvcmUubmFtZV0gPSBzcG9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCB0eXBlKSB7XG4gICAgICAgIGxldCBzcG9yZXMgPSBPYmplY3QudmFsdWVzKGNvbGxlY3Rpb24pO1xuICAgICAgICBsZXQgY3VyclNwb3JlID0gbnVsbDtcbiAgICAgICAgbGV0IGN1cnJTY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BvcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm9sbCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBsZXQgZ3Jvd3RoUmF0ZSA9IHNwb3Jlc1tpXS5ncm93dGhSYXRlO1xuICAgICAgICAgICAgbGV0IHRvdWdobmVzcyA9IHNwb3Jlc1tpXS50b3VnaG5lc3M7XG4gICAgICAgICAgICBpZiAoZ3Jvd3RoUmF0ZSA+IHJvbGxcbiAgICAgICAgICAgICAgICAmJiAodG91Z2huZXNzIC0gcm9sbCkgPiBjdXJyU2NvcmVcbiAgICAgICAgICAgICAgICAmJiBzcG9yZXNbaV0udHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIGN1cnJTcG9yZSA9IHNwb3Jlc1tpXTtcbiAgICAgICAgICAgICAgICBjdXJyU2NvcmUgPSB0b3VnaG5lc3MgLSByb2xsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyU3BvcmUgJiYgdGhpcy5jb3VudE5laWdoYm9ycyh4LCB5LCBjdXJyU3BvcmUudHlwZSkgPCAzKSB7XG4gICAgICAgICAgICB0aGlzLmdhcmRlblt4XVt5XSA9IGN1cnJTcG9yZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NBbmltYWxWc0Z1bmd1cyh4LCB5LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGxldCBzcG9yZXMgPSBPYmplY3QudmFsdWVzKGNvbGxlY3Rpb24pO1xuICAgICAgICBsZXQgY3VyclNwb3JlID0gbnVsbDtcbiAgICAgICAgbGV0IGN1cnJTY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BvcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm9sbCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBsZXQgZ3Jvd3RoUmF0ZSA9IHNwb3Jlc1tpXS5ncm93dGhSYXRlO1xuICAgICAgICAgICAgbGV0IHRvdWdobmVzcyA9IHNwb3Jlc1tpXS50b3VnaG5lc3M7XG4gICAgICAgICAgICBpZiAoZ3Jvd3RoUmF0ZSA+IHJvbGxcbiAgICAgICAgICAgICAgICAmJiAodG91Z2huZXNzIC0gcm9sbCkgPiBjdXJyU2NvcmVcbiAgICAgICAgICAgICAgICAmJiBzcG9yZXNbaV0udHlwZSA+IDEpIHtcbiAgICAgICAgICAgICAgICBjdXJyU3BvcmUgPSBzcG9yZXNbaV07XG4gICAgICAgICAgICAgICAgY3VyclNjb3JlID0gdG91Z2huZXNzIC0gcm9sbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VyclNwb3JlICYmIHRoaXMuY291bnROZWlnaGJvcnMoeCwgeSwgY3VyclNwb3JlLnR5cGUpIDwgMykge1xuICAgICAgICAgICAgbGV0IG5ld1Nwb3JlUm9sbCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBsZXQgb2xkU3BvcmVSb2xsID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGlmICgoY3VyclNwb3JlLnRvdWdobmVzcyAtIG5ld1Nwb3JlUm9sbClcbiAgICAgICAgICAgICAgICA+ICh0aGlzLmdhcmRlblt4XVt5XS50b3VnaG5lc3MgLSBvbGRTcG9yZVJvbGwpKVxuICAgICAgICAgICAgdGhpcy5nYXJkZW5beF1beV0gPSBjdXJyU3BvcmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0Q29tcGV0aXRpb24oeCwgeSwgY29sbGVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5nYXJkZW5beF1beV0udHlwZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NvbXBldGl0aW9uKHgsIHksIGNvbGxlY3Rpb24sIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FyZGVuW3hdW3ldLnR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NvbXBldGl0aW9uKHgsIHksIGNvbGxlY3Rpb24sIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FyZGVuW3hdW3ldLnR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NvbXBldGl0aW9uKHgsIHksIGNvbGxlY3Rpb24sIDMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FyZGVuW3hdW3ldLnR5cGUgPT09IDIgfHwgdGhpcy5nYXJkZW5beF1beV0udHlwZSA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQW5pbWFsVnNGdW5ndXMoeCwgeSwgY29sbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVHYXJkZW4oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYXJkZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdWJBcnIgPSB0aGlzLmdhcmRlbltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ViQXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwb3JlID0gc3ViQXJyW2pdO1xuICAgICAgICAgICAgICAgIGxldCByb2xsID0gTWF0aC5yYW5kb20oKSA8IHNwb3JlLmxpZmVTcGFuO1xuICAgICAgICAgICAgICAgIGlmIChzcG9yZS50eXBlID09PSAxICYmICFyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyZGVuW2ldW2pdID0gdGhpcy5zcG9yZXNbc3BvcmUubmFtZVswXSArICdEZWFkJ107XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcG9yZS50eXBlID09PSAwICYmIHJvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwb3JlLnR5cGUgPiAwICYmIHJvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXByb2R1Y3Rpb24oaSwgaiwgc3BvcmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyZGVuW2ldW2pdID0gdGhpcy5zcG9yZXMuZW1wdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbXBldGVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdWJBcnIgPSB0aGlzLmNvbXBldGVBcnJbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YkFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjb21wZXRlQ29sbGVjdGlvbiA9IHRoaXMuY29tcGV0ZUFycltpXVtqXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRDb21wZXRpdGlvbihpLCBqLCBjb21wZXRlQ29sbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wZXRlQXJyW2ldW2pdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJHYXJkZW4oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYXJkZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdWJBcnIgPSB0aGlzLmdhcmRlbltpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ViQXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gc3ViQXJyW2pdLmNvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmZpbGxSZWN0KGkgKiAyLCBqICogMiwgMiwgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhcmRlbjsiLCJjb25zdCBlbXB0eSA9IHtcbiAgICBncm93dGhSYXRlOiAwLFxuICAgIGdyb3d0aFBhdHRlcm46IFtdLFxuICAgIHRvdWdobmVzczogMCxcbiAgICBsaWZlU3BhbjogMCxcbiAgICB0eXBlOiAtMSxcbiAgICBuYW1lOiAnZW1wdHknLFxuICAgIGNvbG9yOiAnIzFEMUQxRCdcbn07XG5cbmNvbnN0IHJEZWFkID0ge1xuICAgIGdyb3d0aFJhdGU6IDAsXG4gICAgZ3Jvd3RoUGF0dGVybjogW10sXG4gICAgdG91Z2huZXNzOiAxLFxuICAgIGxpZmVTcGFuOiAwLjUsXG4gICAgdHlwZTogMCxcbiAgICBuYW1lOiAnckRlYWQnLFxuICAgIGNvbG9yOiAnIzY4NTQzYydcbn07XG5cbmNvbnN0IG1EZWFkID0ge1xuICAgIGdyb3d0aFJhdGU6IDAsXG4gICAgZ3Jvd3RoUGF0dGVybjogW10sXG4gICAgdG91Z2huZXNzOiAxLFxuICAgIGxpZmVTcGFuOiAwLjk5LFxuICAgIHR5cGU6IDAsXG4gICAgbmFtZTogJ21EZWFkJyxcbiAgICBjb2xvcjogJyM2ZjQ5MWQnXG59O1xuXG5jb25zdCBrRGVhZCA9IHtcbiAgICBncm93dGhSYXRlOiAwLFxuICAgIGdyb3d0aFBhdHRlcm46IFtdLFxuICAgIHRvdWdobmVzczogMSxcbiAgICBsaWZlU3BhbjogMC45OTksXG4gICAgdHlwZTogMCxcbiAgICBuYW1lOiAna0RlYWQnLFxuICAgIGNvbG9yOiAnIzQ0MmQxMidcbn07XG5cbmNvbnN0IHJQbGFudFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuOTksXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTMsIDBdLFxuICAgICAgICBbLTIsIDJdLFxuICAgICAgICBbMCwgM10sXG4gICAgICAgIFsyLCAyXSxcbiAgICAgICAgWzMsIDBdLFxuICAgICAgICBbMiwgLTJdLFxuICAgICAgICBbMCwgLTNdLFxuICAgICAgICBbLTIsIC0yXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjMsXG4gICAgbGlmZVNwYW46IDAuNSxcbiAgICB0eXBlOiAxLFxuICAgIG5hbWU6ICdyUGxhbnRTcG9yZScsXG4gICAgY29sb3I6ICcjYjdmZjZhJ1xufTtcblxuY29uc3QgbVBsYW50U3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC4yLFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgWy0xLCAxXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIC0xXSxcbiAgICAgICAgWzAsIC0xXSxcbiAgICAgICAgWy0xLCAtMV1cbiAgICBdLFxuICAgIHRvdWdobmVzczogMC41LFxuICAgIGxpZmVTcGFuOiAwLjksXG4gICAgdHlwZTogMSxcbiAgICBuYW1lOiAnbVBsYW50U3BvcmUnLFxuICAgIGNvbG9yOiAnIzUyRkYwMCdcbn07XG5cbmNvbnN0IGtQbGFudFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuMSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMCwgLTFdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuOSxcbiAgICBsaWZlU3BhbjogMC45OSxcbiAgICB0eXBlOiAxLFxuICAgIG5hbWU6ICdrUGxhbnRTcG9yZScsXG4gICAgY29sb3I6ICcjMDM4NDAwJ1xufTtcblxuY29uc3QgckZ1bmd1c1Nwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuOTksXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbLTIsIDJdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsyLCAyXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMiwgLTJdLFxuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbLTIsIC0yXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjMsXG4gICAgbGlmZVNwYW46IDAuNyxcbiAgICB0eXBlOiAyLFxuICAgIG5hbWU6ICdyRnVuZ3VzU3BvcmUnLFxuICAgIGNvbG9yOiAnI2IzZmZlNSdcbn07XG5cbmNvbnN0IG1GdW5ndXNTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjIsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbLTEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbLTEsIC0xXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjUsXG4gICAgbGlmZVNwYW46IDAuOSxcbiAgICB0eXBlOiAyLFxuICAgIG5hbWU6ICdtRnVuZ3VzU3BvcmUnLFxuICAgIGNvbG9yOiAnIzAwZmNmZidcbn07XG5cbmNvbnN0IGtGdW5ndXNTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjEsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzAsIC0xXVxuICAgIF0sXG4gICAgdG91Z2huZXNzOiAwLjksXG4gICAgbGlmZVNwYW46IDAuOTksXG4gICAgdHlwZTogMixcbiAgICBuYW1lOiAna0Z1bmd1c1Nwb3JlJyxcbiAgICBjb2xvcjogJyMwMDgzYzcnXG59O1xuXG5jb25zdCByQW5pbWFsU3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC45LFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0zLCAwXSxcbiAgICAgICAgWy0yLCAyXSxcbiAgICAgICAgWzAsIDNdLFxuICAgICAgICBbMiwgMl0sXG4gICAgICAgIFszLCAwXSxcbiAgICAgICAgWzIsIC0yXSxcbiAgICAgICAgWzAsIC0zXSxcbiAgICAgICAgWy0yLCAtMl1cbiAgICBdLFxuICAgIHRvdWdobmVzczogMC4zLFxuICAgIGxpZmVTcGFuOiAwLjg1LFxuICAgIHR5cGU6IDMsXG4gICAgbmFtZTogJ3JBbmltYWxTcG9yZScsXG4gICAgY29sb3I6ICcjZmY3YzY2J1xufTtcblxuY29uc3QgbUFuaW1hbFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuNyxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMiwgMF0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFswLCAyXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMiwgMF0sXG4gICAgICAgIFsxLCAtMV0sXG4gICAgICAgIFswLCAtMl0sXG4gICAgICAgIFstMSwgLTFdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuNSxcbiAgICBsaWZlU3BhbjogMC45LFxuICAgIHR5cGU6IDMsXG4gICAgbmFtZTogJ21BbmltYWxTcG9yZScsXG4gICAgY29sb3I6ICcjZmYyNDAwJ1xufTtcblxuY29uc3Qga0FuaW1hbFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuNSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMCwgLTFdXG4gICAgXSxcbiAgICB0b3VnaG5lc3M6IDAuOSxcbiAgICBsaWZlU3BhbjogMC45OSxcbiAgICB0eXBlOiAzLFxuICAgIG5hbWU6ICdrQW5pbWFsU3BvcmUnLFxuICAgIGNvbG9yOiAnIzlkMTYwMCdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVtcHR5LFxuICAgIHJEZWFkLFxuICAgIG1EZWFkLFxuICAgIGtEZWFkLFxuICAgIHJQbGFudFNwb3JlLFxuICAgIG1QbGFudFNwb3JlLFxuICAgIGtQbGFudFNwb3JlLFxuICAgIHJGdW5ndXNTcG9yZSxcbiAgICBtRnVuZ3VzU3BvcmUsXG4gICAga0Z1bmd1c1Nwb3JlLFxuICAgIHJBbmltYWxTcG9yZSxcbiAgICBtQW5pbWFsU3BvcmUsXG4gICAga0FuaW1hbFNwb3JlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=