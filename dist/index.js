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
canvasElement.addEventListener('click', function (e) {
  var x = [Math.floor(e.offsetX / 2)];
  var y = [Math.floor(e.offsetY / 2)];
  garden.updatePixel(x, y, selectedSpore);
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

var selectMFungus = function selectMFungus() {
  selectedSpore = 'mFungusSpore';
};

window.selectMFungus = selectMFungus;

var selectMAnimal = function selectMAnimal() {
  selectedSpore = 'mAnimalSpore';
};

window.selectMAnimal = selectMAnimal;

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
    key: "reproduction",
    value: function reproduction(x, y, spore) {
      for (var i = 0; i < spore.growthPattern.length; i++) {
        var move = spore.growthPattern[i];
        var moveX = x + move[0];
        var moveY = y + move[1];

        if (moveX >= 0 && moveX < this.width && moveY >= 0 && moveY < this.height) {
          var pixel = this.competeArr[x + move[0]][y + move[1]];
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
        var bodySize = spores[i].bodySize;

        if (growthRate > roll && bodySize - roll > currScore && spores[i].type === type) {
          currSpore = spores[i];
          currScore = bodySize - roll;
        }
      }

      if (currSpore) this.garden[x][y] = currSpore;
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
            this.garden[i][j] = this.spores.dead;
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
  bodySize: 0,
  lifeSpan: 0,
  type: -1,
  name: 'empty',
  color: '#1D1D1D'
};
var dead = {
  growthRate: 0,
  growthPattern: [],
  bodySize: 1,
  lifeSpan: 0.999,
  type: 0,
  name: 'dead',
  color: '#6f491d'
};
var rPlantSpore = {
  growthRate: 0.99,
  growthPattern: [[-1, 0], [-2, 2], [0, 1], [2, 2], [1, 0], [2, -2], [0, -1], [-2, -2]],
  bodySize: 0.3,
  lifeSpan: 0.7,
  type: 1,
  name: 'rPlantSpore',
  color: '#c0ffa2'
};
var mPlantSpore = {
  growthRate: 0.3,
  growthPattern: [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]],
  bodySize: 0.5,
  lifeSpan: 0.9,
  type: 1,
  name: 'mPlantSpore',
  color: '#52FF00'
};
var kPlantSpore = {
  growthRate: 0.1,
  growthPattern: [[-1, 0], [0, 1], [1, 0], [0, -1]],
  bodySize: 0.9,
  lifeSpan: 0.99,
  type: 1,
  name: 'kPlantSpore',
  color: '#2f9100'
};
var mFungusSpore = {
  growthRate: 0.1,
  growthPattern: [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]],
  bodySize: 0.5,
  lifeSpan: 0.9,
  type: 2,
  name: 'mFungusSpore',
  color: '#00fcff'
};
var mAnimalSpore = {
  growthRate: 0.7,
  growthPattern: [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]],
  bodySize: 0.5,
  lifeSpan: 0.9,
  type: 3,
  name: 'mAnimalSpore',
  color: '#ff2400'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  empty: empty,
  dead: dead,
  rPlantSpore: rPlantSpore,
  mPlantSpore: mPlantSpore,
  kPlantSpore: kPlantSpore,
  mFungusSpore: mFungusSpore,
  mAnimalSpore: mAnimalSpore
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FyZGVuL2dhcmRlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BvcmUvc3BvcmVzLmpzIl0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsImdhcmRlbiIsIkdhcmRlbiIsInNwb3JlcyIsInNlbGVjdGVkU3BvcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIngiLCJNYXRoIiwiZmxvb3IiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJ1cGRhdGVQaXhlbCIsInNlbGVjdFJQbGFudCIsIndpbmRvdyIsInNlbGVjdE1QbGFudCIsInNlbGVjdEtQbGFudCIsInNlbGVjdE1GdW5ndXMiLCJzZWxlY3RNQW5pbWFsIiwiYW5pbWF0ZSIsInVwZGF0ZUdhcmRlbiIsInJlbmRlckdhcmRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2VuZXJhdGVHYXJkZW4iLCJjb21wZXRlQXJyIiwiZ2VuZXJhdGVDb21wZXRlQXJyIiwiYXJyIiwiaSIsInN1YkFyciIsImoiLCJwdXNoIiwiZW1wdHkiLCJzcG9yZU5hbWUiLCJzcG9yZSIsImdyb3d0aFBhdHRlcm4iLCJsZW5ndGgiLCJtb3ZlIiwibW92ZVgiLCJtb3ZlWSIsInBpeGVsIiwibmFtZSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwiT2JqZWN0IiwidmFsdWVzIiwiY3VyclNwb3JlIiwiY3VyclNjb3JlIiwicm9sbCIsInJhbmRvbSIsImdyb3d0aFJhdGUiLCJib2R5U2l6ZSIsInByb2Nlc3NDb21wZXRpdGlvbiIsImxpZmVTcGFuIiwiZGVhZCIsInJlcHJvZHVjdGlvbiIsImNvbXBldGVDb2xsZWN0aW9uIiwic29ydENvbXBldGl0aW9uIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJmaWxsUmVjdCIsInJQbGFudFNwb3JlIiwibVBsYW50U3BvcmUiLCJrUGxhbnRTcG9yZSIsIm1GdW5ndXNTcG9yZSIsIm1BbmltYWxTcG9yZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBSUEsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBcEI7QUFDQSxJQUFJQyxNQUFNLEdBQUdILGFBQWEsQ0FBQ0ksVUFBZCxDQUF5QixJQUF6QixDQUFiO0FBRUEsSUFBSUMsTUFBTSxHQUFHLElBQUlDLHNEQUFKLENBQVdILE1BQVgsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkJJLHFEQUE3QixDQUFiO0FBQ0EsSUFBSUMsYUFBYSxHQUFHLGFBQXBCO0FBRUFSLGFBQWEsQ0FBQ1MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBQUMsQ0FBQyxFQUFJO0FB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QUFZLEVBQVpBO0FBUFcsQ0FBZixFIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgR2FyZGVuIGZyb20gJy4vZ2FyZGVuL2dhcmRlbic7XG5pbXBvcnQgc3BvcmVzIGZyb20gJy4vc3BvcmUvc3BvcmVzJztcblxubGV0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5sZXQgY2FudmFzID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgZ2FyZGVuID0gbmV3IEdhcmRlbihjYW52YXMsIDMwMCwgMjAwLCBzcG9yZXMpO1xubGV0IHNlbGVjdGVkU3BvcmUgPSAnbVBsYW50U3BvcmUnO1xuXG5jYW52YXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgbGV0IHggPSBbTWF0aC5mbG9vcihlLm9mZnNldFggLyAyKV07XG4gICAgbGV0IHkgPSBbTWF0aC5mbG9vcihlLm9mZnNldFkgLyAyKV07XG4gICAgZ2FyZGVuLnVwZGF0ZVBpeGVsKHgsIHksIHNlbGVjdGVkU3BvcmUpO1xufSk7XG5cbmNvbnN0IHNlbGVjdFJQbGFudCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ3JQbGFudFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RSUGxhbnQgPSBzZWxlY3RSUGxhbnQ7XG5cbmNvbnN0IHNlbGVjdE1QbGFudCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ21QbGFudFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RNUGxhbnQgPSBzZWxlY3RNUGxhbnQ7XG5cbmNvbnN0IHNlbGVjdEtQbGFudCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFNwb3JlID0gJ2tQbGFudFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RLUGxhbnQgPSBzZWxlY3RLUGxhbnQ7XG5cbmNvbnN0IHNlbGVjdE1GdW5ndXMgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTcG9yZSA9ICdtRnVuZ3VzU3BvcmUnO1xufTtcblxud2luZG93LnNlbGVjdE1GdW5ndXMgPSBzZWxlY3RNRnVuZ3VzO1xuXG5jb25zdCBzZWxlY3RNQW5pbWFsID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU3BvcmUgPSAnbUFuaW1hbFNwb3JlJztcbn07XG5cbndpbmRvdy5zZWxlY3RNQW5pbWFsID0gc2VsZWN0TUFuaW1hbDtcblxubGV0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgZ2FyZGVuLnVwZGF0ZUdhcmRlbigpO1xuICAgIGdhcmRlbi5yZW5kZXJHYXJkZW4oKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn07XG5cbmFuaW1hdGUoKTsiLCJcbmNsYXNzIEdhcmRlbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBzcG9yZXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3BvcmVzID0gc3BvcmVzO1xuICAgICAgICB0aGlzLmdhcmRlbiA9IHRoaXMuZ2VuZXJhdGVHYXJkZW4oKTtcbiAgICAgICAgdGhpcy5jb21wZXRlQXJyID0gdGhpcy5nZW5lcmF0ZUNvbXBldGVBcnIoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUdhcmRlbigpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdWJBcnIucHVzaCh0aGlzLnNwb3Jlcy5lbXB0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnIucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvbXBldGVBcnIoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3ViQXJyLnB1c2goe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLnB1c2goc3ViQXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgdXBkYXRlUGl4ZWwoeCwgeSwgc3BvcmVOYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FyZGVuW3hdW3ldID0gdGhpcy5zcG9yZXNbc3BvcmVOYW1lXTtcbiAgICB9XG5cbiAgICByZXByb2R1Y3Rpb24oeCwgeSwgc3BvcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcG9yZS5ncm93dGhQYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbW92ZSA9IHNwb3JlLmdyb3d0aFBhdHRlcm5baV07XG4gICAgICAgICAgICBsZXQgbW92ZVggPSB4ICsgbW92ZVswXTtcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IHkgKyBtb3ZlWzFdO1xuICAgICAgICAgICAgaWYgKG1vdmVYID49IDAgJiYgbW92ZVggPCB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICAgICAgbW92ZVkgPj0gMCAmJiBtb3ZlWSA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBpeGVsID0gdGhpcy5jb21wZXRlQXJyW3ggKyBtb3ZlWzBdXVt5ICsgbW92ZVsxXV07XG4gICAgICAgICAgICAgICAgcGl4ZWxbc3BvcmUubmFtZV0gPSBzcG9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCB0eXBlKSB7XG4gICAgICAgIGxldCBzcG9yZXMgPSBPYmplY3QudmFsdWVzKGNvbGxlY3Rpb24pO1xuICAgICAgICBsZXQgY3VyclNwb3JlID0gbnVsbDtcbiAgICAgICAgbGV0IGN1cnJTY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BvcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm9sbCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBsZXQgZ3Jvd3RoUmF0ZSA9IHNwb3Jlc1tpXS5ncm93dGhSYXRlO1xuICAgICAgICAgICAgbGV0IGJvZHlTaXplID0gc3BvcmVzW2ldLmJvZHlTaXplO1xuICAgICAgICAgICAgaWYgKGdyb3d0aFJhdGUgPiByb2xsXG4gICAgICAgICAgICAgICAgJiYgYm9keVNpemUgLSByb2xsID4gY3VyclNjb3JlXG4gICAgICAgICAgICAgICAgJiYgc3BvcmVzW2ldLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyU3BvcmUgPSBzcG9yZXNbaV07XG4gICAgICAgICAgICAgICAgY3VyclNjb3JlID0gYm9keVNpemUgLSByb2xsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyU3BvcmUpIHRoaXMuZ2FyZGVuW3hdW3ldID0gY3VyclNwb3JlO1xuICAgIH1cblxuICAgIHNvcnRDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmdhcmRlblt4XVt5XS50eXBlID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ29tcGV0aXRpb24oeCwgeSwgY29sbGVjdGlvbiwgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYXJkZW5beF1beV0udHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ29tcGV0aXRpb24oeCwgeSwgY29sbGVjdGlvbiwgMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDb21wZXRpdGlvbih4LCB5LCBjb2xsZWN0aW9uLCAzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUdhcmRlbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhcmRlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IHRoaXMuZ2FyZGVuW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BvcmUgPSBzdWJBcnJbal07XG4gICAgICAgICAgICAgICAgbGV0IHJvbGwgPSBNYXRoLnJhbmRvbSgpIDwgc3BvcmUubGlmZVNwYW47XG4gICAgICAgICAgICAgICAgaWYgKHNwb3JlLnR5cGUgPT09IDEgJiYgIXJvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJkZW5baV1bal0gPSB0aGlzLnNwb3Jlcy5kZWFkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BvcmUudHlwZSA9PT0gMCAmJiByb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcG9yZS50eXBlID4gMCAmJiByb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwcm9kdWN0aW9uKGksIGosIHNwb3JlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmRlbltpXVtqXSA9IHRoaXMuc3BvcmVzLmVtcHR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21wZXRlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gdGhpcy5jb21wZXRlQXJyW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcGV0ZUNvbGxlY3Rpb24gPSB0aGlzLmNvbXBldGVBcnJbaV1bal07XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0Q29tcGV0aXRpb24oaSwgaiwgY29tcGV0ZUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGV0ZUFycltpXVtqXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyR2FyZGVuKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FyZGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gdGhpcy5nYXJkZW5baV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YkFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmZpbGxTdHlsZSA9IHN1YkFycltqXS5jb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5maWxsUmVjdChpICogMiwgaiAqIDIsIDIsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJkZW47IiwiY29uc3QgZW1wdHkgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMCxcbiAgICBncm93dGhQYXR0ZXJuOiBbXSxcbiAgICBib2R5U2l6ZTogMCxcbiAgICBsaWZlU3BhbjogMCxcbiAgICB0eXBlOiAtMSxcbiAgICBuYW1lOiAnZW1wdHknLFxuICAgIGNvbG9yOiAnIzFEMUQxRCdcbn07XG5cbmNvbnN0IGRlYWQgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMCxcbiAgICBncm93dGhQYXR0ZXJuOiBbXSxcbiAgICBib2R5U2l6ZTogMSxcbiAgICBsaWZlU3BhbjogMC45OTksXG4gICAgdHlwZTogMCxcbiAgICBuYW1lOiAnZGVhZCcsXG4gICAgY29sb3I6ICcjNmY0OTFkJ1xufTtcblxuY29uc3QgclBsYW50U3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC45OSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMiwgMl0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzIsIDJdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsyLCAtMl0sXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFstMiwgLTJdXG4gICAgXSxcbiAgICBib2R5U2l6ZTogMC4zLFxuICAgIGxpZmVTcGFuOiAwLjcsXG4gICAgdHlwZTogMSxcbiAgICBuYW1lOiAnclBsYW50U3BvcmUnLFxuICAgIGNvbG9yOiAnI2MwZmZhMidcbn07XG5cbmNvbnN0IG1QbGFudFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuMyxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsxLCAtMV0sXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFstMSwgLTFdXG4gICAgXSxcbiAgICBib2R5U2l6ZTogMC41LFxuICAgIGxpZmVTcGFuOiAwLjksXG4gICAgdHlwZTogMSxcbiAgICBuYW1lOiAnbVBsYW50U3BvcmUnLFxuICAgIGNvbG9yOiAnIzUyRkYwMCdcbn07XG5cbmNvbnN0IGtQbGFudFNwb3JlID0ge1xuICAgIGdyb3d0aFJhdGU6IDAuMSxcbiAgICBncm93dGhQYXR0ZXJuOiBbXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMCwgLTFdXG4gICAgXSxcbiAgICBib2R5U2l6ZTogMC45LFxuICAgIGxpZmVTcGFuOiAwLjk5LFxuICAgIHR5cGU6IDEsXG4gICAgbmFtZTogJ2tQbGFudFNwb3JlJyxcbiAgICBjb2xvcjogJyMyZjkxMDAnXG59O1xuXG5jb25zdCBtRnVuZ3VzU3BvcmUgPSB7XG4gICAgZ3Jvd3RoUmF0ZTogMC4xLFxuICAgIGdyb3d0aFBhdHRlcm46IFtcbiAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgWy0xLCAxXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIC0xXSxcbiAgICAgICAgWzAsIC0xXSxcbiAgICAgICAgWy0xLCAtMV1cbiAgICBdLFxuICAgIGJvZHlTaXplOiAwLjUsXG4gICAgbGlmZVNwYW46IDAuOSxcbiAgICB0eXBlOiAyLFxuICAgIG5hbWU6ICdtRnVuZ3VzU3BvcmUnLFxuICAgIGNvbG9yOiAnIzAwZmNmZidcbn07XG5cbmNvbnN0IG1BbmltYWxTcG9yZSA9IHtcbiAgICBncm93dGhSYXRlOiAwLjcsXG4gICAgZ3Jvd3RoUGF0dGVybjogW1xuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbLTEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbLTEsIC0xXVxuICAgIF0sXG4gICAgYm9keVNpemU6IDAuNSxcbiAgICBsaWZlU3BhbjogMC45LFxuICAgIHR5cGU6IDMsXG4gICAgbmFtZTogJ21BbmltYWxTcG9yZScsXG4gICAgY29sb3I6ICcjZmYyNDAwJ1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZW1wdHksXG4gICAgZGVhZCxcbiAgICByUGxhbnRTcG9yZSxcbiAgICBtUGxhbnRTcG9yZSxcbiAgICBrUGxhbnRTcG9yZSxcbiAgICBtRnVuZ3VzU3BvcmUsXG4gICAgbUFuaW1hbFNwb3JlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=