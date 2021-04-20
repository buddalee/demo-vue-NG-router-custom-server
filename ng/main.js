(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_story_story_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/story/story.component */ "./src/app/components/story/story.component.ts");
/* harmony import */ var _components_traffic_traffic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/traffic/traffic.component */ "./src/app/components/traffic/traffic.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_bat_bat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bat/bat.component */ "./src/app/components/bat/bat.component.ts");
/* harmony import */ var _components_view_point_view_point_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/view-point/view-point.component */ "./src/app/components/view-point/view-point.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'stories', component: _components_story_story_component__WEBPACK_IMPORTED_MODULE_3__["StoryComponent"] },
    { path: 'traffic', component: _components_traffic_traffic_component__WEBPACK_IMPORTED_MODULE_4__["TrafficComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'bat', component: _components_bat_bat_component__WEBPACK_IMPORTED_MODULE_6__["BatComponent"] },
    { path: 'viewpoint', component: _components_view_point_view_point_component__WEBPACK_IMPORTED_MODULE_7__["ViewPointComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".l-nav {\n  height: 128px;\n}\n.nav {\n  align-items: center;\n}\n.navbar.nav-toggler {\n  margin: 0px 40px 0px 30px ;\n  font-size: 20px;\n  color: #8c0e03;\n  padding: 0;\n  cursor: pointer;\n}\n.mat-drawer {\n  width: 65%;\n}\n.sidenav-container {\n  padding: 50px 0;\n  height: 100%;\n}\n.header-logo {\n  display: inline-block;\n  width: 150px;\n  height: 60px;\n}\n.logo-icon {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/logo.svg\");\n  background-position: left center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.nav-logo {\n  width: 140px;\n  height: 39px;\n  display: inline-block;\n}\n.sidenav-list {\n  list-style: none;\n  padding: 0;\n}\n.sidenav-list > li {\n  padding: 15px;\n  text-indent: 15%;\n}\n.nav-list--en {\n  color: #b5b5b5;\n  font-size: 12px;\n}\n.nav-list--en:hover {\n  color: #a0a0a0;\n}\n.nav-list--item {\n  color: #666;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer;\n}\n.nav-list--item:focus {\n  outline: none;\n}\n.nav-list--item:hover {\n  color: #000;\n}\n.nav-list--item.active,\n.nav-list--item.active .nav-list--en {\n  color: #8c0e03;\n}\n.footer {\n  height: 200px;\n  background-color: #343534;\n  color: #fff;\n  font-size: 14px;\n  padding: 90px 0px 0px 80px;\n}\n@media (min-width: 768px) {\n  .header-logo {\n    width: 250px;\n    height: 72px;\n  }\n  .sidenav-list > li {\n    text-indent: 22%;\n  }\n  .navbar.nav-toggler {\n    margin: 0px 0px 0px 50px ;\n    position: absolute;\n  }\n  .nav-logo {\n    margin: 0 auto;\n  }\n}\n@media(min-width: 1440px) {\n\n  .mat-drawer {\n    width: 270px;\n    background-color: #f9f9f9;\n  }\n  .nav.l-nav {\n    display: none;\n  }\n  .logo-icon {\n    background-image: url(\"/assets/1440-logo.svg\");\n  }\n  .header-logo {\n    width: 140px;\n    height: 149px;\n  }\n  .sidenav-list > li {\n    text-indent: 26%;\n  }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container (window:resize)=\"onResize($event, sideNav)\" >\n  <mat-sidenav #sideNav opened={{isOpend}} mode={{sideMode}}\n    style=\"position: fixed\"\n  >\n    <div class=\"sidenav-container\">\n      <div style=\"display: flex;justify-content: center\">\n        <div class=\"header-logo\">\n          <span class=\"logo-icon\">\n            <h1>幸福銅鏡</h1>\n          </span>\n        </div>        \n      </div>\n      <div style=\"margin-top: 74px\">\n        <ul class=\"sidenav-list\">\n          <li class=\"nav-list--item\"  (click)=\"chooseItem(1, sideNav)\"\n            [class.active]=\"activeNumber === 1\"\n            [routerLink]=\"['/']\"\n          > \n            首頁\n            <span class=\"nav-list--en\">Home</span>\n          </li>\n          <li class=\"nav-list--item\"  (click)=\"chooseItem(2, sideNav)\"\n            [class.active]=\"activeNumber === 2\"\n            [routerLink]=\"['/about']\"\n          >\n            關於\n            <span class=\"nav-list--en\">About</span>\n          </li>\n          <li class=\"nav-list--item\"  (click)=\"chooseItem(3, sideNav)\"\n            [class.active]=\"activeNumber === 3\" [routerLink]=\"['/stories']\"\n          >\n            故事\n            <span class=\"nav-list--en\">Stories</span>\n          </li>\n          <li class=\"nav-list--item\" (click)=\"chooseItem(4, sideNav)\"\n            [class.active]=\"activeNumber === 4\"\n            [routerLink]=\"['/viewpoint']\"\n          >\n            景點\n            <span class=\"nav-list--en\">Viewpoint</span>\n          </li>    \n          <li class=\"nav-list--item\"  (click)=\"chooseItem(6, sideNav)\"\n            [class.active]=\"activeNumber === 6\"\n            [routerLink]=\"['/traffic']\"\n          >\n            交通\n            <span class=\"nav-list--en\">Acces</span>\n          </li>          \n          <li class=\"nav-list--item\"  (click)=\"chooseItem(7, sideNav)\"\n            [class.active]=\"activeNumber === 7\"\n            [routerLink]=\"['/contact']\"\n          >\n            預約\n            <span class=\"nav-list--en\">Reservation</span>\n          </li> \n        </ul>       \n      </div>\n\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <nav class=\"nav l-nav\">\n      <div class=\"navbar nav-toggler\" (click)=\"sideNav.toggle()\">\n        <span>\n          <i class=\"fa fa-bars fa-1x\"></i>\n        </span>\n      </div>\n      <div class=\"nav-logo\">\n        <span class=\"logo-icon\">\n          <h1>幸福銅鏡</h1>\n        </span>        \n      </div>\n    </nav>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer\">\n      © 幸福銅鏡\n    </footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.sideMode = 'over';
        this.isOpend = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.innerWidth >= 1440) {
            this.sideMode = 'side';
            this.isOpend = true;
        }
        var pathname = location.pathname;
        if (pathname.indexOf('stories') > -1) {
            this.activeNumber = 3;
        }
        else if (pathname.indexOf('home') > -1) {
            this.activeNumber = 1;
        }
        else if (pathname.indexOf('traffic') > -1) {
            this.activeNumber = 6;
        }
        else if (pathname.indexOf('contact') > -1) {
            this.activeNumber = 7;
        }
        else if (pathname.indexOf('bat') > -1) {
            this.activeNumber = null;
        }
        else if (pathname.indexOf('viewpoint') > -1) {
            this.activeNumber = 4;
        }
        else if (pathname.indexOf('about') > -1) {
            this.activeNumber = 2;
        }
        else {
            this.activeNumber = 1;
        }
    };
    AppComponent.prototype.onResize = function (event, sideNav) {
        if (event.target.innerWidth < 1440) {
            this.sideMode = 'over';
            this.isOpend = false;
        }
        else {
            this.sideMode = 'side';
            this.isOpend = true;
        }
    };
    AppComponent.prototype.chooseItem = function (_num, sideNav) {
        this.activeNumber = _num;
        if (window.innerWidth < 1440) {
            sideNav.toggle();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-material/shared-material.module */ "./src/app/shared-material/shared-material.module.ts");
/* harmony import */ var _components_story_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/story/story.component */ "./src/app/components/story/story.component.ts");
/* harmony import */ var _components_traffic_traffic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/traffic/traffic.component */ "./src/app/components/traffic/traffic.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_bat_bat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bat/bat.component */ "./src/app/components/bat/bat.component.ts");
/* harmony import */ var _components_view_point_view_point_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-point/view-point.component */ "./src/app/components/view-point/view-point.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_story_story_component__WEBPACK_IMPORTED_MODULE_7__["StoryComponent"],
                _components_traffic_traffic_component__WEBPACK_IMPORTED_MODULE_8__["TrafficComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _components_bat_bat_component__WEBPACK_IMPORTED_MODULE_10__["BatComponent"],
                _components_view_point_view_point_component__WEBPACK_IMPORTED_MODULE_11__["ViewPointComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-header-photo {\n  width: 100%;\n  height: 350px;\n  position: relative;\n  background-image: url('/assets/about_banner.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/* to fixed */\n\n.about-container {\n  background-image: url('/assets/subtle_grunge_@2X.png');\n  padding: 30px 30px 100px;\n}\n\n.photo-title {\n  margin-top: 20px;\n  margin-bottom: 27px;\n}\n\n.about-descrption {\n  padding: 30px;\n  background-color: rgba(140, 14, 3, 0.2);\n  font-size: 14px;\n  color: #333;\n}\n\n.m-description {\n  margin-top: 50px;\n}\n\n.m-description + .m-description  {\n  margin-top: 50px;\n}\n\n.about-footer-photo {\n  width: 100%;\n  height: 250px;\n  position: relative;\n  background-image: url('/assets/about_footer.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.m-description--label {\n  margin-bottom: 20px;\n}\n\n@media(min-width: 768px) {\n  .about-descrption {\n    padding: 50px 55px 43px 52px;\n  }\n  .photo-title {\n    margin-bottom: 50px;\n  }\n  .about-container {\n    padding: 30px 50px 100px;\n  }\n\n}\n\n@media(min-width: 1440px) {\n  .m-description {\n    display: inline-block;\n    width: calc((100% - 40px) / 2);\n    min-height: 185px;\n  }\n  .m-description + .m-description {\n    margin-left: 40px;\n    float: right;\n  }\n\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 100vh\">\n  <div class=\"about-header-photo\"></div>\n  <div class=\"about-container\">\n    <div class=\"photo-title\">\n      <div class=\"line\"></div>\n      <h2 class=\"photo-title--text\">\n        銅鏡社區\n      </h2>\n      <div class=\"line\"></div>\n    </div>\n    <div class=\"about-descrption\">\n      位在三灣鄉北部的銅鏡村內，村落中央有一處高起的山，\n      站在山上向四周望，這座高起的山極似銅鑼中心凸起的部分，\n      四周就像銅鑼之圓圈，故名「銅鑼圈」，又極似古人所用之銅鏡，\n      取名為「銅鏡村」。在改善前，同樣有景觀風貌日漸喪失的困境。\n      但在政府推動農村社區公共設施改善計畫下，進行聚落雜亂空間綠美化、\n      社區道路排水改善、道路沿介面綠美化、破舊路面改善、農村環境空間營造等農村再造工程，\n      使社區脫胎換骨，美輪美奐。\n    </div>\n    <div class=\"m-description\">\n      <label class=\"m-description--label\">農村再造</label>\n      <div style=\"font-size: 14px\">\n        農村再生不僅凝聚人心，更能打造農村社區新特色，甚至讓地方發展出不一樣的商機，\n        苗栗縣三灣鄉銅鏡社區最近就利用社區裡閒置的伙房，打造成社區基地，\n        再將幾個空房間設計成主題式體驗民宿，民眾只要向社區協會預約團體行程，\n        就能夠體驗完整的三灣風情與伙房生活。\n      </div>\n    </div> \n    <div class=\"m-description\">\n      <label class=\"m-description--label\">社區基地-新安堂</label>\n      <div style=\"font-size: 14px\">\n        木製的窗戶、懷舊的梳妝台，再加上花布大棉被，整個房間彷彿仍停留在農業時期，\n        近60年的新安堂，本來只是當地居民的老房子，屋主搬走後就未再使用，\n        未來提供給社區協會之後，協會也將規畫包套行程，\n        團體只要預約，就能參與2天1夜的三灣體驗小旅行。\n      </div>\n    </div> \n  </div>\n  <div class=\"about-footer-photo\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/bat/bat.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/bat/bat.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bat-loading {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: calc(100vh - 200px);\n  background-color: #fff;\n}"

/***/ }),

/***/ "./src/app/components/bat/bat.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/bat/bat.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bat-loading\">\n  <img src=\"/assets/bat.gif\" style=\"height: 30%\" alt=\"蝙蝠洞\">\n</div>"

/***/ }),

/***/ "./src/app/components/bat/bat.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/bat/bat.component.ts ***!
  \*************************************************/
/*! exports provided: BatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatComponent", function() { return BatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BatComponent = /** @class */ (function () {
    function BatComponent() {
    }
    BatComponent.prototype.ngOnInit = function () {
    };
    BatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bat',
            template: __webpack_require__(/*! ./bat.component.html */ "./src/app/components/bat/bat.component.html"),
            styles: [__webpack_require__(/*! ./bat.component.css */ "./src/app/components/bat/bat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BatComponent);
    return BatComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-header-title {\n  border: solid 1px #ffffff;\n  padding: 20px 22px;\n  text-align: center;\n  color: #fff;\n  margin: 0px auto;\n  width: 240px;\n  background-color: rgba(255, 255, 255, 0.1);\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/* to fixed */\n.contact-container {\n  background-image: url('/assets/subtle_grunge_@2X.png');\n  padding: 32px 30px 100px;\n}\n.contact-container .photo-title {\n  margin-top: 0px;\n}\n.contact-header-photo {\n  width: 100%;\n  height: 350px;\n  position: relative;\n  background-image: url('/assets/photo/resrvation_banner.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.contact-container .m-description {\n  font-size: 14px;\n}\n.contact-container .m-description--label {\n  font-size: 18px;\n}\n.contact-input {\n  padding: 50px 31px 20px;\n  width: 100%;\n  height: 90px;\n  border: 1px solid #ccc;\n}\n.contact-input:focus {\n  outline: 1px solid #8c0e03;\n  border: none;\n}\n.contact-textarea {\n  padding: 50px 31px 5px;\n  width: 100%;\n  height: 120px;\n  border: 1px solid #ccc;\n  resize: none;\n}\n.contact-textarea:focus {\n  outline: 1px solid #8c0e03;\n  border: none;\n}\n.contact__info--item {\n  position: relative;\n}\n.contact__info--itemHead {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  color: #333;\n  z-index: 2;\n}\n.contact-btn {\n  width: 100%;\n  height: 80px;\n  background-color: #8c0e03;\n  color: #fff;\n  font-size: 18px;\n}\n.contact-btn:hover {\n  opacity: .8;\n  cursor: pointer;\n}\n.contact-btn:focus {\n  outline: 1px solid #8c0e03;\n}\n@media(min-width: 768px) {\n  .contact-container {\n    padding: 50px 50px 100px;\n  }\n  .contact-header-title {\n    padding: 11px 27px;\n  }\n}\n@media(min-width: 1440px) {\n  .contact-header-title {\n    width: 281px;\n    padding: 11px 49px;\n  }\n  .contact-container {\n    padding: 50px 135px 100px;\n  }\n  .contact__info--item {\n    width: 50%;\n    display: inline-block;\n  }\n  .contact__info--item.fullTA {\n    width: 100%;\n  }\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 100vh\">\n  <div class=\"contact-header-photo\">\n    <div class=\"contact-header-title\">一起來體驗農村漫遊</div>\n  </div>\n  <div class=\"contact-container\">\n    <div class=\"photo-title\">\n      <div class=\"line\"></div>\n      <h2 class=\"photo-title--text\">\n        活動訊息\n      </h2>\n      <div class=\"line\"></div>\n    </div>\n    <div class=\"m-description\">\n      <label class=\"m-description--label\">活動亮點</label>\n      <div>\n        見證「農村再生」的模範，社區學習的標竿。\n        <br/>\n        農村漫遊：紅磚古厝、俚語巷弄、新安堂、200年關老爺廟。\n        <br/>        \n        客家美食DIY製作：蒸桔發糕、橘餅和橘汁茶。\n      </div>\n    </div>\n    <div class=\"m-description\">\n      <label class=\"m-description--label\">行程安排\n        <span style=\"font-size:14px\">（社區導覽散步 2小時；客家美食DIY 1小時）</span>\n      </label>\n      <div style=\"font-size: 14px\">\n          梨園18行柱→俚語巷道→竹藝轉角公園→關帝廟紅磚步道→紅磚厝群→新安堂→新安堂工坊（客家傳統技藝農村體驗活動）→好漢坡→月眉溪公園\n      </div>\n    </div>\n    <div class=\"m-description\">\n      <label class=\"m-description--label\">活動費用</label>\n      <div style=\"font-size: 14px\">\n          3~5人 : 每人1000元  /  6~10人 : 每人800元\n      </div>\n    </div> \n    <div class=\"m-description\">\n      <label class=\"m-description--label\">集合地點</label>\n      <div style=\"font-size: 14px\">\n        柚園停車場（銅鏡村1鄰9-11號前，近山灣咖啡）\n      </div>\n    </div> \n    <div class=\"photo-title\" style=\"margin-top:50px\">\n      <div class=\"line\"></div>\n      <h2 class=\"photo-title--text\">\n          立即預約\n      </h2>\n      <div class=\"line\"></div>\n    </div>\n    <div class=\"contact__info--item\">\n      <span class=\"contact__info--itemHead\">姓名</span>\n      <input type=\"text\" class=\"contact-input\" placeholder=\"古某某\"/>\n    </div>\n    <div class=\"contact__info--item\">\n      <span class=\"contact__info--itemHead\">人數</span>\n      <input type=\"number\" class=\"contact-input\"/>\n    </div>\n    <div class=\"contact__info--item\">\n      <span class=\"contact__info--itemHead\">電話</span>\n      <input type=\"tel\" class=\"contact-input\"/>\n    </div>\n    <div class=\"contact__info--item\">\n      <span class=\"contact__info--itemHead\">信箱</span>\n      <input type=\"email\" class=\"contact-input\"/>\n    </div>\n    <div class=\"contact__info--item fullTA\">\n      <span class=\"contact__info--itemHead\">備註</span>\n      <textarea class=\"contact-textarea\"></textarea>\n    </div>\n    <div style=\"margin-top: 50px\">\n      <button class=\"contact-btn\">送出</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/fakeData.ts":
/*!*********************************************!*\
  !*** ./src/app/components/home/fakeData.ts ***!
  \*********************************************/
/*! exports provided: wonderReviews, pttReviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonderReviews", function() { return wonderReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pttReviews", function() { return pttReviews; });
var wonderReviews = [
    {
        image: "assets/photo/food1.jpeg",
        description: '客家老味道，橘餅饅頭',
        time: '2017.09.20'
    },
    {
        image: "assets/photo/food2.jpg",
        description: '客家老味道，麵',
        time: '2018.05.16'
    }
];
var pttReviews = [
    {
        image: "assets/people-01.svg",
        description: '空氣新鮮，街道很乾淨 希望下次還有機會造訪'
    },
    {
        image: "assets/people-02.svg",
        description: '超好吃～～'
    },
    {
        image: "assets/people-03.svg",
        description: '下次要大一家人去吃'
    }
];


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container {\n  padding-bottom: 100px;\n  background-color: #fff;\n}\n.carousel-indicators {\n  bottom: -35px;\n}\n.carousel-indicators li {\n  border: 1px solid #8c0e03;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.carousel-indicators .active {\n  background-color: #8c0e03;\n}\n.wonderfulReview.carousel-inner {\n  width: 228px;\n  height: auto;\n  margin: 0 auto;\n}\n.photo-angle {\n  color: #999;\n  font-size: 40px;\n}\n.photo-description {\n  min-width: 228px;\n  text-align: center;\n  padding: 13px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 14px auto 15px;\n  border: solid 1px rgba(188, 47, 54, .5);\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  color: #333333;\n}\n.photo-time {\n  margin-left: calc((100% - 228px) /2);\n  font-size: 14px;\n}\n.userReview {\n  position: relative;\n  width: 228px;\n  height: 110px;\n  background-color: #f9f9f9;\n  padding: 35px 40px;\n  font-size: 14px;\n  font-weight: normal;\n  color: #666666;\n  display: inline-block;\n  margin: 0 auto;\n}\n.pptReview.carousel-inner {\n  max-width: 100%;\n  width: 81px;\n  height: auto;\n  margin: 25px auto 0px;\n}\n.quote {\n  color: #bc2f36;\n  position: absolute;\n  top: 15px;\n  right: 20px;\n}\n.carousel-item,\n.carousel-item img{\n  height: 100%;\n}\n.home-header-title {\n  padding: 0px 10px;\n  text-align: center;\n  color: #fff;\n  margin: 0px auto;\n  min-width: 297px;\n  width: 100%;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  line-height: 2.86;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5)\n}\n.carousel-item.active {\n  position: relative;\n}\n@media(min-width: 768px) {\n  .home-header-title {\n    font-size: 18px;\n    line-height: 2.22;\n  }\n  .carousel-inner {\n    height: 458px;\n  }\n  .wonderfulReview.carousel-inner {\n    width: 500px;\n  }\n  .photo-description {\n    font-size: 20px;\n    width: 500px;\n    padding: 8px 0px;\n  }\n  .photo-time {\n    margin-left: calc((100% - 500px) /2);\n  }\n  .userReview {\n    width: 330px;\n    height: 160px;\n    padding: 54px 95px;\n  }\n  .pptReview.carousel-inner {\n    width: 117.5px;\n  }\n  .quote {\n    top: 20px;\n    right: 50px;\n  }\n}\n@media(min-width: 1440px) {\n  .carousel-inner {\n    height: 640px;\n  }\n  .home-container {\n    padding: 50px 50px 186px;\n  }\n\n  .photo-recall {\n    display: inline-block;\n  }\n  .wonderfulReview.carousel-inner {\n    width: 330px;\n    height: 217px;\n  }\n  .photo-description {\n    margin: 25px 0 0 0;\n    text-align: center;\n    width: 330px;\n    height: 45px;\n  }\n  .photo-time {\n    margin: 13px 0 0 0;\n  }\n  .userReview {\n    width: 330px;\n    height: 160px;\n    padding: 54px 95px;\n  }\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\" (window:resize)=\"onResize($event)\">\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <div class=\"home-header-title\">\n          紅磚巷弄帶著有趣的客家諺語，<br>\n          讓你走在巷弄內彷彿置身在充滿客家文化故事與生態的幽徑中。\n        </div>\n        <img class=\"d-block w-100\" src=\"assets/photo/home-header1.png\" alt=\"三灣鄉銅鏡社區紅磚巷\">\n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"home-header-title\">\n          紅磚巷弄帶著有趣的客家諺語，<br>\n          讓你走在巷弄內彷彿置身在充滿客家文化故事與生態的幽徑中。\n        </div>\n        <img class=\"d-block w-100\" src=\"assets/photo/home-header2.png\" alt=\"三灣鄉銅鏡社區紅磚巷\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"photo-title\">\n    <div class=\"line\"></div>\n    <h2 class=\"photo-title--text\">\n      精彩回顧\n    </h2>\n    <div class=\"line\"></div>\n  </div>\n  <ng-container *ngIf=\"!isScale\">\n    <div id=\"carouselExampleControls\" class=\"carousel slide\">\n      <div class=\"carousel-inner wonderfulReview\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src={{reviewDatas[reviewIdx].image}} alt=\"橘餅饅頭\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\"\n        (click)=\"preReview()\"\n      >\n        <i class=\"fas fa-angle-left photo-angle\"></i>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\"\n        (click)=\"nextReview()\"\n      >\n        <i class=\"fas fa-angle-right photo-angle\"></i>\n      </a>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"photo-description\">\n        {{ reviewDatas[reviewIdx].description}}\n      </div>\n    </div>\n    <div class=\"photo-time\">\n        {{ reviewDatas[reviewIdx].time }}\n      </div>\n  </ng-container>\n  <div *ngIf=\"isScale\" style=\"display: flex;justify-content: space-around;\">\n    <div class=\"photo-recall\" *ngFor=\"let item of reviewDatas\">\n      <div id=\"carouselExampleControls\" class=\"carousel slide\">\n        <div class=\"carousel-inner wonderfulReview\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src={{item.image}} alt=\"橘餅饅頭\">\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"photo-description\">\n            {{ item.description}}\n          </div>\n        </div>\n        <div class=\"photo-time\">\n          {{ item.time }}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"photo-title\" style=\"margin-top: 100px\">\n    <div class=\"line\"></div>\n    <h2 class=\"photo-title--text\">\n      鄉民回憶\n    </h2>\n    <div class=\"line\"></div>\n  </div>\n  <div *ngIf=\"isScale\" style=\"display:flex;justify-content: space-around;\">\n    <ng-container *ngFor=\"let ptt of pttDatas\">\n      <div>\n        <div class=\"d-flex\" style=\"justify-content: center;\">\n          <div class=\"userReview\">\n            <span class=\"quote\">\n              <i class=\"fas fa-quote-right\"></i>\n            </span> \n            {{ ptt.description }}\n          </div>\n        </div>\n        <div id=\"carouselExampleControls1\" class=\"carousel slide\">\n          <div class=\"carousel-inner pptReview\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src={{ptt.image}} alt=\"銅鏡社區\">\n            </div>\n          </div>\n        </div>          \n      </div>\n        \n    </ng-container>\n  </div>\n  <ng-container *ngIf=\"!isScale\">\n    <div class=\"d-flex\" style=\"justify-content: center;\">\n      <div class=\"userReview\">\n        <span class=\"quote\">\n          <i class=\"fas fa-quote-right\"></i>\n        </span> \n        {{ pttDatas[pttIdx].description }}\n      </div>\n    </div>\n    <div id=\"carouselExampleControls1\" class=\"carousel slide\">\n      <div class=\"carousel-inner pptReview\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src={{pttDatas[pttIdx].image}} alt=\"銅鏡社區\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"prev\"\n        (click)=\"prePtt()\"\n      >\n        <i class=\"fas fa-angle-left photo-angle\"></i>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"next\"\n        (click)=\"nextPtt()\"\n      >\n        <i class=\"fas fa-angle-right photo-angle\"></i>\n      </a>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fakeData */ "./src/app/components/home/fakeData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.reviewDatas = _fakeData__WEBPACK_IMPORTED_MODULE_1__["wonderReviews"];
        this.isScale = false;
        this.pttDatas = _fakeData__WEBPACK_IMPORTED_MODULE_1__["pttReviews"];
        this.pttIdx = 0;
        this.reviewIdx = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (window.innerWidth >= 1440) {
            this.isScale = true;
        }
    };
    HomeComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1440) {
            this.isScale = false;
        }
        else {
            this.isScale = true;
        }
    };
    HomeComponent.prototype.prePtt = function () {
        if (this.pttIdx - 1 > -1) {
            this.pttIdx--;
        }
        else {
            this.pttIdx = this.pttDatas.length - 1;
        }
    };
    HomeComponent.prototype.nextPtt = function () {
        if (this.pttIdx + 1 !== this.pttDatas.length) {
            this.pttIdx++;
        }
        else {
            this.pttIdx = 0;
        }
    };
    HomeComponent.prototype.preReview = function () {
        if (this.reviewIdx - 1 > -1) {
            this.reviewIdx--;
        }
        else {
            this.reviewIdx = this.reviewDatas.length - 1;
        }
    };
    HomeComponent.prototype.nextReview = function () {
        if (this.reviewIdx + 1 !== this.reviewDatas.length) {
            this.reviewIdx++;
        }
        else {
            this.reviewIdx = 0;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/story/story.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/story/story.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".story-header-photo {\n  width: 100%;\n  height: 350px;\n  position: relative;\n  background-image: url('/assets/photo/story-header.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.story-header-photo img {\n  width: 100%;\n  height: 100%;\n}\n.story-header-title {\n  border: solid 1px #ffffff;\n  padding: 9px 35px;\n  text-align: center;\n  color: #fff;\n  margin: 0px auto;\n  width: 257px;\n  background-color: rgba(255, 255, 255, 0.1);\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.storyPhoto-container {\n  margin: 0 auto 100px;\n  width: 240px;\n}\n.photo {\n  display: inline-block;\n  position: relative;\n  height: 145px;\n}\n.photo img {\n  width: 100%;\n  height: 100%;\n}\n/* .bb-item img {\n  width: 100%;\n  height: 100%;  \n} */\n.photo + .photo {\n  margin-top: 30px;\n}\n.photo-name {\n  position: absolute;\n  bottom: 15px;\n  left: 25px;\n  color: #fff;\n}\n.photo-mask {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 100;\n}\n.photo-mask:hover {\n  background-image: url('/assets/book.svg');\n  background-color: rgba(51, 51, 51, 0.6);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.photo-mask div {\n  width:50%;\n  height:100%;\n  display:inline-block;\n}\n.photo-name.hidden {\n  visibility: hidden;\n}\n.bb-bookblock {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .photo {\n    width: 314px;\n    height: 190px;\n  }\n  .storyPhoto-container {\n    width: 668px;\n    padding: 0;\n  }\n  .storyPhoto-container .photo:nth-child(2) {\n    margin-top: 0px;\n  }\n  .photo + .photo {\n    margin-top: 40px;\n  }\n  .photo:nth-child(2n) {\n    margin-left: 40px;\n  }\n  .story-header-title {\n    width: 382px;\n    padding: 11px 50px;\n  }\n}\n@media(min-width: 1440px) {\n  .storyPhoto-container {\n    width: 1070px;\n  }\n  .photo {\n    width: 515px;\n    height: 310px;\n  }\n}"

/***/ }),

/***/ "./src/app/components/story/story.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/story/story.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height:100vh\">\n  <div class=\"story-header-photo\">\n      <div class=\"story-header-title\">一起坐下來、喝杯茶、聊聊天吧</div>\n  </div>\n  <div class=\"photo-title\">\n    <div class=\"line\"></div>\n    <h3 class=\"photo-title--text\">\n      銅鏡故事\n    </h3>\n    <div class=\"line\"></div>\n  </div>\n  <div class=\"storyPhoto-container\">\n    <a class=\"photo\" target=\"_blank\"\n      href=\"https://www.flipsnack.com/ritagu/_-fdzpyjccg.html\"\n    >\n      <div class=\"photo-mask\">       \n      </div>\n      <img src=\"/assets/photo/story01.png\" alt=\"大碗泡茶\">\n    </a>\n    <a class=\"photo\" target=\"_blank\"\n      href=\"https://www.flipsnack.com/ritagu/_.html\"\n    >\n      <div class=\"photo-mask\"></div> \n      <img src=\"/assets/photo/story02.png\" alt=\"蝙蝠洞\">\n    </a>\n    <div class=\"photo\">\n      <div class=\"photo-mask\">\n      </div>\n      <img src=\"/assets/photo/story03.png\" alt=\"峨眉橋\">  \n    </div>\n    <div class=\"photo\">\n      <div class=\"photo-mask\">\n      </div>\n      <img src=\"/assets/photo/story04.png\" alt=\"糖廠風光\">     \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/story/story.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/story/story.component.ts ***!
  \*****************************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/components/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/components/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/components/traffic/traffic.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/traffic/traffic.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* to fixed */\n.traffic-container {\n  background-image: url('/assets/subtle_grunge_@2X.png');\n  padding: 30px 30px 100px;\n}\n.map,\n.map-container {\n  width: 100%;\n  height: 123px\n}\n.map-container {\n  position: relative;\n  display: block;\n}\n.map-mask {\n  width: 100%;\n  height: 100%;\n  position: absolute;;\n  background-color: rgba(140, 14, 3, 0.4);\n  z-index: 99;\n}\n.linkToGM {\n  position: absolute;\n  z-index: 100;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 207px;\n  color: #fff;\n  border: 2px solid #fff;\n  padding: 21px 29px;\n  font-size: 12px;\n  text-align: center;\n}\n@media(min-width: 768px) {\n  .traffic-container {\n    padding: 50px 50px 100px;\n  }\n  .map,\n  .map-container {\n    height: 311px\n  }\n  .linkToGM {\n    width: 309px;\n    padding: 26px 69px;\n    font-size: 14px;\n  }\n}\n@media(min-width: 1440px) {\n  .traffic-container {\n    padding: 100px 135px 90px;\n  }\n  .linkToGM {\n    width: 418px;\n    padding: 38px 124px;\n  }\n  .map,\n  .map-container {\n    height: 420px\n  }\n}"

/***/ }),

/***/ "./src/app/components/traffic/traffic.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/traffic/traffic.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height:100vh\" class=\"traffic-container\">\n    <a class=\"map-container\"\n      href=\"https://goo.gl/maps/kgaLpuJmkWk\"\n      target=\"_blank\"\n    >\n      <div class=\"map-mask\"></div>\n      <div class=\"linkToGM\">點擊後在Google map 開啟</div>\n      <div #gmap class=\"map\"></div>\n    </a>\n    <div class=\"photo-title\">\n      <div class=\"line\"></div>\n      <h3 class=\"photo-title--text\">\n        交通指引\n      </h3>\n      <div class=\"line\"></div>\n    </div>\n    <div class=\"m-description\">\n      <label class=\"m-description--label\">地址</label>\n      <div>\n        苗栗縣三灣鄉銅鏡村小銅鑼圈\n      </div>\n    </div>\n    <div class=\"m-description\">\n      <label class=\"m-description--label\">經由中山高開車前往</label>\n      <div style=\"font-size: 14px\">\n        南下：頭份交流道 → 往三灣方向 → 台3線 → 大埔道 → 銅鏡社區\n      </div>\n      <div style=\"margin-top: 10px;font-size: 14px\">\n        北上：頭份交流道 → 往三灣方向 → 台3線 → 大埔道 → 銅鏡社區\n      </div>\n    </div>\n    <div class=\"m-description\">\n      <label class=\"m-description--label\">大眾運輸工具</label>\n      <div style=\"font-size: 14px\">\n        火車：竹南站 → 轉搭5806往南庄公車 → 於峨眉橋站下車步行即可 \n      </div>\n      <div style=\"margin-top: 10px;font-size: 14px\">\n        高鐵：苗栗高鐵站 → 北上轉搭火車於竹南站下車 → 轉搭5806往南庄公車 → 於峨眉橋站下車步行即可 \n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/traffic/traffic.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/traffic/traffic.component.ts ***!
  \*********************************************************/
/*! exports provided: TrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficComponent", function() { return TrafficComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrafficComponent = /** @class */ (function () {
    function TrafficComponent() {
    }
    TrafficComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: { lat: 24.6693410, lng: 120.9676240 },
            zoom: 15,
            disableDefaultUI: true,
            zoomControl: false,
            scrollWheel: false,
            scaleControl: false,
            draggable: false
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var marker = new google.maps.Marker({
            position: mapProp.center,
        });
        marker.setMap(this.map);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], TrafficComponent.prototype, "gmapElement", void 0);
    TrafficComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-traffic',
            template: __webpack_require__(/*! ./traffic.component.html */ "./src/app/components/traffic/traffic.component.html"),
            styles: [__webpack_require__(/*! ./traffic.component.css */ "./src/app/components/traffic/traffic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrafficComponent);
    return TrafficComponent;
}());



/***/ }),

/***/ "./src/app/components/view-point/view-point.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/view-point/view-point.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-img {\n  width: 100%;\n  min-height: 227px;\n  height: auto;\n}\n\n@media(min-width: 768px) {\n  .view-img {\n    min-height: 100vh;\n  }  \n}"

/***/ }),

/***/ "./src/app/components/view-point/view-point.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/view-point/view-point.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: calc(100vh - 200px)\">\n  <img class=\"view-img\" src=\"/assets/view.png\" alt=\"小銅鑼圈導覽圖 峨眉溪兩岸的故事\">\n</div>"

/***/ }),

/***/ "./src/app/components/view-point/view-point.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/view-point/view-point.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPointComponent", function() { return ViewPointComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewPointComponent = /** @class */ (function () {
    function ViewPointComponent() {
    }
    ViewPointComponent.prototype.ngOnInit = function () {
    };
    ViewPointComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-point',
            template: __webpack_require__(/*! ./view-point.component.html */ "./src/app/components/view-point/view-point.component.html"),
            styles: [__webpack_require__(/*! ./view-point.component.css */ "./src/app/components/view-point/view-point.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewPointComponent);
    return ViewPointComponent;
}());



/***/ }),

/***/ "./src/app/shared-material/shared-material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared-material/shared-material.module.ts ***!
  \***********************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedMaterialModule = /** @class */ (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"]] // 在export
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/acekiller/Documents/miaoli/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map