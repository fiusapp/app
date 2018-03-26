webpackJsonp([9],{

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
var EscuelasPage = /** @class */ (function () {
    function EscuelasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EscuelasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscuelasPage');
    };
    EscuelasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escuelas',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\escuelas\escuelas.html"*/'<!--\n  Generated template for the EscuelasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>escuelas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\escuelas\escuelas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EscuelasPage);
    return EscuelasPage;
}());

//# sourceMappingURL=escuelas.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redes_redes__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__procesos_procesos__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__escuelas_escuelas__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unidades_unidades__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preguntas_preguntas__ = __webpack_require__(155);
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
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.gotoRedes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__redes_redes__["a" /* RedesPage */]);
    };
    InicioPage.prototype.gotoProcesos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__procesos_procesos__["a" /* ProcesosPage */]);
    };
    InicioPage.prototype.gotoEscuelas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__escuelas_escuelas__["a" /* EscuelasPage */]);
    };
    InicioPage.prototype.gotoUnidades = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__unidades_unidades__["a" /* UnidadesPage */]);
    };
    InicioPage.prototype.gotoPreguntas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__preguntas_preguntas__["a" /* PreguntasPage */]);
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\inicio\inicio.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n<ion-card>\n  <ion-card-header>\n    ¿Qué necesitas?\n  </ion-card-header>\n\n  <ion-list>\n    <button (click)="gotoRedes()" ion-item>\n      <ion-icon name="school" item-start></ion-icon>\n      Redes de Estudio\n    </button>\n\n    <button (click)="gotoProcesos()"ion-item>\n      <ion-icon name="medical" item-start></ion-icon>\n      Procesos\n    </button>\n\n    <button (click)="gotoEscuelas()"ion-item>\n      <ion-icon name="cafe" item-start></ion-icon>\n      Escuelas\n    </button>\n\n    <button (click)="gotoUnidades()"ion-item>\n      <ion-icon name="paw" item-start></ion-icon>\n      Unidades Académicas\n    </button>\n\n\n    <button (click)="gotoPreguntas()" ion-item>\n      <ion-icon name="planet" item-start></ion-icon>\n      Preguntas Frecuentes\n    </button>\n\n  </ion-list>\n</ion-card>\n</form> \n</ion-content>'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pensum_civil_pensum_civil__ = __webpack_require__(152);
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
 * Generated class for the RedesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RedesPage = /** @class */ (function () {
    function RedesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.initializeItems();
    }
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
    RedesPage.prototype.seleccion = function (red) {
        if (red == "01 Ingenieria Civil") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pensum_civil_pensum_civil__["a" /* PensumCivilPage */]);
        }
        else if (red == "01 Ingenieria Civil 2017") {
        }
        else if (red == "02 Ingenieria Quimica") {
        }
        else if (red == "03 Ingenieria Mecanica") {
        }
        else if (red == "04 Ingenieria Electrica") {
        }
        else if (red == "05 Ingenieria Industrial") {
        }
        else if (red == "06 Ingenieria Mecanica Electrica") {
        }
        else if (red == "07 Ingenieria Mecanica Industrial") {
        }
        else if (red == "09 Ingenieria en Ciencias y Sistemas") {
        }
        else if (red == "13 Ingenieria Electronica") {
        }
        else if (red == "35 Ingenieria Ambiental") {
        }
        else if (red == "Licenciatura en Matematica") {
        }
        else if (red == "Licenciatura en Fisica") {
        }
    };
    RedesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    RedesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RedesPage');
    };
    RedesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-redes',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\redes\redes.html"*/'<!--\n  Generated template for the RedesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Redes de Estudio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items" (click)="seleccion(item)">\n        {{item}}\n      </ion-item>\n    </ion-list>\n</form>\n</ion-content>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\redes\redes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], RedesPage);
    return RedesPage;
    var _a, _b;
}());

//# sourceMappingURL=redes.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PensumCivilPage; });
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
 * Generated class for the PensumCivilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PensumCivilPage = /** @class */ (function () {
    function PensumCivilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PensumCivilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PensumCivilPage');
    };
    PensumCivilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pensum-civil',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\pensum-civil\pensum-civil.html"*/'<!--\n  Generated template for the PensumCivilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pensumCivil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\pensum-civil\pensum-civil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PensumCivilPage);
    return PensumCivilPage;
}());

//# sourceMappingURL=pensum-civil.js.map

/***/ }),

/***/ 153:
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
var ProcesosPage = /** @class */ (function () {
    function ProcesosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProcesosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcesosPage');
    };
    ProcesosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-procesos',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\procesos\procesos.html"*/'<!--\n  Generated template for the ProcesosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>procesos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\procesos\procesos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProcesosPage);
    return ProcesosPage;
}());

//# sourceMappingURL=procesos.js.map

/***/ }),

/***/ 154:
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
var UnidadesPage = /** @class */ (function () {
    function UnidadesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnidadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnidadesPage');
    };
    UnidadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unidades',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\unidades\unidades.html"*/'<!--\n  Generated template for the UnidadesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>unidades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\unidades\unidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UnidadesPage);
    return UnidadesPage;
}());

//# sourceMappingURL=unidades.js.map

/***/ }),

/***/ 155:
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
var PreguntasPage = /** @class */ (function () {
    function PreguntasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreguntasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreguntasPage');
    };
    PreguntasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preguntas',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\preguntas\preguntas.html"*/'<!--\n  Generated template for the PreguntasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>preguntas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\preguntas\preguntas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PreguntasPage);
    return PreguntasPage;
}());

//# sourceMappingURL=preguntas.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(506);
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





var LoginPage = /** @class */ (function () {
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
            console.log(err);
            var loader = _this.loadingCtrl.create({
                content: "Please wait...",
                duration: 2000
            });
            loader.present();
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\login\login.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n      <ion-item text-center>\n        <ion-img width="192" height="192" src="assets/logo.png" ></ion-img>\n      </ion-item>\n      <ion-item>\n        <ion-label text-center floating>Correo</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-center floating>Contraseña</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    \n  </form>\n  <div text-center>\n      <button ion-button full (click)="login()">Login</button>\n    <a ion-button block clear (click)="goToSignup()">\n      Nueva cuenta\n    </a>\n    <a ion-button block clear (click)="goToResetPassword()">\n      Olvide password\n    </a>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/escuelas/escuelas.module": [
		815,
		8
	],
	"../pages/inicio/inicio.module": [
		816,
		7
	],
	"../pages/login/login.module": [
		817,
		6
	],
	"../pages/pensum-civil/pensum-civil.module": [
		818,
		5
	],
	"../pages/preguntas/preguntas.module": [
		819,
		4
	],
	"../pages/procesos/procesos.module": [
		820,
		3
	],
	"../pages/redes/redes.module": [
		821,
		2
	],
	"../pages/tab-menu/tab-menu.module": [
		822,
		1
	],
	"../pages/unidades/unidades.module": [
		823,
		0
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
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 480:
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
var TabMenuPage = /** @class */ (function () {
    function TabMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabMenuPage');
    };
    TabMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-menu',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\tab-menu\tab-menu.html"*/'<!--\n  Generated template for the TabMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>tabMenu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\tab-menu\tab-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabMenuPage);
    return TabMenuPage;
}());

//# sourceMappingURL=tab-menu.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(486);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tab_menu_tab_menu__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_redes_redes__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_procesos_procesos__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_escuelas_escuelas__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_unidades_unidades__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_preguntas_preguntas__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pensum_civil_pensum_civil__ = __webpack_require__(152);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tab_menu_tab_menu__["a" /* TabMenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_redes_redes__["a" /* RedesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_procesos_procesos__["a" /* ProcesosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_escuelas_escuelas__["a" /* EscuelasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_unidades_unidades__["a" /* UnidadesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_preguntas_preguntas__["a" /* PreguntasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pensum_civil_pensum_civil__["a" /* PensumCivilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/escuelas/escuelas.module#EscuelasPageModule', name: 'EscuelasPage', segment: 'escuelas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pensum-civil/pensum-civil.module#PensumCivilPageModule', name: 'PensumCivilPage', segment: 'pensum-civil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preguntas/preguntas.module#PreguntasPageModule', name: 'PreguntasPage', segment: 'preguntas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/procesos/procesos.module#ProcesosPageModule', name: 'ProcesosPage', segment: 'procesos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redes/redes.module#RedesPageModule', name: 'RedesPage', segment: 'redes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-menu/tab-menu.module#TabMenuPageModule', name: 'TabMenuPage', segment: 'tab-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unidades/unidades.module#UnidadesPageModule', name: 'UnidadesPage', segment: 'unidades', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tab_menu_tab_menu__["a" /* TabMenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_redes_redes__["a" /* RedesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_procesos_procesos__["a" /* ProcesosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_escuelas_escuelas__["a" /* EscuelasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_unidades_unidades__["a" /* UnidadesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_preguntas_preguntas__["a" /* PreguntasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pensum_civil_pensum_civil__["a" /* PensumCivilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(156);
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

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[481]);
//# sourceMappingURL=main.js.map