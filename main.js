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
		var e = new Error("Cannot find module '" + req + "'");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <app-portfolio-header></app-portfolio-header>\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <mat-tab-group mat-stretch-tabs class=\"content-tab\">\r\n        <mat-tab class=\"tab-label\" label=\"Introduction\"> \r\n            <div class=\"content-container\">\r\n                <app-content-intro></app-content-intro>\r\n            </div>    \r\n        </mat-tab>\r\n        <mat-tab label=\"Work Experience\"> \r\n            <div class=\"content-container\">\r\n                <app-content-work-experience></app-content-work-experience>\r\n            </div>   \r\n        </mat-tab>\r\n        <mat-tab class=\"tab-label\" label=\"Education\">\r\n            <div class=\"content-container\">\r\n                <app-content-education></app-content-education>\r\n            </div>   \r\n        </mat-tab>\r\n        <mat-tab class=\"tab-label\" label=\"Extra Skills\">\r\n            <div class=\"content-container\">\r\n                <app-content-extra-skills></app-content-extra-skills>\r\n            </div>   \r\n        </mat-tab>\r\n        <mat-tab class=\"tab-label\" label=\"Contact\">\r\n            <div class=\"content-container\">\r\n                <app-content-contact></app-content-contact>\r\n            </div>   \r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n    <app-portfolio-footer></app-portfolio-footer>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  height: 50px; }\n\n::ng-deep .mat-tab-header {\n  position: fixed !important;\n  z-index: 9999;\n  height: 50px;\n  top: 45px;\n  width: 100%; }\n\n::ng-deep .mat-tab-labels {\n  background-color: #141414; }\n\n::ng-deep .mat-tab-label {\n  color: #fff; }\n\n.content-container {\n  padding-top: 20px;\n  margin: 40px 40px 40px 40px;\n  background-color: #141414; }\n\n.footer {\n  width: 100%;\n  height: 50px; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(iconRegistry, sanitise) {
        this.iconRegistry = iconRegistry;
        this.iconRegistry.addSvgIcon('crescent', sanitise.bypassSecurityTrustResourceUrl('assets/img/redcrescent.svg'));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _portfolio_header_portfolio_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio-header/portfolio-header.component */ "./src/app/portfolio-header/portfolio-header.component.ts");
/* harmony import */ var _portfolio_content_content_intro_content_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio-content/content-intro/content-intro.component */ "./src/app/portfolio-content/content-intro/content-intro.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _portfolio_content_content_work_experience_content_work_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio-content/content-work-experience/content-work-experience.component */ "./src/app/portfolio-content/content-work-experience/content-work-experience.component.ts");
/* harmony import */ var _portfolio_content_content_education_content_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portfolio-content/content-education/content-education.component */ "./src/app/portfolio-content/content-education/content-education.component.ts");
/* harmony import */ var _portfolio_content_content_extra_skills_content_extra_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio-content/content-extra-skills/content-extra-skills.component */ "./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.ts");
/* harmony import */ var _portfolio_content_content_contact_content_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portfolio-content/content-contact/content-contact.component */ "./src/app/portfolio-content/content-contact/content-contact.component.ts");
/* harmony import */ var _portfolio_footer_portfolio_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portfolio-footer/portfolio-footer.component */ "./src/app/portfolio-footer/portfolio-footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _portfolio_header_portfolio_header_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioHeaderComponent"],
                _portfolio_content_content_intro_content_intro_component__WEBPACK_IMPORTED_MODULE_9__["ContentIntroComponent"],
                _portfolio_content_content_work_experience_content_work_experience_component__WEBPACK_IMPORTED_MODULE_12__["ContentWorkExperienceComponent"],
                _portfolio_content_content_education_content_education_component__WEBPACK_IMPORTED_MODULE_13__["ContentEducationComponent"],
                _portfolio_content_content_extra_skills_content_extra_skills_component__WEBPACK_IMPORTED_MODULE_14__["ContentExtraSkillsComponent"],
                _portfolio_content_content_contact_content_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContentContactComponent"],
                _portfolio_footer_portfolio_footer_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioFooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/portfolio-content/content-contact/content-contact.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/portfolio-content/content-contact/content-contact.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"form\">\r\n    <form class=\"contact-form\">\r\n        <mat-form-field class=\"form-field\">\r\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\r\n                [errorStateMatcher]=\"matcher\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                Please enter a valid email address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                Please enter a valid email address\r\n            </mat-error>\r\n        </mat-form-field>\r\n    </form>\r\n    \r\n</div>\r\n-->\r\n<div>\r\n    <h2>Main email</h2>\r\n    <h3><a href=\"mailto:czar.echavez@yahoo.co.uk\">czar.echavez@yahoo.co.uk</a></h3>\r\n    <img src=\"./assets/img/logo2018.svg\" class=\"introLogo\" style=\"height: 150px;display: block;margin: 0 auto; padding: 50px 0 0\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/portfolio-content/content-contact/content-contact.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/portfolio-content/content-contact/content-contact.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n\n.form {\n  text-align: center;\n  color: #fff; }\n\n.content-space {\n  padding: 250px; }\n\nmat-form-field {\n  max-width: 200px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/portfolio-content/content-contact/content-contact.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/portfolio-content/content-contact/content-contact.component.ts ***!
  \********************************************************************************/
/*! exports provided: EmptyFieldError, ContentContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyFieldError", function() { return EmptyFieldError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContactComponent", function() { return ContentContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyFieldError = /** @class */ (function () {
    function EmptyFieldError() {
    }
    EmptyFieldError.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return EmptyFieldError;
}());

var ContentContactComponent = /** @class */ (function () {
    function ContentContactComponent() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
        ]);
        this.matcher = new EmptyFieldError();
    }
    ContentContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-contact',
            template: __webpack_require__(/*! ./content-contact.component.html */ "./src/app/portfolio-content/content-contact/content-contact.component.html"),
            styles: [__webpack_require__(/*! ./content-contact.component.scss */ "./src/app/portfolio-content/content-contact/content-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentContactComponent);
    return ContentContactComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-content/content-education/content-education.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-education/content-education.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Computer Science (BSc) (2:1)</h2>\r\n    <h3>University of Reading</h3>\r\n    <h3>(Sept 2015 - Aug 2018)</h3>\r\n        \r\n    <p class=\"h7\">3<sup>rd</sup> Year (67.6%)</p>\r\n    <table class=\"sortable\">\r\n        <tr>\r\n            <th>Module</th>\r\n            <th class=\"small-column\">Percentage</th>\r\n            <th class=\"small-column\">Grade</th>\r\n        </tr>\r\n        <tr>\r\n            <td>Advanced Computing</td>\r\n            <td class=\"small-column\">67%</td>\r\n            <td class=\"small-column\">B</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Computer Networking</td>\r\n            <td class=\"small-column\">64%</td>\r\n            <td class=\"small-column\">B</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Data Mining</td>\r\n            <td class=\"small-column\">53%</td>\r\n            <td class=\"small-column\">C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Information Security</td>\r\n            <td class=\"small-column\">85%</td>\r\n            <td class=\"small-column\">A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Social, Legal and Ethical Aspects of Engineering</td>\r\n            <td class=\"small-column\">72%</td>\r\n            <td class=\"small-column\">A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Software Quality and Testing</td>\r\n            <td class=\"small-column\">59%</td>\r\n            <td class=\"small-column\">C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Virtual Reality</td>\r\n            <td class=\"small-column\">67%</td>\r\n            <td class=\"small-column\">B</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Individual Project</td>\r\n            <td class=\"small-column\">70%</td>\r\n            <td class=\"small-column\">A</td>\r\n        </tr>\r\n    </table>\r\n    \r\n    <p class=\"h7\">2<sup>nd</sup> Year (66.3%)</p>\r\n    <table class=\"sortable\">\r\n        <tr>\r\n            <th>Module</th>\r\n            <th>Percentage</th>\r\n            <th>Grade</th>\r\n        </tr>\r\n        <tr>\r\n            <td>Essential Algorithms</td>\r\n            <td>88%</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Java</td>\r\n            <td>76%</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Systems Design and Project Management</td>\r\n            <td>75%</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Neural Networks</td>\r\n            <td>74%</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Computer Architecture</td>\r\n            <td>59%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Compilers</td>\r\n            <td>59%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Advanced Databses</td>\r\n            <td>57%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        \r\n        <tr>\r\n            <td>Databases</td>\r\n            <td>55%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Operating Systems</td>\r\n            <td>51%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Robotic Systems</td>\r\n            <td>50%</td>\r\n            <td>C</td>\r\n        </tr>\r\n    </table>\r\n    \r\n    <p class=\"h7\">1<sup>st</sup> Year (59.8%)</p>\r\n    <table class=\"sortable\">\r\n        <tr>\r\n            <th>Module</th>\r\n            <th>Percentage</th>\r\n            <th>Grade</th>\r\n        </tr>\r\n        <tr>\r\n            <td>Programming</td>\r\n            <td>78%</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Software Engineering</td>\r\n            <td>70%</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Fundamentals and Applications of Computing</td>\r\n            <td>57%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>IWLP Russian Level 1</td>\r\n            <td>57%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Codes and Code Breaking</td>\r\n            <td>50%</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Mathematics</td>\r\n            <td>47%</td>\r\n            <td>D</td>\r\n        </tr>\r\n    </table>\r\n        \r\n    <h2>A Level</h2>\r\n    <h3>St. Wilfrid's School</h3>\r\n    <h3>(Sept 2012 - Aug 2015)</h3>\r\n    \r\n    <table class=\"sortable\">\r\n        <tr>\r\n            <th>Subject</th>\r\n            <th>A2/AS Level</th>\r\n            <th>Grade</th>\r\n        </tr>\r\n        <tr>\r\n            <td>IT</td>\r\n            <td>A2</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Physics</td>\r\n            <td>A2</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Chemistry</td>\r\n            <td>A2</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Computing</td>\r\n            <td>AS</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Mathematics</td>\r\n            <td>AS</td>\r\n            <td>D</td>\r\n        </tr>\r\n        \r\n    </table>\r\n    \r\n    <h2>GCSE</h2>\r\n    <h3>St. Wilfrid's School</h3>\r\n    <h3>(Sept 2010 - Aug 2012)</h3>\r\n    \r\n    <table class=\"sortable\">\r\n        <tr>\r\n            <th>Subject</th>\r\n            <th>Grade</th>\r\n        </tr>\r\n        <tr>\r\n            <td>ICT</td>\r\n            <td sorttable_customkey=\"A\">Distinction</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Mathematics</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Physics</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Chemistry</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Biology</td>\r\n            <td>B</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Statistics</td>\r\n            <td>B</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Geography</td>\r\n            <td>B</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Religious Studies</td>\r\n            <td>A</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Media Studies</td>\r\n            <td>B</td>\r\n        </tr>\r\n        <tr>\r\n            <td>English Literature</td>\r\n            <td>C</td>\r\n        </tr>\r\n        <tr>\r\n            <td>English Studies</td>\r\n            <td>C</td>\r\n        </tr>\r\n    </table>\r\n    \r\n    <h3>Central Sussex College, Crawley</h3>\r\n    <h3>(Sept 2010 - Aug 2012)</h3>\r\n    \r\n    <table class=\"sortable\">\r\n        <tr>\r\n            <th>Subject</th>\r\n            <th>Grade</th>\r\n        </tr>\r\n        <tr>\r\n            <td>Engineering</td>\r\n            <td>Merit</td>\r\n        </tr>\r\n    </table>\r\n    <img src=\"./assets/img/logo2018.svg\" class=\"introLogo\" style=\"height: 150px;display: block;margin: 0 auto;\">\r\n    <script src=\"../../../assets/js/sorttable.js\"></script><!--table sorting-->\r\n    <!--javascript source: https://www.kryogenix.org/code/browser/sorttable/-->\r\n</div>"

/***/ }),

/***/ "./src/app/portfolio-content/content-education/content-education.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-education/content-education.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-column {\n  max-width: 120px;\n  width: 20%; }\n"

/***/ }),

/***/ "./src/app/portfolio-content/content-education/content-education.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-education/content-education.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContentEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentEducationComponent", function() { return ContentEducationComponent; });
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

var ContentEducationComponent = /** @class */ (function () {
    function ContentEducationComponent() {
    }
    ContentEducationComponent.prototype.ngOnInit = function () {
    };
    ContentEducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-education',
            template: __webpack_require__(/*! ./content-education.component.html */ "./src/app/portfolio-content/content-education/content-education.component.html"),
            styles: [__webpack_require__(/*! ./content-education.component.scss */ "./src/app/portfolio-content/content-education/content-education.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentEducationComponent);
    return ContentEducationComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Computer Languages</h2>\r\n    <table class=\"sortable\">\r\n        <tr><td class=\"clang\">C/C++</td></tr>\r\n        <tr><td class=\"clang\">C#</td></tr>\r\n        <tr><td class=\"clang\">Java</td></tr>\r\n        <tr><td class=\"clang\">HTML &amp; CSS</td></tr>\r\n        <tr><td class=\"clang\">Python</td></tr>\r\n        <tr><td class=\"clang\">SQL</td></tr>\r\n        <tr><td class=\"clang\">JavaScript</td></tr>\r\n        <tr><td class=\"clang\">PHP</td></tr>\r\n    </table>\r\n    <img src=\"./assets/img/logo2018.svg\" class=\"introLogo\" style=\"height: 150px;display: block;margin: 0 auto;\">\r\n</div>"

/***/ }),

/***/ "./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContentExtraSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExtraSkillsComponent", function() { return ContentExtraSkillsComponent; });
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

var ContentExtraSkillsComponent = /** @class */ (function () {
    function ContentExtraSkillsComponent() {
    }
    ContentExtraSkillsComponent.prototype.ngOnInit = function () {
    };
    ContentExtraSkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-extra-skills',
            template: __webpack_require__(/*! ./content-extra-skills.component.html */ "./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.html"),
            styles: [__webpack_require__(/*! ./content-extra-skills.component.scss */ "./src/app/portfolio-content/content-extra-skills/content-extra-skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentExtraSkillsComponent);
    return ContentExtraSkillsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-content/content-intro/content-intro.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/portfolio-content/content-intro/content-intro.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"introPage\">\r\n    <h2>Introduction</h2>\r\n    <p>Welcome to my new and improved website! (Now with 100% more Angular).\r\n        This website was originally created as a way to showcase to recruiters \r\n        my skills and functioned as a tool that helped me get a job. That was \r\n        successful, which means this website should no longer be in use, however\r\n        it has been repurposed as a way for me to point people towards my website and find\r\n        relevant information about me. \r\n    </p>\r\n    <p>I have been spent some of my free time trying to learn Angular and improving my skills with web languages. \r\n        Hence this website. If you happen to have any ideas of how to improve this site, feel free to contact me about it.</p>\r\n        <p>I have also provided a link to the legacy website, below, as although it is outdated, I am proud of it. \r\n            It helped get me a job after all.</p>\r\n    <img src=\"./assets/img/logo2018.svg\" class=\"introLogo\" style=\"height: 150px;display: block;margin: 0 auto;\">\r\n</div>"

/***/ }),

/***/ "./src/app/portfolio-content/content-intro/content-intro.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/portfolio-content/content-intro/content-intro.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".introPage {\n  height: 100%; }\n\n.legacyButton {\n  position: absolute;\n  width: 100%;\n  bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/portfolio-content/content-intro/content-intro.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/portfolio-content/content-intro/content-intro.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContentIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentIntroComponent", function() { return ContentIntroComponent; });
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

var ContentIntroComponent = /** @class */ (function () {
    function ContentIntroComponent() {
    }
    ContentIntroComponent.prototype.ngOnInit = function () {
    };
    ContentIntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-intro',
            template: __webpack_require__(/*! ./content-intro.component.html */ "./src/app/portfolio-content/content-intro/content-intro.component.html"),
            styles: [__webpack_require__(/*! ./content-intro.component.scss */ "./src/app/portfolio-content/content-intro/content-intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentIntroComponent);
    return ContentIntroComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-content/content-work-experience/content-work-experience.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-work-experience/content-work-experience.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>Junior Engineer</h2>\r\n  <h3><a href=\"https://www.envitia.com/\" target=\"_blank\">Envitia</a></h3>\r\n  <h3>(Aug 2018 - Current)</h3>\r\n  <div class=\"desc-text\">\r\n    <p>Working as part of the web development team, working on various projects, involving AngularJS and Java. The projects I contributed to\r\n      ranged from geospatial software to data analytics software\r\n    </p>\r\n  </div>\r\n    \r\n    <h2>Student Demonstrator</h2>\r\n    <h3><a href=\"http://www.reading.ac.uk/\" target=\"_blank\">University of Reading</a></h3>\r\n    <h3>(Oct 2017 - Apr 2018)</h3>\r\n    <div class=\"desc-text\">\r\n      <p>The job required the ability to assist the lecturer(s) in the practical portion of the Programming module; therefore also requiring an extensive knowledge of programming concepts and experience in the main IDE and programming language (Visual Studio and C/C++) chosen by the university to teach the module with.</p>\r\n      <p>Additional requirements from the role was to ensure the students completed the tasks and to mark their tasks sheets to verify that the task is indeed complete, as well as resolving any issues which may arise, such as compiler errors which the students may require help with.</p>\r\n    </div>\r\n\r\n    <h2>Kitchen Worker</h2>\r\n    <h3><a href=\"http://healthlovingcare.com/\" target=\"_blank\">A&amp;T Healthcare</a></h3>\r\n    <h3>(Sept 2017 - Oct 2017)</h3>\r\n    <div class=\"desc-text\">\r\n      <p>The job role required helping nurses organise the food for lunch and supper of the nursing home residents as well as serving tea and coffee to everyone, including visitors, during tea times. Part of the job also requires cleaning dishes and cutlery as well as maintaining the cleanliness and organisation of the kitchen area.</p>\r\n    </div>\r\n\r\n    <h2>Staff Member</h2>\r\n    <h3>KFC Horsham</h3>\r\n    <h3>(Aug 2012 - Sep 2016)</h3>\r\n    <div class=\"desc-text\">\r\n      <p>Working in 3 different sections of the shop; front, middle and back. Front section requires serving customers, middle section requires making burger orders, side items as well as maintaining the amount of prepared food items. The back section required organisation of the storage room as well as transferring items from the storage room to the front and middle section.</p>\r\n      <p>The role also required the maintenance of the cleanliness of the eating area as well as ensuring the customers are comfortable.</p>\r\n    </div>\r\n    <img src=\"./assets/img/logo2018.svg\" class=\"introLogo\" style=\"height: 150px;display: block;margin: 0 auto;\">\r\n</div>"

/***/ }),

/***/ "./src/app/portfolio-content/content-work-experience/content-work-experience.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-work-experience/content-work-experience.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desc-text {\n  padding: 0 0 100px; }\n"

/***/ }),

/***/ "./src/app/portfolio-content/content-work-experience/content-work-experience.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/portfolio-content/content-work-experience/content-work-experience.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ContentWorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWorkExperienceComponent", function() { return ContentWorkExperienceComponent; });
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

var ContentWorkExperienceComponent = /** @class */ (function () {
    function ContentWorkExperienceComponent() {
    }
    ContentWorkExperienceComponent.prototype.ngOnInit = function () {
    };
    ContentWorkExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-work-experience',
            template: __webpack_require__(/*! ./content-work-experience.component.html */ "./src/app/portfolio-content/content-work-experience/content-work-experience.component.html"),
            styles: [__webpack_require__(/*! ./content-work-experience.component.scss */ "./src/app/portfolio-content/content-work-experience/content-work-experience.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentWorkExperienceComponent);
    return ContentWorkExperienceComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-footer/portfolio-footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-footer/portfolio-footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"min-height:35px\" color=\"primary\" class=\"toolbar\">\r\n  <mat-toolbar-row>\r\n      <span>\r\n          <div class=\"toolbar-logo\">\r\n            <button mat-flat-button (click)=\"goToLegacySite()\">\r\n              Legacy\r\n            </button>\r\n          </div>\r\n        </span>\r\n        <span class=\"toolbar-spacer\"></span>\r\n        <div class=\"toolbar-right\">\r\n            <button mat-raised-button (click)=\"goToEnvitia()\" color=\"accent\">\r\n              Envitia\r\n            </button>\r\n        </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/portfolio-footer/portfolio-footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-footer/portfolio-footer.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 999;\n  height: 30px; }\n\n.toolbar {\n  display: flex; }\n\n.toolbar-logo {\n  float: left; }\n\n.toolbar-right {\n  float: right; }\n\n.toolbar-spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/portfolio-footer/portfolio-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-footer/portfolio-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: PortfolioFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioFooterComponent", function() { return PortfolioFooterComponent; });
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

var PortfolioFooterComponent = /** @class */ (function () {
    function PortfolioFooterComponent() {
    }
    PortfolioFooterComponent.prototype.ngOnInit = function () {
    };
    PortfolioFooterComponent.prototype.goToLegacySite = function () {
        window.open('/assets/archive/index.html', '_self');
    };
    PortfolioFooterComponent.prototype.goToEnvitia = function () {
        window.open('https://www.envitia.com/', '_blank');
    };
    PortfolioFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-footer',
            template: __webpack_require__(/*! ./portfolio-footer.component.html */ "./src/app/portfolio-footer/portfolio-footer.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-footer.component.scss */ "./src/app/portfolio-footer/portfolio-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioFooterComponent);
    return PortfolioFooterComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-header/portfolio-header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-header/portfolio-header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <mat-toolbar style=\"min-height:40px\" color=\"primary\" class=\"toolbar\">\r\n    <mat-toolbar-row>\r\n      <span>\r\n        <div class=\"toolbar-logo\">\r\n          <button mat-flat-button>\r\n            <mat-icon svgIcon=\"crescent\" color=\"accent\" class=\"toolbar-icon\"></mat-icon>\r\n            Czar Ec\r\n          </button>\r\n        </div>\r\n      </span>\r\n      <span class=\"toolbar-spacer\"></span>\r\n      <div class=\"toolbar-external-links\">\r\n          <button mat-flat-button (click)=\"openLinkedIn()\">\r\n            <span class=\"toolbar-icon\"><i class=\"fab fa-linkedin-in\"  style=\"font-size:20px;\"></i></span>\r\n            <span class=\"icon-text\">LinkedIn</span>\r\n          </button>\r\n\r\n          <button mat-flat-button (click)=\"openGithub()\">\r\n              <span class=\"toolbar-icon\"><i class=\"fab fa-github\" style=\"font-size:20px;\"></i></span>\r\n              <span class=\"icon-text\">Github</span>\r\n          </button>\r\n\r\n          <button mat-raised-button (click)=\"openCV()\" color=\"accent\" class=\"header-cv-button\">\r\n            <span class=\"cv-text\">CV</span>\r\n            <span class=\"icon-text\">View CV</span>\r\n          </button>\r\n      </div>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/portfolio-header/portfolio-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-header/portfolio-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 999;\n  height: 45px; }\n\n.toolbar-icon {\n  padding: 10px; }\n\n.button {\n  padding: 10px 0 10px;\n  margin: 10px 0 10px; }\n\n.toolbar {\n  display: flex; }\n\n.toolbar-logo {\n  float: left; }\n\n.toolbar-external-links {\n  float: right; }\n\n.toolbar-spacer {\n  flex: 1 1 auto; }\n\n.header-cv-button {\n  top: -1px; }\n\n@media screen and (min-width: 1000px) {\n  .cv-text {\n    display: none; } }\n\n@media screen and (max-width: 1000px) {\n  .icon-text {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/portfolio-header/portfolio-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-header/portfolio-header.component.ts ***!
  \****************************************************************/
/*! exports provided: PortfolioHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioHeaderComponent", function() { return PortfolioHeaderComponent; });
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

var PortfolioHeaderComponent = /** @class */ (function () {
    function PortfolioHeaderComponent() {
    }
    PortfolioHeaderComponent.prototype.ngOnInit = function () {
    };
    PortfolioHeaderComponent.prototype.openCV = function () {
        window.open('assets/docs/CzarEchavezCV.pdf', '_blank');
    };
    PortfolioHeaderComponent.prototype.openLinkedIn = function () {
        window.open('https://www.linkedin.com/in/czarec', '_blank');
    };
    PortfolioHeaderComponent.prototype.openGithub = function () {
        window.open('https://github.com/Czar-Ec/', '_blank');
    };
    PortfolioHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-header',
            template: __webpack_require__(/*! ./portfolio-header.component.html */ "./src/app/portfolio-header/portfolio-header.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-header.component.scss */ "./src/app/portfolio-header/portfolio-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioHeaderComponent);
    return PortfolioHeaderComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\GitHub\Czar-Ec.github.io\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map