webpackJsonp([11],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscuelasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EscuelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EscuelasPage = (function () {
    function EscuelasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EscuelasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscuelasPage');
    };
    return EscuelasPage;
}());
EscuelasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-escuelas',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/escuelas/escuelas.html"*/'<!--\n  Generated template for the EscuelasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>escuelas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/escuelas/escuelas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EscuelasPage);

//# sourceMappingURL=escuelas.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redes_redes__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__procesos_procesos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__escuelas_escuelas__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unidades_unidades__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preguntas_preguntas__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.gotoRedes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__redes_redes__["a" /* RedesPage */]);
    };
    InicioPage.prototype.gotoProcesos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__procesos_procesos__["a" /* ProcesosPage */]);
    };
    InicioPage.prototype.gotoEscuelas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__escuelas_escuelas__["a" /* EscuelasPage */]);
    };
    InicioPage.prototype.gotoUnidades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__unidades_unidades__["a" /* UnidadesPage */]);
    };
    InicioPage.prototype.gotoPreguntas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__preguntas_preguntas__["a" /* PreguntasPage */]);
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n<ion-card>\n  <ion-card-header>\n    ¿Qué necesitas?\n  </ion-card-header>\n\n  <ion-list>\n    <button (click)="gotoRedes()" ion-item>\n      <ion-icon name="school" item-start></ion-icon>\n      Redes de Estudio\n    </button>\n\n    <button (click)="gotoProcesos()"ion-item>\n      <ion-icon name="medical" item-start></ion-icon>\n      Procesos\n    </button>\n\n    <button (click)="gotoEscuelas()"ion-item>\n      <ion-icon name="cafe" item-start></ion-icon>\n      Escuelas\n    </button>\n\n    <button (click)="gotoUnidades()"ion-item>\n      <ion-icon name="paw" item-start></ion-icon>\n      Unidades Académicas\n    </button>\n\n\n    <button (click)="gotoPreguntas()" ion-item>\n      <ion-icon name="planet" item-start></ion-icon>\n      Preguntas Frecuentes\n    </button>\n\n  </ion-list>\n</ion-card>\n</form> \n</ion-content>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/inicio/inicio.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], InicioPage);

var _a, _b;
//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datafinder__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pensum_pensum__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedesPage = (function () {
    function RedesPage(navCtrl, navParams, datafinder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datafinder = datafinder;
        this.searchQuery = '';
        this.initializeItems();
    }
    RedesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.datafinder.getJSONData("../../Data/data.json").then(function (data) {
            _this.carreras = data.Carreras;
        });
    };
    RedesPage.prototype.initializeItems = function () {
        this.items = [
            '01 Ingenieria Civil',
            '01 Ingenieria Civil 2017',
            '02 Ingenieria Quimica',
            '03 Ingenieria Mecanica',
            '04 Ingenieria Electrica',
            '05 Ingenieria Industrial',
            '06 Ingenieria Mecanica Electrica',
            '07 Ingenieria Mecanica Industrial',
            '09 Ingenieria en Ciencias y Sistemas',
            '13 Ingenieria Electronica',
            '35 Ingenieria Ambiental',
            'Licenciatura en Matematica',
            'Licenciatura en Fisica'
        ];
    };
    RedesPage.prototype.seleccion = function (carrera) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pensum_pensum__["a" /* PensumPage */], { "carrera": carrera });
    };
    return RedesPage;
}());
RedesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-redes',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/redes/redes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Redes de Estudio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n<form>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let carrera of carreras" (click)="seleccion(carrera)">\n        {{carrera.codigo}}\n        {{carrera.nombre}}\n      </ion-item>\n    </ion-list>\n</form>\n</ion-content>\n\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/redes/redes.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__datafinder__["a" /* DataFinder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__datafinder__["a" /* DataFinder */]) === "function" && _c || Object])
], RedesPage);

var _a, _b, _c;
//# sourceMappingURL=redes.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFinder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataFinder = (function () {
    function DataFinder(http) {
        this.http = http;
    }
    /*
       Gets data with a promise which will return with the data when the task is complete
       Uses generic type T to define schema interface to ensure returning json matches schema template.
    */
    DataFinder.prototype.getJSONData = function (filePath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(filePath)
                .subscribe(function (res) {
                if (!res.ok) {
                    reject("Failed with status: " + res.status + "\nTrying to find fil at " + filePath);
                }
                var jsonRes = res.json();
                resolve(jsonRes);
            });
        }).catch(function (reason) { return _this.handleError(reason); });
    };
    /* Takes an error, logs it to the console, and throws it */
    DataFinder.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DataFinder;
}());
DataFinder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    /*
    * Uses Injected HTTP service in order to find files and return them as usable data objects
    */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DataFinder);

//# sourceMappingURL=datafinder.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PensumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PensumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PensumPage = (function () {
    function PensumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carrera = this.navParams.get("carrera");
    }
    PensumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PensumPage');
    };
    return PensumPage;
}());
PensumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-pensum',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/pensum/pensum.html"*/'<!--\n  Generated template for the PensumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{carrera.codigo}} {{carrera.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides pager>\n    <ion-slide *ngFor="let semestre of carrera.semestres">\n      Semestre {{semestre.numero}}\n      <ion-list>\n          <ion-item *ngFor="let area of semestre.areas">\n              {{area.nombre}}\n            <ion-list>\n              <button ion-item *ngFor="let curso of area.cursos">\n                {{curso.codigo}}\n                {{curso.nombre}}\n                {{curso.creditos}}\n                {{curso.tipo}}\n              </button>\n            </ion-list>\n            </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/pensum/pensum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PensumPage);

//# sourceMappingURL=pensum.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcesosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProcesosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcesosPage = (function () {
    function ProcesosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProcesosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcesosPage');
    };
    return ProcesosPage;
}());
ProcesosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-procesos',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/procesos/procesos.html"*/'<!--\n  Generated template for the ProcesosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>procesos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/procesos/procesos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProcesosPage);

//# sourceMappingURL=procesos.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UnidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnidadesPage = (function () {
    function UnidadesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnidadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnidadesPage');
    };
    return UnidadesPage;
}());
UnidadesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-unidades',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/unidades/unidades.html"*/'<!--\n  Generated template for the UnidadesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>unidades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  </ion-tabs>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/unidades/unidades.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], UnidadesPage);

//# sourceMappingURL=unidades.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PreguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreguntasPage = (function () {
    function PreguntasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreguntasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreguntasPage');
    };
    return PreguntasPage;
}());
PreguntasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-preguntas',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/preguntas/preguntas.html"*/'<!--\n  Generated template for the PreguntasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>preguntas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/preguntas/preguntas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PreguntasPage);

//# sourceMappingURL=preguntas.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* GooglePlus */].login({
            'webClientId': '449937519255-9hb7bikfdpjnk369jkmi91kpl6tjf6ra.apps.googleusercontent.com'
        }).then(function (res) {
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
            console.log("éxito");
        }, function (err) {
            /*console.log(err);
            let loader = this.loadingCtrl.create({
              content: "Please wait...",
              duration: 2000
            });
            loader.present();*/
            console.log("fallido");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
        });
    };
    LoginPage.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* GooglePlus */].logout().then(function () {
            console.log("logged out");
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('estas en LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/login/login.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n      <ion-item text-center>\n        <ion-img width="192" height="192" src="assets/logo.png" ></ion-img>\n      </ion-item>\n    </ion-list>\n    \n  </form>\n  <div text-center>\n      <button ion-button full (click)="login()">Login con Google</button>\n    <a ion-button block clear (click)="goToSignup()">\n      Nueva cuenta\n    </a>\n    <a ion-button block clear (click)="goToResetPassword()">\n      Olvide password\n    </a>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/escuelas/escuelas.module": [
		818,
		10
	],
	"../pages/inicio/inicio.module": [
		819,
		9
	],
	"../pages/login/login.module": [
		820,
		8
	],
	"../pages/pensum-civil/pensum-civil.module": [
		821,
		0
	],
	"../pages/pensum/pensum.module": [
		822,
		7
	],
	"../pages/preguntas/preguntas.module": [
		823,
		6
	],
	"../pages/procesos/procesos.module": [
		824,
		5
	],
	"../pages/prueba/prueba.module": [
		825,
		4
	],
	"../pages/redes/redes.module": [
		826,
		3
	],
	"../pages/tab-menu/tab-menu.module": [
		827,
		2
	],
	"../pages/unidades/unidades.module": [
		828,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PruebaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PruebaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PruebaPage = (function () {
    function PruebaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    PruebaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PruebaPage');
    };
    return PruebaPage;
}());
PruebaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-prueba',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/prueba/prueba.html"*/'<!--\n  Generated template for the PruebaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Slides</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="tutorial-page">\n  \n    <ion-slides pager>\n      <ion-slide *ngFor="let slide of slides">\n        <ion-toolbar>\n          <ion-buttons end>\n            <button ion-button color="primary">Skip</button>\n          </ion-buttons>\n        </ion-toolbar>\n        <img [src]="slide.image" class="slide-image"/>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        <p [innerHTML]="slide.description"></p>\n      </ion-slide>\n      <ion-slide>\n        <ion-toolbar>\n        </ion-toolbar>\n        <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n        <h2 class="slide-title">Ready to Play?</h2>\n        <button ion-button large clear icon-end color="primary">\n          Continue\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/prueba/prueba.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PruebaPage);

//# sourceMappingURL=prueba.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabMenuPage = (function () {
    function TabMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabMenuPage');
    };
    return TabMenuPage;
}());
TabMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tab-menu',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/tab-menu/tab-menu.html"*/'<!--\n  Generated template for the TabMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>tabMenu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/tab-menu/tab-menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TabMenuPage);

//# sourceMappingURL=tab-menu.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(491);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datafinder__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tab_menu_tab_menu__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_redes_redes__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_procesos_procesos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_escuelas_escuelas__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_unidades_unidades__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_preguntas_preguntas__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pensum_pensum__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_prueba_prueba__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tab_menu_tab_menu__["a" /* TabMenuPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_redes_redes__["a" /* RedesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_procesos_procesos__["a" /* ProcesosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_escuelas_escuelas__["a" /* EscuelasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_unidades_unidades__["a" /* UnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_preguntas_preguntas__["a" /* PreguntasPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_pensum_pensum__["a" /* PensumPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_prueba_prueba__["a" /* PruebaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/escuelas/escuelas.module#EscuelasPageModule', name: 'EscuelasPage', segment: 'escuelas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pensum-civil/pensum-civil.module#PensumCivilPageModule', name: 'PensumCivilPage', segment: 'pensum-civil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pensum/pensum.module#PensumPageModule', name: 'PensumPage', segment: 'pensum', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preguntas/preguntas.module#PreguntasPageModule', name: 'PreguntasPage', segment: 'preguntas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/procesos/procesos.module#ProcesosPageModule', name: 'ProcesosPage', segment: 'procesos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/prueba/prueba.module#PruebaPageModule', name: 'PruebaPage', segment: 'prueba', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/redes/redes.module#RedesPageModule', name: 'RedesPage', segment: 'redes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-menu/tab-menu.module#TabMenuPageModule', name: 'TabMenuPage', segment: 'tab-menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/unidades/unidades.module#UnidadesPageModule', name: 'UnidadesPage', segment: 'unidades', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tab_menu_tab_menu__["a" /* TabMenuPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_redes_redes__["a" /* RedesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_procesos_procesos__["a" /* ProcesosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_escuelas_escuelas__["a" /* EscuelasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_unidades_unidades__["a" /* UnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_preguntas_preguntas__["a" /* PreguntasPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_pensum_pensum__["a" /* PensumPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_prueba_prueba__["a" /* PruebaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__datafinder__["a" /* DataFinder */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[486]);
//# sourceMappingURL=main.js.map