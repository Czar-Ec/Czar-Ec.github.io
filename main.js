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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"mat-typography app-frame mat-app-background\" [class.dark-theme]=\"setDarkTheme\">\r\n  <app-toolbar (toggleTheme)=\"toggleDarkTheme()\"></app-toolbar>\r\n  <app-content></app-content>\r\n  <!-- removed for now \r\n  <app-footer></app-footer>\r\n  -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  min-height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcV2Vic2l0ZURldlJlcG8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(iconReg, sanitise, overlayContainer) {
        this.iconReg = iconReg;
        this.overlayContainer = overlayContainer;
        this.setDarkTheme = true;
        this.title = 'CzarEc Portfolio';
        this.overlay = this.overlayContainer.getContainerElement();
        this.applyTheme();
        this.iconReg.addSvgIcon('cog', sanitise.bypassSecurityTrustResourceUrl('assets/img/cog.svg'));
        this.iconReg.addSvgIcon('cv', sanitise.bypassSecurityTrustResourceUrl('assets/img/cv.svg'));
        this.iconReg.addSvgIcon('crescent', sanitise.bypassSecurityTrustResourceUrl('assets/img/crescent.svg'));
        this.iconReg.addSvgIcon('extra', sanitise.bypassSecurityTrustResourceUrl('assets/img/extra.svg'));
        this.iconReg.addSvgIcon('github', sanitise.bypassSecurityTrustResourceUrl('assets/img/github.svg'));
        this.iconReg.addSvgIcon('linkedin', sanitise.bypassSecurityTrustResourceUrl('assets/img/linkedin.svg'));
        this.iconReg.addSvgIcon('logo', sanitise.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
        this.iconReg.addSvgIcon('logotext', sanitise.bypassSecurityTrustResourceUrl('assets/img/logotext.svg'));
        this.iconReg.addSvgIcon('menu', sanitise.bypassSecurityTrustResourceUrl('assets/img/menu.svg'));
        this.iconReg.addSvgIcon('pepe', sanitise.bypassSecurityTrustResourceUrl('assets/img/404/common_rarity_pepe.svg'));
        this.iconReg.addSvgIcon('feels', sanitise.bypassSecurityTrustResourceUrl('assets/img/404/feels_bad.svg'));
        this.iconReg.addSvgIcon('okay', sanitise.bypassSecurityTrustResourceUrl('assets/img/404/okay.svg'));
        this.iconReg.addSvgIcon('rukidding', sanitise.bypassSecurityTrustResourceUrl('assets/img/404/r_u_kidding.svg'));
        this.iconReg.addSvgIcon('udaman', sanitise.bypassSecurityTrustResourceUrl('assets/img/404/youre_the_man.svg'));
    }
    AppComponent.prototype.toggleDarkTheme = function () {
        this.setDarkTheme = !this.setDarkTheme;
        this.applyTheme();
    };
    AppComponent.prototype.applyTheme = function () {
        if (this.setDarkTheme) {
            this.overlay.classList.add('dark-theme');
        }
        else {
            this.overlay.classList.remove('dark-theme');
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_content_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/content/home-content/home-content.component */ "./src/app/components/content/home-content/home-content.component.ts");
/* harmony import */ var _components_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/content/page-not-found/page-not-found.component */ "./src/app/components/content/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_content_work_exp_content_work_exp_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/content/work-exp-content/work-exp-content.component */ "./src/app/components/content/work-exp-content/work-exp-content.component.ts");
/* harmony import */ var _components_content_education_content_education_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/content/education-content/education-content.component */ "./src/app/components/content/education-content/education-content.component.ts");
/* harmony import */ var _components_content_extra_content_extra_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/content/extra-content/extra-content.component */ "./src/app/components/content/extra-content/extra-content.component.ts");
/* harmony import */ var _components_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/content/contact/contact.component */ "./src/app/components/content/contact/contact.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                _components_content_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_9__["HomeContentComponent"],
                _components_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _components_content_work_exp_content_work_exp_content_component__WEBPACK_IMPORTED_MODULE_11__["WorkExpContentComponent"],
                _components_content_education_content_education_content_component__WEBPACK_IMPORTED_MODULE_12__["EducationContentComponent"],
                _components_content_extra_content_extra_content_component__WEBPACK_IMPORTED_MODULE_13__["ExtraContentComponent"],
                _components_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["APP_BASE_HREF"],
                    useValue: './'
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content/contact/contact.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/content/contact/contact.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <h2>Cannot be contacted at the moment...</h2>\r\n  <p style=\"text-align: center\">Currently not looking for any opportunities, however this page will be updated with a contact form soon (when I feel lke it)</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/contact/contact.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/content/contact/contact.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRhY3QvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcV2Vic2l0ZURldlJlcG8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRlbnRcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/content/contact/contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/content/contact/contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/content/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/content/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/content.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 1000px) {\n  .content {\n    width: 60%;\n    padding: 30px;\n    margin: 0 auto; } }\n\n@media screen and (max-width: 1000px) {\n  .content {\n    padding: 20px;\n    margin: 0 auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXFdlYnNpdGVEZXZSZXBvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsY0FBYTtJQUNiLGVBQWMsRUFDZixFQUFBOztBQUdIO0VBQ0U7SUFDRSxjQUFhO0lBQ2IsZUFBYyxFQUNmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/content/education-content/education-content.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/content/education-content/education-content.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel *ngFor=\"let qualTypes of qualificationTypes\" hideToggle>\r\n\r\n      <mat-expansion-panel-header (click)=\"filter(qualTypes)\">\r\n        <mat-panel-title>\r\n          {{qualTypes}}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n\r\n      <table mat-table [dataSource]=\"qualList\" multiTemplateDataRows class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsDisplayed\">\r\n          <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsDisplayed.length\">\r\n            <div class=\"element-details\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n\r\n              <div class=\"grade-display\">\r\n                <div>\r\n                  <h1 class=\"grade-letter\">{{element.grade}}</h1>\r\n                </div>\r\n                <div *ngIf=\"element.percentage\">\r\n                  <h3 class=\"grade-percentage\">{{element.percentage}}%</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"grade-description\">\r\n                <p>{{element.description}}</p>\r\n                <div *ngFor=\"let project of element.projects\">\r\n                  <h5>{{project.project_title}}</h5>\r\n                  <p class=\"project-description\">{{project.project_description}}</p>\r\n                  <button mat-raised-button color=\"primary\" (click)=openProject(project.project_link)>Open Project</button>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"columnsDisplayed\"></tr>\r\n        <tr mat-row *matRowDef=\"let element; columns: columnsDisplayed;\" class=\"element-row\" [class.expanded-row]=\"expandedElement === element\"\r\n          (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n        </tr>\r\n\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"detail-row\"></tr>\r\n      </table>\r\n\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/education-content/education-content.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/content/education-content/education-content.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%; }\n\nmat-panel-title {\n  justify-content: center !important; }\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 8px 16px !important; }\n\n.mat-header-cell, .mat-cell {\n  text-align: center; }\n\ntable {\n  margin: 0 auto;\n  width: 100%; }\n\ntr.detail-row {\n  height: 0;\n  width: 100%; }\n\ntr.element-row:not(.expanded-row):hover {\n  background: #909090; }\n\ntr.element-row:not(.expanded-row):active {\n  background: #909090; }\n\n.element-row td {\n  border-bottom-width: 0; }\n\n.element-details {\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 30px 1px;\n  width: 100%;\n  margin: 0 auto; }\n\nbutton {\n  margin: 20px auto;\n  display: block; }\n\n.grade-display {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-width: 10vw;\n  border: 2px solid #660000;\n  font-weight: lighter;\n  margin: 0 auto;\n  padding: 10px;\n  min-height: 5vh; }\n\n.grade-letter {\n  font-size: 500%;\n  line-height: 100%; }\n\n.grade-percentage {\n  font-size: 200%; }\n\n.grade-description {\n  padding: 0 16px;\n  text-align: center; }\n\n@media screen and (max-width: 1000px) {\n  ::ng-deep .mat-expansion-panel-body {\n    padding: 0 !important; }\n  .element-details {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1px;\n    width: 100%;\n    margin: 0 auto;\n    text-align: center; }\n  .grade-display {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-width: 70%;\n    border: 2px solid #660000;\n    font-weight: lighter;\n    margin: 8px 12px 8px 0;\n    padding: 10px;\n    min-height: 0.75vh; }\n  .grade-letter {\n    font-size: 400%;\n    line-height: 100%; }\n  .grade-percentage {\n    font-size: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2VkdWNhdGlvbi1jb250ZW50L0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXFdlYnNpdGVEZXZSZXBvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250ZW50XFxlZHVjYXRpb24tY29udGVudFxcZWR1Y2F0aW9uLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQ0FBa0MsRUFDbkM7O0FBRUQ7RUFDRSwrQkFBOEIsRUFDL0I7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsWUFBVyxFQUNaOztBQUVEO0VBQ0UsVUFBUztFQUNULFlBQVcsRUFDWjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2Qix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIscUJBQW9CO0VBQ3BCLGVBQWM7RUFDZCxjQUFhO0VBQ2IsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBR0Q7RUFDRTtJQUNFLHNCQUFxQixFQUN0QjtFQUVEO0lBQ0UsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixvQkFBbUI7SUFDbkIsYUFBWTtJQUNaLFlBQVc7SUFDWCxlQUFjO0lBQ2QsbUJBQWtCLEVBQ25CO0VBRUQ7SUFDRSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2Qix1QkFBc0I7SUFDdEIsZUFBYztJQUNkLDBCQUF5QjtJQUN6QixxQkFBb0I7SUFDcEIsdUJBQXNCO0lBQ3RCLGNBQWE7SUFDYixtQkFBa0IsRUFDbkI7RUFFRDtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ2xCO0VBRUQ7SUFDRSxnQkFBZSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2VkdWNhdGlvbi1jb250ZW50L2VkdWNhdGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LXBhbmVsLXRpdGxlIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogMCA4cHggMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsLCAubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ci5kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmVsZW1lbnQtcm93Om5vdCguZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzkwOTA5MDtcclxufVxyXG5cclxudHIuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzkwOTA5MDtcclxufVxyXG5cclxuLmVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZWxlbWVudC1kZXRhaWxzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHggMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZ3JhZGUtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAxMHZ3O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtaW4taGVpZ2h0OiA1dmg7XHJcbn1cclxuXHJcbi5ncmFkZS1sZXR0ZXIge1xyXG4gIGZvbnQtc2l6ZTogNTAwJTtcclxuICBsaW5lLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdyYWRlLXBlcmNlbnRhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5cclxuLmdyYWRlLWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmVsZW1lbnQtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdyYWRlLWRpc3BsYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjAwMDA7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDEycHggOHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMC43NXZoO1xyXG4gIH1cclxuXHJcbiAgLmdyYWRlLWxldHRlciB7XHJcbiAgICBmb250LXNpemU6IDQwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmdyYWRlLXBlcmNlbnRhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/content/education-content/education-content.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/content/education-content/education-content.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EducationContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationContentComponent", function() { return EducationContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _qual_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qual-enums */ "./src/app/components/content/education-content/qual-enums.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var EducationContentComponent = /** @class */ (function () {
    function EducationContentComponent() {
        this.qualificationTypes = [
            _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
            _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
            _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].firstyr,
            _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].alvl2,
            _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].alvl,
            _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
            _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].btec2
        ];
        this.qualList = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](qualifications);
        this.columnsDisplayed = ['subject', 'grade'];
    }
    EducationContentComponent.prototype.ngOnInit = function () {
    };
    /**
     * Filters the table data source via the
     * chosen qualification type
     * @param filterVal filter value
     */
    EducationContentComponent.prototype.filter = function (filterVal) {
        this.qualList.filter = filterVal;
    };
    /**
     * Opens the project in another tab
     * @param projectUrl project url location
     */
    EducationContentComponent.prototype.openProject = function (projectUrl) {
        window.open(projectUrl, '_blank');
    };
    EducationContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education-content',
            template: __webpack_require__(/*! ./education-content.component.html */ "./src/app/components/content/education-content/education-content.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./education-content.component.scss */ "./src/app/components/content/education-content/education-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationContentComponent);
    return EducationContentComponent;
}());

var qualifications = [
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Advanced Computing',
        description: 'Module involves the study of parallel and distributed computing, '
            + ' as well as the concept of MapReduce using Hadoop and CUDA as case studies',
        grade: 'B',
        percentage: 67,
        projects: [{
                project_title: 'MapReduce',
                project_link: 'https://github.com/Czar-Ec/MapReduce',
                project_description: 'An attempt at reproducing Hadoop\'s MapReduce functionality'
            }]
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Computer Networking',
        description: 'Module involves the study of modern computer networks and the core concepts of '
            + ' network architecture and communication protocols',
        grade: 'B',
        percentage: 64
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Data Mining',
        description: 'The module is a brief introduction to the principles and techniques used in '
            + ' Data Mining and how to apply them to the relevant contexts',
        grade: 'C',
        percentage: 53
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Information Security',
        description: 'The module covers the major threats and risks that affect the security of a' +
            ' network and the systems that rely on it (network security), and the major threats to data' +
            ' in both structured and unstructured form (data security).',
        grade: 'A',
        percentage: 85
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Social, Legal and Ethical Aspects of Engineering',
        description: 'The module covers the Social, Legal and Ethical problems which may be' +
            ' encountered while working in the technology/engineering industry',
        grade: 'A',
        percentage: 72
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Software Quality and Testing',
        description: 'The module covers the different software testing techniques as well as the' +
            ' different ways software quality is maintained during software development',
        grade: 'C',
        percentage: 59
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Virtual Reality',
        description: 'Partially a group based module, where students study the basics of virtual reality' +
            ' as well as how graphics are used to create an immersive virtual environment',
        grade: 'B',
        percentage: 67,
        projects: [{
                project_title: 'VRGroupCoursework',
                project_link: 'https://github.com/JamesTang2905/VRGroupCoursework',
                project_description: '5 separate but interconnected worlds which show spatial impossibilities / ' +
                    'breaks normal perception (the aim of the coursework anyway)'
            }]
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].thirdyr,
        subject: 'Individual Project',
        description: 'The individual project is a module where students can plan, ' +
            ' research, apply and present their findings. My project is based on the development' +
            ' of a "Zombie Simulator", which simulates how a zombie/infection can spread around a map',
        grade: 'A',
        percentage: 70,
        projects: [{
                project_title: 'ZEUS',
                project_link: 'https://github.com/Czar-Ec/ZEUS',
                project_description: 'C++ based Zombie simulator, which utilises SDL and ImGUI to render graphics'
            }]
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Essential Algorithms',
        description: 'The module covers the concepts of algorithms and algorithm design. The module also covers ' +
            ' fundamental algorithms such as Divide and Conquer, Greedy algorithms and analysing and assess an algorithm\'s efficiency',
        grade: 'A',
        percentage: 88
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Java',
        description: 'The module covers the concepts used in Java programming, such as Object Oriented Programming.',
        grade: 'A',
        percentage: 76,
        projects: [
            {
                project_title: 'Artificial Life Sim',
                project_link: 'https://github.com/Czar-Ec/ArtificialLifeSim',
                project_description: 'A Java based artificial life simulator'
            }
        ]
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'System Design and Project Management',
        description: 'The module covers how system design and project management is used in software engineering',
        grade: 'A',
        percentage: 75
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Neural Networks',
        description: 'The module covers the concepts of neural networks, its history and how it is being used in computing',
        grade: 'A',
        percentage: 74,
        projects: [{
                project_title: 'Neural Network on the Glass data set',
                project_link: '/assets/docs/NeuralNetworkReport.pdf',
                project_description: 'The project was to use the neural network that we have created on a data set and report our findings' +
                    'I would post the neural network itself, however most of the code was created by the university and therefore may be a ' +
                    'breach of copyright'
            }]
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Computer Architecture',
        description: 'The module introduces the underlying theory of modern computer architecture in terms of instruction set ' +
            'architecture, organisation, and hardware',
        grade: 'C',
        percentage: 59
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Compilers',
        description: 'This module introduces the concepts underlying compiler design and compiler writing, such as: ' +
            'regular expressions, grammars, parsing, and finite state machines',
        grade: 'C',
        percentage: 59
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Advanced Databases',
        description: 'Databases but advanced.',
        grade: 'C',
        percentage: 55
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Databases',
        description: 'The module covers underlying principles and provides practical experience of the design and ' +
            'implementation of scalable, secure databases',
        grade: 'C',
        percentage: 55
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Operating Systems',
        description: 'The module covers the fundamentals of operating systems and provides some experience at ' +
            'code development at the operating systems level.',
        grade: 'C',
        percentage: 51
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].secondyr,
        subject: 'Robotic Systems',
        description: 'The module provides students with a comprehensive introduction to robotics, as well as a range of ' +
            'robotic systems and architectures',
        grade: 'C',
        percentage: 50
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].firstyr,
        subject: 'Programming',
        description: 'The module covers the basics of programming using C and C++',
        grade: 'A',
        percentage: 78,
        projects: [{
                project_title: 'Noughts and Crosses',
                project_link: 'https://github.com/Czar-Ec/Noughts-and-Crosses',
                project_description: 'A grid based game using C++ and SDL to render the graphics'
            }]
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].firstyr,
        subject: 'Software Engineering',
        description: 'The module provides an understanding of the concepts, practice and management of software engineering',
        grade: 'A',
        percentage: 70
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].firstyr,
        subject: 'Fundamentals and Applications of Computing',
        description: 'The module provides an introduction to discrete mathematics and algorithms,' +
            ' and to introduce students to the discipline of Computer Science.',
        grade: 'C',
        percentage: 57
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].firstyr,
        subject: 'IWLP Russian Level 1',
        description: 'да.',
        grade: 'C',
        percentage: 57
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].firstyr,
        subject: 'Codes and Code Breaking',
        description: 'The module covered the basics of cryptography as well as the industry standards of encrypting information (RSA)',
        grade: 'C',
        percentage: 50
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].alvl2,
        subject: 'IT',
        description: '',
        grade: 'A'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].alvl2,
        subject: 'Physics',
        description: '',
        grade: 'C'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].alvl2,
        subject: 'Chemistry',
        description: '',
        grade: 'C'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].alvl,
        subject: 'Computing',
        description: '',
        grade: 'C'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].alvl,
        subject: 'Mathematics',
        description: '',
        grade: 'D'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'ICT',
        description: 'Note: Grade is Distinction.',
        grade: 'D'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Mathematics',
        description: '',
        grade: 'A'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Physics',
        description: '',
        grade: 'A'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Chemistry',
        description: '',
        grade: 'A'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Biology',
        description: '',
        grade: 'B'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Statistics',
        description: '',
        grade: 'B'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Geography',
        description: '',
        grade: 'B'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Religious Studies',
        description: '',
        grade: 'A'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'Media Studies',
        description: '',
        grade: 'B'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'English Literature',
        description: '',
        grade: 'C'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].gcse,
        subject: 'English Studies',
        description: '',
        grade: 'C'
    },
    {
        qualType: _qual_enums__WEBPACK_IMPORTED_MODULE_2__["QualType"].btec2,
        subject: 'Engineering',
        description: 'Note: Grade is Merit',
        grade: 'M'
    }
];


/***/ }),

/***/ "./src/app/components/content/education-content/qual-enums.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/content/education-content/qual-enums.ts ***!
  \********************************************************************/
/*! exports provided: QualType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualType", function() { return QualType; });
/**
 * Enums for each qualification type
 */
var QualType;
(function (QualType) {
    QualType["thirdyr"] = "3rd Year University";
    QualType["secondyr"] = "2nd Year University";
    QualType["firstyr"] = "1st Year University";
    QualType["alvl2"] = "A Level (A2)";
    QualType["alvl"] = "A Level (AS)";
    QualType["gcse"] = "GCSE";
    QualType["btec2"] = "BTEC Level 2 Diploma";
})(QualType || (QualType = {}));


/***/ }),

/***/ "./src/app/components/content/extra-content/extra-content.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/content/extra-content/extra-content.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div>\r\n    <h1>Computer Languages / Technologies</h1>\r\n    <mat-grid-list gutterSize=\"20px\" cols=\"3\" rowHeight=\"2:1\">\r\n      <mat-grid-tile *ngFor=\"let lang of compLangs\" class=\"langTile\">\r\n        {{lang}}\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/extra-content/extra-content.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/content/extra-content/extra-content.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%; }\n\n.langTile:hover {\n  background-color: #660000; }\n\nmat-grid-list {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2V4dHJhLWNvbnRlbnQvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcV2Vic2l0ZURldlJlcG8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRlbnRcXGV4dHJhLWNvbnRlbnRcXGV4dHJhLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvZXh0cmEtY29udGVudC9leHRyYS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxhbmdUaWxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMDAwO1xyXG59XHJcblxyXG5tYXQtZ3JpZC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/content/extra-content/extra-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/content/extra-content/extra-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExtraContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraContentComponent", function() { return ExtraContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExtraContentComponent = /** @class */ (function () {
    function ExtraContentComponent() {
        this.compLangs = languages;
    }
    ExtraContentComponent.prototype.ngOnInit = function () {
    };
    ExtraContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extra-content',
            template: __webpack_require__(/*! ./extra-content.component.html */ "./src/app/components/content/extra-content/extra-content.component.html"),
            styles: [__webpack_require__(/*! ./extra-content.component.scss */ "./src/app/components/content/extra-content/extra-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExtraContentComponent);
    return ExtraContentComponent;
}());

var languages = [
    'C',
    'C++',
    'Java',
    'HTML',
    'CSS',
    'SQL',
    'JS',
    'PHP',
    'Gherkin',
    'Jasmine',
    'Maven',
    'Rasp Pi',
    'Spring',
    'SDL'
];


/***/ }),

/***/ "./src/app/components/content/home-content/home-content.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/content/home-content/home-content.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"introPage\">\r\n  <h2>Introduction</h2>\r\n  <p>Welcome to my new and improved website! (Now with 100% more Angular).\r\n    This website was originally created as a way to showcase to recruiters\r\n    my skills and functioned as a tool that helped me get a job. That was\r\n    successful, which means this website should no longer be in use, however\r\n    it has been repurposed as a way for me to point people towards my website and find\r\n    relevant information about me.\r\n  </p>\r\n  <p>I have been spent some of my free time trying to learn Angular and improving my skills with web languages.\r\n    Hence this website. If you happen to have any ideas of how to improve this site, feel free to contact me about it.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/home-content/home-content.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/content/home-content/home-content.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".introPage {\n  height: 100%; }\n\n.legacyButton {\n  position: absolute;\n  width: 100%;\n  bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2hvbWUtY29udGVudC9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcR2l0SHViXFxXZWJzaXRlRGV2UmVwby9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGVudFxcaG9tZS1jb250ZW50XFxob21lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9ob21lLWNvbnRlbnQvaG9tZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvUGFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubGVnYWN5QnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/content/home-content/home-content.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/content/home-content/home-content.component.ts ***!
  \***************************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent() {
    }
    HomeContentComponent.prototype.ngOnInit = function () {
    };
    HomeContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-content',
            template: __webpack_require__(/*! ./home-content.component.html */ "./src/app/components/content/home-content/home-content.component.html"),
            styles: [__webpack_require__(/*! ./home-content.component.scss */ "./src/app/components/content/home-content/home-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeContentComponent);
    return HomeContentComponent;
}());



/***/ }),

/***/ "./src/app/components/content/page-not-found/page-not-found.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/content/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <h1>404</h1>\r\n  <div [ngSwitch]=\"randImg\">\r\n    <div *ngSwitchCase=\"'udaman'\" class=\"udaman\">\r\n      <mat-icon [inline]=\"true\" [svgIcon]=\"randImg\" class=\"image\"></mat-icon>\r\n      <p>You look lost, why don't I take you \r\n          <button mat-raised-button routerLink=\"/\">home</button></p>\r\n    </div>\r\n    <div *ngSwitchCase=\"'pepe'\">\r\n      <mat-icon [inline]=\"true\" [svgIcon]=\"randImg\" class=\"image\"></mat-icon>\r\n      <p class=\"pepeText\">{{randPhrase}}</p>\r\n    </div>\r\n    <div *ngSwitchDefault>\r\n      <mat-icon [inline]=\"true\" [svgIcon]=\"randImg\" class=\"image\"></mat-icon>\r\n      <p class=\"phrase\">{{randPhrase}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/page-not-found/page-not-found.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/content/page-not-found/page-not-found.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%; }\n\n.phrase {\n  text-align: center; }\n\n.image {\n  display: block;\n  padding: 20px; }\n\n.udaman {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n\n.pepeText {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  color: #00bd00; }\n\n@media screen and (min-width: 1000px) {\n  .image {\n    height: 30vh; } }\n\n@media screen and (max-width: 1000px) {\n  .image {\n    height: 50vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3BhZ2Utbm90LWZvdW5kL0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXFdlYnNpdGVEZXZSZXBvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250ZW50XFxwYWdlLW5vdC1mb3VuZFxccGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsY0FBYSxFQUNkOztBQUVEO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLGVBQWMsRUFDZjs7QUFFRDtFQUNFO0lBQ0UsYUFBWSxFQUNiLEVBQUE7O0FBR0g7RUFDRTtJQUNFLGFBQVksRUFDYixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnBocmFzZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi51ZGFtYW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGVwZVRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDBiZDAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAuaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmltYWdlIHtcclxuICAgIGhlaWdodDogNTB2dztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/content/page-not-found/page-not-found.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/content/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(http) {
        var _this = this;
        this.http = http;
        // can read this from config later
        this.randAssets = 'assets/';
        var assetsUrl = this.randAssets + '404phrases.json';
        // choose a random phrase
        this.http.get(assetsUrl)
            .subscribe(function (res) {
            // make sure there are phrases
            if (!res.assets || (res.assets.length < 1)) {
                return;
            }
            // get a random value
            var randNum = Math.floor(Math.random() * res.assets.length);
            // set the image and phrase to show
            _this.randImg = res.assets[randNum].img;
            _this.randPhrase = res.assets[randNum].phrase;
        });
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/content/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/content/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/content/work-exp-content/work-exp-content.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/content/work-exp-content/work-exp-content.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div *ngFor=\"let exp of experience\" class=\"workexp\">\r\n    <h2>{{exp.role}}</h2>\r\n    <button mat-flat-button color=\"primary\"\r\n    (click)=\"openLink(exp.link)\">{{exp.name}}</button>\r\n    <h3>{{exp.date}}</h3>\r\n    <p>{{exp.description}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/work-exp-content/work-exp-content.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/content/work-exp-content/work-exp-content.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  height: 100%; }\n\n.workexp {\n  text-align: center;\n  padding: 30px 0; }\n\nbutton {\n  margin: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3dvcmstZXhwLWNvbnRlbnQvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcV2Vic2l0ZURldlJlcG8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRlbnRcXHdvcmstZXhwLWNvbnRlbnRcXHdvcmstZXhwLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvd29yay1leHAtY29udGVudC93b3JrLWV4cC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLndvcmtleHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/content/work-exp-content/work-exp-content.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/content/work-exp-content/work-exp-content.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkExpContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExpContentComponent", function() { return WorkExpContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkExpContentComponent = /** @class */ (function () {
    function WorkExpContentComponent() {
        this.experience = list;
    }
    WorkExpContentComponent.prototype.ngOnInit = function () {
    };
    WorkExpContentComponent.prototype.openLink = function (link) {
        if (link) {
            window.open(link, '_blank');
        }
    };
    WorkExpContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-exp-content',
            template: __webpack_require__(/*! ./work-exp-content.component.html */ "./src/app/components/content/work-exp-content/work-exp-content.component.html"),
            styles: [__webpack_require__(/*! ./work-exp-content.component.scss */ "./src/app/components/content/work-exp-content/work-exp-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkExpContentComponent);
    return WorkExpContentComponent;
}());

var list = [
    {
        role: 'Junior Engineer',
        name: 'Envitia',
        link: 'https://www.envitia.com/',
        date: 'Aug 2018 - Current',
        description: 'Working as part of the web development team, working on various projects, involving AngularJS ' +
            'and Java. The projects I contributed to ranged from geospatial software to data analytics software'
    },
    {
        role: 'Student Demonstrator',
        name: 'University of Reading',
        link: 'http://www.reading.ac.uk/',
        date: 'Oct 2017 - Apr 2018',
        description: 'The job required the ability to assist the lecturer(s) in the practical portion of the Programming module;' +
            ' therefore also requiring an extensive knowledge of programming concepts and experience in the main IDE and programming' +
            'language (Visual Studio and C/C++) chosen by the university to teach the module with. Additional requirements from the ' +
            'role was to ensure the students completed the tasks and to mark their tasks sheets to verify that the task is indeed complete,' +
            ' as well as resolving any issues which may arise, such as compiler errors which the students may require help with.'
    },
    {
        role: 'Kitchen Worker',
        name: 'A&T Healthcare',
        link: 'http://healthlovingcare.com/',
        date: 'Sept 2017 - Oct 2017',
        description: 'The job role required helping nurses organise the food for lunch and supper of the nursing home residents as well as ' +
            'serving tea and coffee to everyone, including visitors, during tea times. Part of the job also requires cleaning dishes and' +
            ' cutlery as well as maintaining the cleanliness and organisation of the kitchen area.'
    },
    {
        role: 'Staff Member',
        name: 'KFC Horsham',
        link: '',
        date: 'Aug 2012 - Sep 2016',
        description: 'Working in 3 different sections of the shop; front, middle and back. Front section requires serving customers, middle section ' +
            'requires making burger orders, side items as well as maintaining the amount of prepared food items. The back section required ' +
            'organisation of the storage room as well as transferring items from the storage room to the front and middle section. ' +
            'The role also required the maintenance of the cleanliness of the eating area as well as ensuring the customers are comfortable.'
    }
];


/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-toolbar>\r\n    <mat-icon svgIcon=\"crescent\" color=\"accent\" class=\"crescentIcon\"></mat-icon>\r\n  </mat-toolbar>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  bottom: 0;\n  position: fixed; }\n\n.crescentIcon {\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcV2Vic2l0ZURldlJlcG8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBUztFQUNULGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxlQUFjO0VBQ2QsVUFBUyxFQUNWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5jcmVzY2VudEljb24ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3R0b206IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <mat-toolbar color=\"primary\" class=\"toolbar\">\r\n    <div class=\"mobileItem\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menuNavigation\">\r\n        <mat-icon svgIcon=\"menu\"></mat-icon>\r\n      </button>\r\n      <mat-menu #menuNavigation=\"matMenu\">\r\n        <button class=\"navMenuButton\" *ngFor=\"let link of routeLinks\" [routerLink]=\"link.link\" mat-menu-item>{{link.label}}</button>\r\n      </mat-menu>\r\n    </div>\r\n    <mat-icon svgIcon=\"logotext\" class=\"logoText\"></mat-icon>\r\n    <span class=\"toolbar-spacer\"></span>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"settings\">\r\n      <mat-icon svgIcon=\"extra\"></mat-icon>\r\n    </button>\r\n    <mat-menu #settings=\"matMenu\">\r\n      <button mat-menu-item (click)=\"openCV()\">\r\n        <mat-icon svgIcon=\"cv\"></mat-icon>\r\n        <span>CV</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"openGithub()\">\r\n        <mat-icon svgIcon=\"github\"></mat-icon>\r\n        <span>Github</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"openLinkedIn()\">\r\n        <mat-icon class=\"icon\" svgIcon=\"linkedin\"></mat-icon>\r\n        <span>LinkedIn</span>\r\n      </button>\r\n      <div class=\"settingsMenu\">\r\n        <div mat-menu-item>\r\n          <mat-slide-toggle color=\"primary\" [checked]=\"darkTheme\" (change)=\"toggleAppTheme()\">\r\n            <span>Dark Theme</span>\r\n          </mat-slide-toggle>\r\n        </div>\r\n      </div>\r\n    </mat-menu>\r\n  </mat-toolbar>\r\n  <div class=\"desktopItem\">\r\n    <nav mat-tab-nav-bar mat-stretch-tabs>\r\n      <a mat-tab-link *ngFor=\"let link of routeLinks\" [routerLink]=\"link.link\" routerLinkActive #rla=\"routerLinkActive\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\" [active]=\"rla.isActive\" (click)=\"activeLinkIndex = link.index\">\r\n        {{link.label}}\r\n      </a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoText {\n  height: 32px;\n  width: 144px; }\n\n.toolbar {\n  display: flex; }\n\n.toolbar-spacer {\n  flex: 1 1 auto; }\n\n.navMenuButton.mat-menu-item {\n  text-align: center; }\n\n.settingsMenu {\n  padding: 5px 5px;\n  margin-top: 50px; }\n\n::ng-deep .mat-slide-toggle-content {\n  padding: 0 10px;\n  text-align: right; }\n\n.navMenuButton {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 50px; }\n\nmat-icon, mat-icon.mat-menu-item {\n  padding: 0 10px; }\n\n@media screen and (min-width: 1000px) {\n  .mobileItem {\n    display: none; } }\n\n@media screen and (max-width: 1000px) {\n  .desktopItem {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXFdlYnNpdGVEZXZSZXBvL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGFBQVksRUFDYjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGtCQUNGLEVBQUM7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRTtJQUNFLGNBQWEsRUFDZCxFQUFBOztBQUdIO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29UZXh0IHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDE0NHB4O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRvb2xiYXItc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm5hdk1lbnVCdXR0b24ubWF0LW1lbnUtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2V0dGluZ3NNZW51IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7IFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0XHJcbn1cclxuXHJcbi5uYXZNZW51QnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwIDUwcHg7XHJcbn1cclxuXHJcbm1hdC1pY29uLCBtYXQtaWNvbi5tYXQtbWVudS1pdGVtIHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5tb2JpbGVJdGVtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuZGVza3RvcEl0ZW0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(router) {
        this.router = router;
        // dark mode theme is used or not
        this.darkTheme = true;
        // emit dark theme toggle
        this.toggleTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // current tab index
        this.activeLinkIndex = 0;
        this.routeLinks = [
            {
                label: 'Introduction',
                link: '/home',
                index: 0
            }, {
                label: 'Experience',
                link: '/work-exp',
                index: 1
            }, {
                label: 'Education',
                link: '/edu',
                index: 2
            }, {
                label: 'Extra Skills',
                link: '/extra',
                index: 3
            }, {
                label: 'Contact',
                link: 'contact',
                index: 4
            }
        ];
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex =
                _this.routeLinks.indexOf(_this.routeLinks.find(function (tab) { return tab.link === '.' + _this.router.url; }));
        });
    };
    /**
     * toggles between dark theme and light theme
     */
    ToolbarComponent.prototype.toggleAppTheme = function () {
        this.toggleTheme.emit(this.darkTheme);
    };
    /**
     * opens the CV in another tab
     */
    ToolbarComponent.prototype.openCV = function () {
        window.open('assets/docs/CzarEchavezCV.pdf', '_blank');
    };
    /**
     * opens my linkedin page in another tab
     */
    ToolbarComponent.prototype.openLinkedIn = function () {
        window.open('https://www.linkedin.com/in/czarec', '_blank');
    };
    /**
     * opens my github page in another tab
     */
    ToolbarComponent.prototype.openGithub = function () {
        window.open('https://github.com/Czar-Ec/', '_blank');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "toggleTheme", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_content_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/content/home-content/home-content.component */ "./src/app/components/content/home-content/home-content.component.ts");
/* harmony import */ var _components_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/content/page-not-found/page-not-found.component */ "./src/app/components/content/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_content_work_exp_content_work_exp_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/content/work-exp-content/work-exp-content.component */ "./src/app/components/content/work-exp-content/work-exp-content.component.ts");
/* harmony import */ var _components_content_education_content_education_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/content/education-content/education-content.component */ "./src/app/components/content/education-content/education-content.component.ts");
/* harmony import */ var _components_content_extra_content_extra_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/content/extra-content/extra-content.component */ "./src/app/components/content/extra-content/extra-content.component.ts");
/* harmony import */ var _components_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/content/contact/contact.component */ "./src/app/components/content/contact/contact.component.ts");









var routes = [
    // automatically reroute to home when just the base URL is given
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: _components_content_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_3__["HomeContentComponent"] },
    { path: 'work-exp', component: _components_content_work_exp_content_work_exp_content_component__WEBPACK_IMPORTED_MODULE_5__["WorkExpContentComponent"] },
    { path: 'edu', component: _components_content_education_content_education_content_component__WEBPACK_IMPORTED_MODULE_6__["EducationContentComponent"] },
    { path: 'extra', component: _components_content_extra_content_extra_content_component__WEBPACK_IMPORTED_MODULE_7__["ExtraContentComponent"] },
    { path: 'contact', component: _components_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    // 404 page
    { path: '404', component: _components_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
    {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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

module.exports = __webpack_require__(/*! C:\Users\User\Documents\GitHub\WebsiteDevRepo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map