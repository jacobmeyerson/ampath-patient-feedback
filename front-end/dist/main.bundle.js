webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionnaire_questionnaire_component__ = __webpack_require__("./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locations_locations_component__ = __webpack_require__("./src/app/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clinic_type_clinic_type_component__ = __webpack_require__("./src/app/clinic-type/clinic-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__success_success_component__ = __webpack_require__("./src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cancel_page_cancel_page_component__ = __webpack_require__("./src/app/cancel-page/cancel-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'location',
        component: __WEBPACK_IMPORTED_MODULE_4__locations_locations_component__["a" /* LocationsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]],
    },
    {
        path: 'location/:location/clinic',
        component: __WEBPACK_IMPORTED_MODULE_9__clinic_type_clinic_type_component__["a" /* ClinicTypeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'location/:location/clinic/:clinicId/survey/:surveyId/welcome',
        component: __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'location/:location/clinic/:clinicType/survey/:surveyId/start',
        component: __WEBPACK_IMPORTED_MODULE_2__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'location/:location/success',
        component: __WEBPACK_IMPORTED_MODULE_11__success_success_component__["a" /* SuccessComponent */]
    },
    {
        path: 'location/:location/cancel',
        component: __WEBPACK_IMPORTED_MODULE_12__cancel_page_cancel_page_component__["a" /* CancelPageComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" *ngIf=\"showNavbar\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n        aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/ampath1.png\" style=\"width: 1em;\" alt=\"logo\"></a>\r\n      <a class=\"navbar-brand\" href=\"#\">POC Patient Feedback</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a style=\"cursor: pointer;\"(click)=\"onLogout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.showNavbar = false;
    }
    AppComponent.prototype.onLogout = function () {
        this.httpService.logout().subscribe();
        window.sessionStorage.removeItem('auth.credentials');
        this.router.navigate(['login']);
    };
    AppComponent.prototype.ngDoCheck = function () {
        var credentials = sessionStorage.getItem('auth.credentials');
        if (credentials) {
            this.showNavbar = true;
        }
        else {
            this.showNavbar = false;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_component__ = __webpack_require__("./src/app/survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__survey_editor_component__ = __webpack_require__("./src/app/survey.editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionnaire_questionnaire_component__ = __webpack_require__("./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__locations_locations_component__ = __webpack_require__("./src/app/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__clinic_type_clinic_type_component__ = __webpack_require__("./src/app/clinic-type/clinic-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__success_success_component__ = __webpack_require__("./src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cancel_page_cancel_page_component__ = __webpack_require__("./src/app/cancel-page/cancel-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__survey_component__["a" /* SurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__survey_editor_component__["a" /* SurveyEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__locations_locations_component__["a" /* LocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__clinic_type_clinic_type_component__["a" /* ClinicTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__success_success_component__["a" /* SuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_17__cancel_page_cancel_page_component__["a" /* CancelPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */],],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var credentials = sessionStorage.getItem('auth.credentials');
        if (credentials) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/cancel-page/cancel-page.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh3 {\r\n  font-size: 1.7em;\r\n  color: #607D8B;\r\n  margin-top: 0;\r\n  text-align: left;\r\n}\r\nh4 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-left: 0;\r\n  text-align:left; \r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  text-align: left;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/cancel-page/cancel-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" >\r\n      <h3>You have just cancelled the survey</h3>\r\n      <h4>Please hand the tablet back to the clinic staff</h4>\r\n      <br><br>\r\n      <div style=\"text-align: left;\" class=\"footer\">\r\n        <a routerLink=\"../clinic\">Start new survey</a>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/cancel-page/cancel-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CancelPageComponent = /** @class */ (function () {
    function CancelPageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    CancelPageComponent.prototype.onRestart = function () {
        this.router.navigate(['/clinic'], { relativeTo: this.route });
    };
    CancelPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cancel-page',
            template: __webpack_require__("./src/app/cancel-page/cancel-page.component.html"),
            styles: [__webpack_require__("./src/app/cancel-page/cancel-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["a" /* ActivatedRoute */]])
    ], CancelPageComponent);
    return CancelPageComponent;
}());



/***/ }),

/***/ "./src/app/clinic-type/clinic-type.component.css":
/***/ (function(module, exports) {

module.exports = "#success_message{ display: none;}\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh3 {\r\n  font-size: 1.7em;\r\n  color: #607D8B;\r\n  margin-bottom: 0;\r\n  text-align:left; \r\n}\r\nh4 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-left: 0;\r\n  text-align:left; \r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.big-checkbox {width: 30px; height: 30px;}\r\n.button{\r\n  width: 8em;\r\n}\r\n.footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/clinic-type/clinic-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n      <h3>Select Clinic Types visited today:</h3>\r\n      <hr>\r\n        <div class=\"btn-group\" data-toggle=\"buttons\">\r\n          <label class=\"btn btn-default\" *ngFor=\"let clinic of clinicArray\" (click)=\"onNext(clinic)\">\r\n            <input type=\"radio\">{{ clinic }}\r\n          </label>\r\n        </div>\r\n  </div>\r\n  <div style=\"text-align: left;\" class=\"footer\">\r\n    <hr>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/clinic-type/clinic-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicTypeComponent = /** @class */ (function () {
    function ClinicTypeComponent(router, route) {
        this.router = router;
        this.route = route;
        this.clinicArray = ['DM', 'HTN', 'HIV'];
    }
    ClinicTypeComponent.prototype.onNext = function (clinicType) {
        var surveyId = 1;
        this.router.navigate([clinicType + '/survey/' + surveyId + '/welcome'], { relativeTo: this.route });
    };
    ClinicTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clinic-type',
            template: __webpack_require__("./src/app/clinic-type/clinic-type.component.html"),
            styles: [__webpack_require__("./src/app/clinic-type/clinic-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ClinicTypeComponent);
    return ClinicTypeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASEURL = 'http://localhost:3000/';
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getCredentials = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var credentials = sessionStorage.getItem('auth.credentials');
        headers.append('Authorization', 'Basic ' + credentials);
        return headers;
    };
    HttpService.prototype.getSurveys = function () {
        return this.http.get(BASEURL + 'getSurveys', {
            headers: this.getCredentials()
        });
    };
    HttpService.prototype.getLocations = function () {
        return this.http.get(BASEURL + 'getLocations', {
            headers: this.getCredentials()
        });
    };
    HttpService.prototype.storeSurveys = function (response) {
        return this.http.post(BASEURL + 'storeSurveys', response, {
            headers: this.getCredentials()
        });
    };
    HttpService.prototype.login = function (response) {
        return this.http.post(BASEURL + 'login', response, {
            headers: this.getCredentials()
        });
    };
    HttpService.prototype.logout = function () {
        return this.http.get(BASEURL + 'logout', {
            headers: this.getCredentials()
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/locations/locations.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n}\r\nh3 {\r\n    font-size: 1.7em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\nselect{\r\n  height: 3em;\r\n  width: 25em;\r\n}\r\nbutton{\r\n  width: 7em;\r\n  height: 3em\r\n}"

/***/ }),

/***/ "./src/app/locations/locations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"input-group\" style=\"margin-left: 1em\">      \r\n      <select id=\"exampleFormControlSelect1\" #location>\r\n        <option selected disabled>Select Location</option>\r\n        <option *ngFor=\"let location of locationArray\">{{ location.name }}</option>\r\n      </select>\r\n      <span>\r\n        <button type=\"button\" (click)=\"onSave(location.value)\" class=\"btn btn-primary btn-md\">Save</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/locations/locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(router, httpService, route) {
        this.router = router;
        this.httpService = httpService;
        this.route = route;
    }
    LocationsComponent.prototype.onSave = function (location) {
        if (location !== 'Select Location') {
            var uuid = void 0;
            for (var _i = 0, _a = this.locationArray; _i < _a.length; _i++) {
                var loc = _a[_i];
                if (loc.name === location) {
                    uuid = loc.uuid;
                }
            }
            this.router.navigate([uuid + '/clinic'], { relativeTo: this.route });
        }
    };
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getLocations().subscribe(function (response) {
            _this.locationArray = response.json();
        });
    };
    LocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locations',
            template: __webpack_require__("./src/app/locations/locations.component.html"),
            styles: [__webpack_require__("./src/app/locations/locations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color:#f9fafc;\r\n}\r\n.wrapper {\r\n  background-color: inherit;\r\n}\r\n.login section.login-wrapper {\r\n  position: absolute;\r\n  left:0;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  z-index: 9;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n.login section .content-body {\r\n  padding: 50px;\r\n  position: relative;\r\n  top: 35%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  display: inline-block;\r\n  width: 400px;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  background-color: #fff;\r\n  -webkit-box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15);\r\n          box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15);\r\n  font-size: 14px;\r\n  border-radius: 8px;\r\n  border: 1px solid rgba(34, 36, 38, .15);\r\n}\r\n.login section .banner {\r\n  margin-bottom: 40px;\r\n}\r\n.login .error {\r\n  color: #d9534f;\r\n  font-size: 16px;\r\n  padding: 15px;\r\n}\r\n.login .login-buttons {\r\n  margin-top: 12px;\r\n}\r\n.form-group-lg {\r\n  margin-bottom: 12px;\r\n}\r\nfooter .inline {\r\n  display: inline-block;\r\n  margin-right: 12px;\r\n}\r\nfooter .inline p, footer a.inline {\r\n  margin: 0px;\r\n  line-height: 32px;\r\n}\r\n.clear {\r\n  clear: both;\r\n}\r\nbutton.btn-primary  {\r\n  padding-left:36px;\r\n  padding-right: 36px;\r\n}\r\n@media (min-width: 768px) {\r\n  .login-container {\r\n      width: 400px;\r\n  }\r\n  footer p {\r\n    font-size: 16px !important;\r\n  }\r\n}\r\n#logo {\r\n  height: 70px;\r\n  width: 220px;\r\n  margin: 0 auto;\r\n  background: url('/assets/ampath.png') no-repeat center center;\r\n  background-size: contain;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Adapted from ng2-amrs login html-->\r\n<div class=\"login\" >\r\n  <section class=\"login-wrapper\">\r\n    <div class=\"content-body padding-bottom-30\">\r\n      <div class=\"banner\">\r\n        <div id=\"logo\"></div>\r\n        <div class=\"clear\"></div>\r\n      </div>\r\n      <form class=\"margin-bottom-0\" role=\"form\"\r\n            (submit)=\"onLogin(username.value, password.value)\">\r\n        <div class=\"form-group-lg\">\r\n          <input class=\"form-control input-lg\" id=\"username\" type=\"text\" #username=\"\"\r\n                 placeholder=\"Username\"/>\r\n        </div>\r\n        <div class=\"form-group-lg\">\r\n          <input class=\"form-control input-lg\" id=\"password\" type=\"password\" #password=\"\"\r\n                 placeholder=\"Password\"/>\r\n        </div>\r\n        <div class=\"login-buttons pull-right\">\r\n          <button class=\"btn btn-primary btn-lg\" type=\"submit\">Log In</button>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n      </form>\r\n      <div class=\"error\" *ngIf=\"showAlert\">Wrong username or password.</div>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.showAlert = false;
        this.authenticated = false;
    }
    LoginComponent.prototype.onLogin = function (username, password) {
        var _this = this;
        var loginCallback = function (authenticated) {
            if (authenticated) {
                var base64 = btoa(username + ':' + password);
                window.sessionStorage.setItem('auth.credentials', base64);
            }
            else {
                _this.showAlert = true;
            }
            _this.router.navigate(['../location']);
        };
        this.httpService.login({ username: username, password: password }).subscribe(function (response) {
            loginCallback(response.json().isValid);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.css":
/***/ (function(module, exports) {

module.exports = ".sv_header{\r\n    background-color: white;\r\n}"

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.html":
/***/ (function(module, exports) {

module.exports = "<survey \r\n    [json]=\"json\"\r\n    (onCompleteClicked)=\"onSurveyDone($event)\">\r\n</survey>"

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(httpService, router, route) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getSurveys().subscribe(function (response) {
            _this.json = response.json().survey;
        });
    };
    QuestionnaireComponent.prototype.onSurveyDone = function (response) {
        var _this = this;
        var date = new Date().toISOString().slice(0, 10);
        this.route.params.subscribe(function (params) {
            var encounterInfo = {
                'surveyId': params.surveyId,
                'location': params.location,
                'date': date,
                'department': params.clinicType,
                'clinicalProgramId': 1
            };
            var toServer = {
                'encounterInfo': encounterInfo,
                'responseInfo': response
            };
            _this.httpService.storeSurveys(toServer).subscribe();
        });
        this.router.navigate(['../../../../../success'], { relativeTo: this.route });
    };
    QuestionnaireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-questionnaire',
            template: __webpack_require__("./src/app/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__("./src/app/questionnaire/questionnaire.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh3 {\r\n  font-size: 1.7em;\r\n  color: #607D8B;\r\n  margin-top: 0;\r\n  text-align: left;\r\n}\r\nh4 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-left: 0;\r\n  text-align:left; \r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  text-align: left;\r\n  font-family: sans-serif;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n  cursor: pointer;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\" >\r\n      <h3>Thank you for your feedback</h3>\r\n      <h4>Please hand the tablet back to the clinic staff</h4>\r\n      <br><br>\r\n      <div style=\"text-align: left;\" class=\"footer\">\r\n      <a routerLink=\"../clinic\">Start new survey</a>\r\n      <hr>\r\n    </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("./src/app/success/success.component.html"),
            styles: [__webpack_require__("./src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular__ = __webpack_require__("./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__ = __webpack_require__("./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inputmask_dist_inputmask_phone_codes_phone_js__ = __webpack_require__("./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inputmask_dist_inputmask_phone_codes_phone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_inputmask_dist_inputmask_phone_codes_phone_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["icheck"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["select2"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["inputmask"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["jquerybarrating"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["jqueryuidatepicker"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["nouislider"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["select2tagbox"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["signaturepad"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["sortablejs"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["ckeditor"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["autocomplete"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["bootstrapslider"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["prettycheckbox"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_1_survey_angular__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
__WEBPACK_IMPORTED_MODULE_1_survey_angular__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
        // added by JM
        this.onCompleteClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(SurveyComponent.prototype, "json", {
        set: function (value) {
            var _this = this;
            var surveyModel = new __WEBPACK_IMPORTED_MODULE_1_survey_angular__["Model"](value);
            surveyModel.onAfterRenderQuestion.add(function (survey, options) {
                if (!options.question.popupdescription)
                    return;
                //Add a button;
                var btn = document.createElement("button");
                btn.className = "btn btn-info btn-xs";
                btn.innerHTML = "More Info";
                var question = options.question;
                btn.onclick = function () {
                    //showDescription(question);
                    alert(options.question.popupdescription);
                };
                var header = options.htmlElement.querySelector("h5");
                var span = document.createElement("span");
                span.innerHTML = "  ";
                header.appendChild(span);
                header.appendChild(btn);
            });
            __WEBPACK_IMPORTED_MODULE_1_survey_angular__["SurveyNG"].render("surveyElement", { model: surveyModel });
            // added by JM
            surveyModel.onComplete.add(function (sender, options) {
                _this.onCompleteClicked.emit(sender.data);
            });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SurveyComponent.prototype, "onCompleteClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SurveyComponent.prototype, "json", null);
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "survey",
            template: "<div class=\"survey-container contentcontainer codecontainer\"><div id=\"surveyElement\"></div></div>"
        })
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/survey.editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__("./node_modules/survey-knockout/survey.ko.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__ = __webpack_require__("./node_modules/surveyjs-editor/surveyeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__ = __webpack_require__("./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inputmask_dist_inputmask_phone_codes_phone_js__ = __webpack_require__("./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inputmask_dist_inputmask_phone_codes_phone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_inputmask_dist_inputmask_phone_codes_phone_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["icheck"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["select2"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["inputmask"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["jquerybarrating"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["jqueryuidatepicker"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["nouislider"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["select2tagbox"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["signaturepad"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["sortablejs"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["ckeditor"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["autocomplete"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["bootstrapslider"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
var CkEditor_ModalEditor = {
    afterRender: function (modalEditor, htmlElement) {
        var editor = window["CKEDITOR"].replace(htmlElement);
        editor.on("change", function () {
            modalEditor.editingValue = editor.getData();
        });
        editor.setData(modalEditor.editingValue);
    },
    destroy: function (modalEditor, htmlElement) {
        var instance = window["CKEDITOR"].instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            window["CKEDITOR"].remove(instance);
        }
    }
};
__WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__["SurveyPropertyModalEditor"].registerCustomWidget("html", CkEditor_ModalEditor);
var SurveyEditorComponent = /** @class */ (function () {
    function SurveyEditorComponent() {
        var _this = this;
        this.surveySaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.saveMySurvey = function () {
            console.log(JSON.stringify(_this.editor.text));
            _this.surveySaved.emit(JSON.parse(_this.editor.text));
        };
    }
    SurveyEditorComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
        __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
        var editorOptions = { showEmbededSurveyTab: true, generateValidJSON: true };
        this.editor = new __WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__["SurveyEditor"]("surveyEditorContainer", editorOptions);
        this.editor.text = JSON.stringify(this.json);
        this.editor.saveSurveyFunc = this.saveMySurvey;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SurveyEditorComponent.prototype, "json", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SurveyEditorComponent.prototype, "surveySaved", void 0);
    SurveyEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "survey-editor",
            template: "<div id=\"surveyEditorContainer\"></div>"
        })
    ], SurveyEditorComponent);
    return SurveyEditorComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.7em;\r\n  color: #607D8B;\r\n  margin-top: 0;\r\n  text-align:left; \r\n}\r\n\r\nh4 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-left: 0;\r\n  }\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  text-align: left;\r\n  font-family: sans-serif;\r\n}\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n.button{\r\n  line-height: 0.8em; /* <- changed this */\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\" >\r\n      <h3>WELCOME</h3>\r\n      <h4>Your feedback will be highly appreciated.</h4>\r\n      <br><br>\r\n      <br><br>\r\n      <hr>\r\n      <div class=\"row center\">\r\n      <div class=\"col-xs-3 col-xs-offset-0 col-sm-3 col-sm-offset-0 col-md-2 col-md-offset-0\" >\r\n      <button type=\"button\" class=\"btn btn-primary button \" (click)=\"onCancel()\">Cancel survey</button>\r\n      </div>\r\n      <div class=\"col-xs-9 col-sm-9 col-md-10\" >\r\n      <button type=\"button\"  class=\"btn btn-primary button pull-right\" (click)=\"onStart()\">Start survey</button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.onStart = function () {
        this.router.navigate(['../start'], { relativeTo: this.route });
    };
    WelcomeComponent.prototype.onCancel = function () {
        this.router.navigate(['../../../../../cancel'], { relativeTo: this.route });
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2_app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map