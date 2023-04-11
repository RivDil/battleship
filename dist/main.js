/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });

const createHeader = (() => {
    const content = document.getElementById('content')
    const text = document.createElement('h2');
    text.innerHTML = 'Battleships'
    text.classList.add = 'main-title'
    content.appendChild(text)
})();


/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain)
/* harmony export */ });
const createMain = (() => {
    const content = document.getElementById('content')
    const gameboards = document.createElement('div')
    const playerGame = document.createElement('div');
    const computerGame = document.createElement('div')
    gameboards.appendChild(playerGame);
    gameboards.appendChild(computerGame);
    content.appendChild(gameboards)
})();


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ./ship */ "./src/ship.js")

function gameboard(){
    const board = Array(10).fill(0).map(() => Array(10).fill(0));
    const ships = [];
    const miss = [];
    for (let i=1;i<=5;i++){
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let newShip = ship(i,[row,col])
        let isHorizontal = Math.random() < 0.5;
        while (!validCoordinates(newShip, row, col, isHorizontal)) {
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
            newShip = ship(i, [row, col]);
          }
        ships.push(newShip);
    }
    function validCoordinates(ship, row, col, isHorizontal) {
        if (isHorizontal) {
            if (col + ship.length > 10) {
                return false;
            }
            for (let i = 0; i < ship.length; i++) {
                if (board[row][col + i] !== 0) {
                    return false;
                }
                else{
                    board[row][col + i] = ship;
                }
            }
        }else{
            if (row + ship.length > 10) {
                return false;
            }
            for (let i = 0; i < ship.length; i++) {
                if (board[row + i][col] !== 0) {
                    return false;
                }
                else{
                    board[row + i][col] = ship;
                }
            }
        }
        return true
    }
    function receiveAttack(row,col){
        let ship = board[row][col];
        if (ship !== 0) {
            ship.hit();
            if(ships.every(i => i.isSunk())){
                return 'You win'
            }else{return 'hit';}
        } else {
            miss.push([row,col])
            return 'miss';
        }
    }
    return {receiveAttack, board, ships, validCoordinates,miss}
}
 

module.exports = gameboard;

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ../src/gameboard */ "./src/gameboard.js");

function player(){
    const playerGame = gameboard();
    const cpuGame = gameboard();
    
    function randomAttack(player){
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        player.receiveAttack(row,col)
    }
    while(!playerGame.ships.every(i=>i.isSunk()) && !cpuGame.ships.every(i=>i.isSunk())){
        randomAttack(playerGame);
        randomAttack(cpuGame);
    }
    if (playerGame.ships.every(i=>i.isSunk())) {
        console.log("CPU wins!");
      } else {
        console.log("Player wins!");
      }

    return {randomAttack}
}

module.exports = player;

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {


function ship(length, coordinates){
    const ship = {
        length: length,
        coordinates: coordinates,
        hits: 0,
        hit: function(){
            this.hits++
        },
        isSunk: function(){
            return this.length <= this.hits
        }
    };
    return ship
}

module.exports = ship;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main */ "./components/main.js");


const player = __webpack_require__(/*! ./player */ "./src/player.js");

(0,_components_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)()
;(0,_components_main__WEBPACK_IMPORTED_MODULE_1__.createMain)()
player()

console.log('hey')
})();

/******/ })()
;
//# sourceMappingURL=main.js.map