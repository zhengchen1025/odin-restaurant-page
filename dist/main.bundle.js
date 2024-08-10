"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadAbout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadAbout */ "./src/loadAbout.js");
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");





document.addEventListener("DOMContentLoaded", () => {
  (0,_loadPage__WEBPACK_IMPORTED_MODULE_3__.loadPage)();

  const buttons = document.querySelectorAll(".btns");
  console.log(buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "Home":
          (0,_loadHome__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
          break;
        case "Menu":
          (0,_loadMenu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();
          break;
        case "About":
          (0,_loadAbout__WEBPACK_IMPORTED_MODULE_0__.loadAbout)();
          break;
        default:
          console.warn("unknown btn");
      }
    });
  });
});


/***/ }),

/***/ "./src/loadAbout.js":
/*!**************************!*\
  !*** ./src/loadAbout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAbout: () => (/* binding */ loadAbout)
/* harmony export */ });
function loadAbout() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h1>About</h1><p>About us information.</p>';
    }

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h1>Home</h1><p>Welcome to the Home page!</p>';
    }

    

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h1>Menu</h1><p>Here is our menu!</p>';
    }

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
// set the html template with header>nav>3btns and an empty div#content

function loadPage() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const buttons = ["Home", "Menu", "About"];

  buttons.forEach((buttonName) => {
    const button = document.createElement("button");
    button.id = buttonName;
    button.classList.add('btns');
    button.textContent = buttonName;
    nav.appendChild(button);
  });

  header.appendChild(nav);

  document.body.appendChild(header);

  const contentDiv = document.createElement("div");
  contentDiv.id = "content";

  document.body.appendChild(contentDiv);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUNBO0FBQ0E7O0FBRXRDO0FBQ0EsRUFBRSxtREFBUTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtREFBUTtBQUNsQjtBQUNBO0FBQ0EsVUFBVSxtREFBUTtBQUNsQjtBQUNBO0FBQ0EsVUFBVSxxREFBUztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJNO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ0xPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZEFib3V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRNZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuL2xvYWRBYm91dFwiO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9sb2FkSG9tZVwiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9sb2FkTWVudVwiO1xuaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tIFwiLi9sb2FkUGFnZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxvYWRQYWdlKCk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuc1wiKTtcbiAgY29uc29sZS5sb2coYnV0dG9ucyk7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN3aXRjaCAoYnV0dG9uLmlkKSB7XG4gICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQWJvdXRcIjpcbiAgICAgICAgICBsb2FkQWJvdXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJ1bmtub3duIGJ0blwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnPGgxPkFib3V0PC9oMT48cD5BYm91dCB1cyBpbmZvcm1hdGlvbi48L3A+JztcbiAgICB9IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJzxoMT5Ib21lPC9oMT48cD5XZWxjb21lIHRvIHRoZSBIb21lIHBhZ2UhPC9wPic7XG4gICAgfVxuXG4gICAgIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJzxoMT5NZW51PC9oMT48cD5IZXJlIGlzIG91ciBtZW51ITwvcD4nO1xuICAgIH0iLCIvLyBzZXQgdGhlIGh0bWwgdGVtcGxhdGUgd2l0aCBoZWFkZXI+bmF2PjNidG5zIGFuZCBhbiBlbXB0eSBkaXYjY29udGVudFxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IGJ1dHRvbnMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkFib3V0XCJdO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uTmFtZSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlkID0gYnV0dG9uTmFtZTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRucycpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH0pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudERpdi5pZCA9IFwiY29udGVudFwiO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=