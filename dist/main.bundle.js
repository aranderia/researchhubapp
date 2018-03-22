webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(168),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homepage_homepage_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registerproject_registerproject_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewproject_viewproject_component__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_7__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__registerproject_registerproject_component__["a" /* RegisterprojectComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_10__viewproject_viewproject_component__["a" /* ViewprojectComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__registerproject_registerproject_component__["a" /* RegisterprojectComponent */],
            __WEBPACK_IMPORTED_MODULE_10__viewproject_viewproject_component__["a" /* ViewprojectComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = (function () {
    function HomepageComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        //console.log(this.dataService.getProjectList())
        this.dataService.getProjectList().subscribe(function (heroes) { return _this.projectList = heroes; });
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    // version1 = new Version(1,"This is a dummy abstract")
    // version2 = new Version(2,"This is a dummy abstract")
    // project =  new Project(1,"Predicting Survival in patients with brain tumor",["Aditeya Pandey","Michelle Borkin"],"This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.",[this.version1,this.version2]);
    // project1 = new Project(2,"Abstract Glyphs improve categorization accuracy",["Aditeya Pandey","Michelle Borkin"],"This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.",[this.version1,this.version2]);
    //
    // projectList= new ProjectList([this.project,this.project1])
    HomepageComponent.prototype.naviagteToProject = function (id) {
        console.log(id);
        // let link = [{
        //   outlets: {
        //     details: ['project', '1']
        //   }
        // }];
        this.router.navigate(['/project', id]);
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__(169),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], HomepageComponent);

var _a, _b, _c;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.invalidCredential = false;
        this.usernameInvalid = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */](1, 'Admin', 'Admin');
        this.usernameField = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.validateLogin = function (validInput) {
        var _this = this;
        if (validInput) {
            this.usernameField = '';
            this.passwordField = '';
        }
        else {
            this.dataService.loginValidation({ username: this.usernameField, password: this.passwordField }).subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/homepage']);
                }
                else {
                    _this.invalidCredential = true;
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(170),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterprojectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterprojectComponent = (function () {
    function RegisterprojectComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.showSecondAuthor = false;
        this.showThirdAuthor = false;
        this.icon1 = "glyphicon glyphicon-plus";
        this.projectName = "";
        this.author1 = "";
        this.author2 = "";
        this.author3 = "";
        this.author4 = "";
        this.author5 = "";
        this.author = { 1: this.author1, 2: this.author2, 3: this.author3, 4: this.author4, 5: this.author5 };
        this.projectLink = "";
        this.paperLink = "";
        this.abstract = "";
        this.githubLink = "";
        this.dockerhubLink = "";
        this.authorList = [];
        //Authors Counter
        this.totalAuthors = 1;
        this.publishonQuSandbox = false;
    }
    RegisterprojectComponent.prototype.ngOnInit = function () {
    };
    RegisterprojectComponent.prototype.addAuthor = function (element) {
        this.icon1 = "glyphicon glyphicon-minus";
        if (element == 2) {
            this.showSecondAuthor = true;
        }
        if (element == 3) {
            this.showThirdAuthor = true;
        }
        this.totalAuthors = this.totalAuthors + 1;
    };
    RegisterprojectComponent.prototype.removeAuthor = function () {
        if (this.totalAuthors == 2) {
            this.showSecondAuthor = false;
            this.totalAuthors = this.totalAuthors - 1;
        }
        if (this.totalAuthors == 3) {
            this.showThirdAuthor = false;
            this.totalAuthors = this.totalAuthors - 1;
        }
    };
    RegisterprojectComponent.prototype.registerProject = function (input) {
        this.author = { 1: this.author1, 2: this.author2, 3: this.author3, 4: this.author4, 5: this.author5 };
        for (var i = 1; i <= this.totalAuthors; i++) {
            this.authorList.push(this.author[i]);
        }
        console.log(this.authorList);
        var project = new __WEBPACK_IMPORTED_MODULE_1__models_project__["b" /* Project */](3, this.projectName, this.projectLink, this.authorList, this.paperLink, this.abstract, this.publishonQuSandbox, this.githubLink, this.dockerhubLink);
        if (!input) {
            this.dataService.addnewProject(project);
            alert("Project Added Successfully!");
            this.router.navigate(['/homepage']);
        }
    };
    return RegisterprojectComponent;
}());
RegisterprojectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-registerproject',
        template: __webpack_require__(171),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], RegisterprojectComponent);

var _a, _b, _c;
//# sourceMappingURL=registerproject.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewprojectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewprojectComponent = (function () {
    function ViewprojectComponent(route, dataService, sanitizer) {
        this.route = route;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
    }
    ViewprojectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            console.log(_this.id);
            _this.project = _this.dataService.getProjectById(_this.id);
            console.log(_this.project);
            // In a real app: dispatch action to load the details here.
        });
    };
    ViewprojectComponent.prototype.goGithub = function () {
    };
    ViewprojectComponent.prototype.goProjectHome = function () {
        window.open(this.project.projectLink, "_blank");
    };
    return ViewprojectComponent;
}());
ViewprojectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-viewproject',
        template: __webpack_require__(172),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], ViewprojectComponent);

var _a, _b, _c;
//# sourceMappingURL=viewproject.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\r\n\r\nnav > a {\r\n  color: #6b6c6c;\r\n  text-decoration: none;\r\n  font-size: 24px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<header id=\"topnav\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"logo\">\r\n          <a [routerLink]=\"['homepage']\">\r\n            <img src=\"../assets/images/logo.png\">\r\n            QU<span>Sandbox</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"menu clearfix\">\r\n\r\n          <a [routerLink]=\"['register']\">\r\n            Register Project\r\n          </a>\r\n\r\n          <a [routerLink]=\"['homepage']\">\r\n            Home\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<div class=\"col-sm-8 col-sm-offset-2\" style=\"margin-top: 100px\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div style=\"height: 880px\"></div>\r\n\r\n<footer >\r\n  <div class=\"topFooter\">\r\n    <a href=\"\">Terms & Conditions</a> |\r\n    <a href=\"\">Privacy Policy</a> |\r\n    <a href=\"\">Cookie Policy</a>\r\n  </div>\r\n  <div class=\"bottomFooter\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 alignLeft\">\r\n          Designed & Developed by: <a href=\"http://quantuniversity.com/\" target=\"_blank\">QuantUniversity</a>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          &copy; QuantUniversity, LLC. All rights reserved.\r\n        </div>\r\n        <div class=\"col-md-4 alignRight\">\r\n          <div class=\"socialLinks\">\r\n            <a href=\"https://www.facebook.com/pages/Quantuniversity/941465075911737\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a> |\r\n            <a href=\"https://twitter.com/quantuniversity\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a> |\r\n            <a href=\"https://www.linkedin.com/company/quantuniversity-llc-\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let project of projectList.projectList\" >\r\n  <button style=\"margin-left: 1%\" title=\"Delete Project\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n    <span  class=\"glyphicon glyphicon-trash\"></span>\r\n  </button>\r\n  <!--<button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\">-->\r\n    <!--<span class=\"glyphicon glyphicon-plus\"></span>-->\r\n  <!--</button>-->\r\n  <button title=\"Edit project\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n    <span class=\"glyphicon glyphicon-pencil\"></span>\r\n  </button>\r\n\r\n  <h3>{{project.projectName}} </h3>\r\n\r\n\r\n  <p><span *ngFor=\"let author of project.authors\">{{author}} </span></p>\r\n  <p><b>Abstract:</b> {{project.abstract}}</p>\r\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"naviagteToProject(project.projectid)\">View Project</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div id=\"backgroundImage\" class=\"rc-background-login\">\r\n  <div class=\"row rc-login-top-margin\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4 rc-margin loginBox card-box\">\r\n      <h2 class=\"text-center\">Sign In</h2>\r\n      <br>\r\n      <form #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"username\"  [(ngModel)]=\"usernameField\" name=\"user\"  required  #username=\"ngModel\">\r\n          <div  *ngIf=\"f.submitted && username.invalid \" class=\"alert alert-danger\">\r\n            Name is required\r\n          </div>\r\n          <div  *ngIf=\"usernameInvalid \" class=\"alert alert-danger\">\r\n            Username is invalid\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\"  [(ngModel)]=\"passwordField\" name=\"password\"  required #password=\"ngModel\">\r\n          <div  *ngIf=\"f.submitted && password.invalid \" class=\"alert alert-danger\">\r\n            Password is required\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <button  class=\"btn btn-success\" (click)=\"validateLogin(username.invalid || password.invalid)\" >Submit</button>\r\n\r\n        <div  *ngIf=\"invalidCredential \" class=\"alert alert-danger\">\r\n          Username or Password  is invalid\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div>\r\n<form (ngSubmit)=\"registerProject(projectname.invalid || author.invalid)\" #f=\"ngForm\">\r\n  <div  class=\"form-group\">\r\n    <label for=\"projectname\">Project Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"projectname\" [(ngModel)]=\"projectName\" name=\"projectname\" #projectname=\"ngModel\" required ngDefaultControl>\r\n    <div  *ngIf=\"f.submitted && projectname.invalid \"\r\n         class=\"alert alert-danger\">\r\n      ProjectName is required\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"projectlink\" >Project Link</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"projectlink\" [(ngModel)]=\"projectLink\" [ngModelOptions]=\"{standalone: true}\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"author1\">Author 1</label>\r\n    <input type=\"text\" id=\"author1\" class=\"form-control\" [(ngModel)]=\"author1\" [ngModelOptions]=\"{standalone: true}\" required name=\"author\"\r\n           #author=\"ngModel\">\r\n    <div  *ngIf=\"f.submitted && author.invalid \"\r\n         class=\"alert alert-danger\">\r\n      Author Name is required\r\n    </div>\r\n\r\n    <button id=\"a1button\" style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"addAuthor(2)\">\r\n      <span class=\"glyphicon glyphicon-plus\"></span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"showSecondAuthor\" class=\"form-group\">\r\n    <label for=\"authors2\">Author 2 </label>\r\n    <input type=\"text\" class=\"form-control\" id=\"authors2\" [(ngModel)]=\"author2\" [ngModelOptions]=\"{standalone: true}\" >\r\n    <button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\" (click)=\"removeAuthor()\">\r\n      <span class=\"glyphicon glyphicon-minus\"></span>\r\n    </button>\r\n    <button id=\"a2button\" style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\" (click)=\"addAuthor(3)\">\r\n      <span class=\"glyphicon glyphicon-plus\"></span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"showThirdAuthor\" class=\"form-group\">\r\n    <label for=\"authors2\">Author 3 </label>\r\n    <input type=\"text\" class=\"form-control\" id=\"authors3\" [(ngModel)]=\"author3\" [ngModelOptions]=\"{standalone: true}\" >\r\n    <button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\" (click)=\"removeAuthor()\">\r\n      <span class=\"glyphicon glyphicon-minus\"></span>\r\n    </button>\r\n    <button id=\"a3button\" style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\" (click)=\"addAuthor(3)\">\r\n      <span class=\"glyphicon glyphicon-plus\"></span>\r\n    </button>\r\n  </div>\r\n  <!--<div *ngIf=\"showThirdAuthor\" class=\"form-group\">-->\r\n    <!--<label for=\"authors3\">Author 2 </label>-->\r\n    <!--<input type=\"text\" class=\"form-control\" id=\"authors3\">-->\r\n    <!--<button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\">-->\r\n      <!--<span class=\"glyphicon glyphicon-minus\"></span>-->\r\n    <!--</button>-->\r\n    <!--<button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\">-->\r\n      <!--<span class=\"glyphicon glyphicon-plus\"></span>-->\r\n    <!--</button>-->\r\n  <!--</div>-->\r\n  <!--<div *ngIf=\"showFourthAuthor\" class=\"form-group\">-->\r\n    <!--<label for=\"authors4\">Author 2 </label>-->\r\n    <!--<input type=\"text\" class=\"form-control\" id=\"authors4\">-->\r\n    <!--<button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\">-->\r\n      <!--<span class=\"glyphicon glyphicon-minus\"></span>-->\r\n    <!--</button>-->\r\n    <!--<button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\">-->\r\n      <!--<span class=\"glyphicon glyphicon-plus\"></span>-->\r\n    <!--</button>-->\r\n  <!--</div>-->\r\n  <!--<div *ngIf=\"showFifthAuthor\" class=\"form-group\">-->\r\n    <!--<label for=\"authors5\">Author 2 </label>-->\r\n    <!--<input type=\"text\" class=\"form-control\" id=\"authors5\">-->\r\n    <!--<button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\">-->\r\n      <!--<span class=\"glyphicon glyphicon-minus\"></span>-->\r\n    <!--</button>-->\r\n    <!--<button style=\"margin-left: 1%\" title=\"Add new version\" type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"collapse\">-->\r\n      <!--<span class=\"glyphicon glyphicon-plus\"></span>-->\r\n    <!--</button>-->\r\n  <!--</div>-->\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"paperlink\">Paper Link</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"paperlink\" [(ngModel)]=\"paperLink\" [ngModelOptions]=\"{standalone: true}\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"abstract\">Abstract</label>\r\n    <textarea  class=\"form-control\" rows=\"5\" id=\"abstract\" [(ngModel)]=\"abstract\" [ngModelOptions]=\"{standalone: true}\">\r\n    </textarea>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"githubLink\">Github Link</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"githublink\" [(ngModel)]=\"github\" [ngModelOptions]=\"{standalone: true}\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"dockerhub\">Docker Hub Link</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"dockerhub\" [(ngModel)]=\"dockerhubLink\" [ngModelOptions]=\"{standalone: true}\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"ami\">AMI Id</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"ami\" [(ngModel)]=\"amiid\" [ngModelOptions]=\"{standalone: true}\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"quSandboxPublish\" [(ngModel)]=\"publishonQuSandbox\" [ngModelOptions]=\"{standalone: true}\">\r\n    <label class=\"form-check-label\" for=\"quSandboxPublish\">Publish on QuSandbox</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\"  >Submit</button>\r\n</form>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "\r\n  <h3>{{project.projectName}}</h3>\r\n  <p><span *ngFor=\"let author of project.authors\">{{author}} </span></p>\r\n\r\n\r\n  <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"goProjectHome()\">\r\n  <span class=\"glyphicon glyphicon-globe\"></span> Project Home\r\n</button>\r\n\r\n  <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"goGithub()\"> <i class=\"fa fa-github\"> </i> Github</button>\r\n  <a style=\"margin-left: 10px\" class=\"runOnQU\" href=\"http://54.190.31.78/#/runlab/deep-q-learning1513196511911\" target=\"_blank\">\r\n      <img src=\"../../assets/images/logo.png\">\r\n      <span class=\"text-primary\">QU</span><span style=\"color: #10c469\">Link</span>\r\n    </a>\r\n  <!--<button *ngIf=\"project.quSandbox\" type=\"submit\" class=\"btn btn-success btn-lg\"  >QU</button>-->\r\n\r\n\r\n<p><b>Abstract:</b> {{project.abstract}}</p>\r\n\r\n<iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(project.paperLink)' width=\"100%\" height=\"480\"></iframe>\r\n\r\n"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.apiURL = "http://www.google.com";
        this.data = {};
        this.version1 = new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Version */](1, "This is a dummy abstract", "", "", "");
        this.version2 = new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Version */](2, "This is a dummy abstract", "", "", "");
        this.project = new __WEBPACK_IMPORTED_MODULE_1__models_project__["b" /* Project */](1, "Predicting Survival in patients with brain tumor", "https://drive.google.com/open?id=0BwnGj5qD7BpXeUEtYnU4WV92TTQ", ["Supraja Krishnan", "Aditeya Pandey", "Micha Schwab"], "https://drive.google.com/file/d/1trYiXdkESfu9cWiwygksNeiAbUETPIxF/preview", "This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.", true, "", "");
        this.project1 = new __WEBPACK_IMPORTED_MODULE_1__models_project__["b" /* Project */](2, "Abstract Glyphs improve categorization accuracy", "https://drive.google.com/open?id=0BwnGj5qD7BpXeUEtYnU4WV92TTQ", ["Aditeya Pandey", "Michelle Borkin"], "https://drive.google.com/file/d/0BwnGj5qD7BpXMml5cmxEb0VURk0/preview", "This work aims to improve the understanding and treatment of the most common malignant primary brain tumor Glioblastoma (GBM). We are collaborating with doctors at Brigham and Womens Hospital and researchers at Dana Farber Cancer Institute. Recent studies have shown that the biggest correlation between the life expectancy of the patient and all available patient data such as cancer progression, patient age, and various parameters of the treatment is simply the initial progression of the cancer, suggesting that current treatments are not effective.", true, '', '');
        this.projects = { 1: this.project, 2: this.project1 };
        this.projectList = new __WEBPACK_IMPORTED_MODULE_1__models_project__["c" /* ProjectList */]([this.project, this.project1]);
        this.postData();
        //this.loginValidation({username:"aditeya",password:"password"})
    }
    DataService.prototype.addnewProject = function (project) {
        var currentProjects = this.projectList.projectList;
        currentProjects.push(project);
        this.projectList = new __WEBPACK_IMPORTED_MODULE_1__models_project__["c" /* ProjectList */](currentProjects);
        this.projects[3] = project;
    };
    DataService.prototype.getProjectList = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(this.projectList);
    };
    DataService.prototype.postData = function () {
        console.log("executing");
        this.http.get('http://127.0.0.1:8081/2').subscribe(function (data) {
            console.log(data.json());
        });
    };
    DataService.prototype.getProjectById = function (id) {
        return this.projects[id];
    };
    DataService.prototype.loginValidation = function (loginDetails) {
        return this.http.get("http://127.0.0.1:8081/login/" + JSON.stringify(loginDetails)).map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProjectList; });
/**
 * Created by aditeyapandey on 2/12/18.
 */
var Version = (function () {
    function Version(versionno, githubLink, dockerHublink, amiid, abstract) {
        this.versionno = versionno;
        this.githubLink = githubLink;
        this.dockerHublink = dockerHublink;
        this.amiid = amiid;
        this.abstract = abstract;
    }
    return Version;
}());

var Project = (function () {
    function Project(projectid, projectName, projectLink, authors, paperLink, abstract, quSandbox, githubLink, dockerHublink) {
        this.projectid = projectid;
        this.projectName = projectName;
        this.projectLink = projectLink;
        this.authors = authors;
        this.paperLink = paperLink;
        this.abstract = abstract;
        this.quSandbox = quSandbox;
        this.githubLink = githubLink;
        this.dockerHublink = dockerHublink;
    }
    return Project;
}());

var ProjectList = (function () {
    function ProjectList(projectList) {
        this.projectList = projectList;
    }
    return ProjectList;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 95;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.bundle.js.map