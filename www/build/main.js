webpackJsonp([8],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscuelasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redes_redes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__procesos_procesos__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__escuelas_escuelas__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unidades_unidades__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preguntas_preguntas__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, loadingCtrl, googleplus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.googleplus = googleplus;
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
    InicioPage.prototype.logout = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Cerrando Sesión...",
            duration: 1000
        });
        loader.present();
        this.googleplus.logout().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        });
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Fiusapp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n<ion-card>\n  <ion-card-header>\n    ¿Qué necesitas?\n  </ion-card-header>\n\n  <ion-list>\n    <button (click)="gotoRedes()" ion-item>\n      <ion-icon name="school" item-start></ion-icon>\n      Redes de Estudio\n    </button>\n\n    <button (click)="gotoProcesos()"ion-item>\n      <ion-icon name="medical" item-start></ion-icon>\n      Procesos\n    </button>\n\n    <button (click)="gotoEscuelas()"ion-item>\n      <ion-icon name="cafe" item-start></ion-icon>\n      Escuelas\n    </button>\n\n    <button (click)="gotoUnidades()"ion-item>\n      <ion-icon name="paw" item-start></ion-icon>\n      Unidades Académicas\n    </button>\n\n\n    <button (click)="gotoPreguntas()" ion-item>\n      <ion-icon name="planet" item-start></ion-icon>\n      Preguntas Frecuentes\n    </button>\n\n    <button (click)="logout()" ion-item>\n      <ion-icon name="paw" item-start></ion-icon>\n      Cerrar Sesión\n    </button>\n\n  </ion-list>\n</ion-card>\n</form> \n</ion-content>\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/inicio/inicio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datafinder__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pensum_pensum__ = __webpack_require__(157);
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
        this.items = [];
    }
    RedesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.datafinder.getJSONData("assets/Data/data.json").then(function (data) {
            _this.carreras = data.Carreras;
            _this.initializeItems(_this.carreras);
        });
    };
    RedesPage.prototype.initializeItems = function (carreras) {
        for (var _i = 0, carreras_1 = carreras; _i < carreras_1.length; _i++) {
            var nombre = carreras_1[_i];
            this.items.push(nombre.nombre);
        }
        this.temp = [
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
    RedesPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return RedesPage;
}());
RedesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-redes',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/redes/redes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Redes de Estudio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n<form>\n    <ion-img class="imagen">  </ion-img>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let carrera of carreras" (click)="seleccion(carrera)">\n        {{carrera.codigo}}\n        {{carrera.nombre}}\n      </ion-item>\n    </ion-list>\n\n</form>\n</ion-content>\n\n'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/redes/redes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__datafinder__["a" /* DataFinder */]])
], RedesPage);

//# sourceMappingURL=redes.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PensumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        this.isenabled = false;
        this.carrera = this.navParams.get("carrera");
    }
    PensumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PensumPage');
    };
    return PensumPage;
}());
PensumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-pensum',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/pensum/pensum.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Redes de Estudio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="body">\n  <ion-slides pager>\n    <ion-slide *ngFor="let semestre of carrera.semestres">\n      <ion-list>\n        <ion-item text-center>{{carrera.codigo}} {{carrera.nombre}} - Semestre {{semestre.numero}}\n        </ion-item>\n        <ion-item *ngFor="let area of semestre.areas">\n          {{area.nombre}}\n          <ng-container *ngFor="let curso of area.cursos">\n            <ion-list *ngIf="curso.pre.length==0">\n              <button [disabled]=false ion-item class="grid-basic-page">\n                <ng-container *ngIf="curso.tipo==\'obligatorio\'">\n                  <ion-row class="obligatorio">\n                    <ion-col>\n                      <div>Código: {{curso.codigo}}</div>\n                      <div>{{curso.nombre}}</div>\n                      <div>Créditos: {{curso.creditos}}</div>\n                    </ion-col>\n                  </ion-row>\n                </ng-container>\n                <ng-container *ngIf="curso.tipo==\'opcional\'">\n                  <ion-row class="opcional">\n                    <ion-col>\n                      <div>Código: {{curso.codigo}}</div>\n                      <div>{{curso.nombre}}</div>\n                      <div>Créditos: {{curso.creditos}}</div>\n                    </ion-col>\n                  </ion-row>\n                </ng-container>\n              </button>\n            </ion-list>\n            <ion-list *ngIf="curso.pre.length!=0">\n              <button class="boton" [disabled]=true ion-item class="grid-basic-page">\n                  <ng-container *ngIf="curso.tipo==\'obligatorio\'">\n                      <ion-row class="obligatorio">\n                        <ion-col>\n                          <div>Código: {{curso.codigo}}</div>\n                          <div>{{curso.nombre}}</div>\n                          <div>Créditos: {{curso.creditos}}</div>\n                        </ion-col>\n                      </ion-row>\n                    </ng-container>\n                    <ng-container *ngIf="curso.tipo==\'opcional\'">\n                      <ion-row class="opcional">\n                        <ion-col>\n                          <div>Código: {{curso.codigo}}</div>\n                          <div>{{curso.nombre}}</div>\n                          <div>Créditos: {{curso.creditos}}</div>\n                        </ion-col>\n                      </ion-row>\n                    </ng-container>\n              </button>\n            </ion-list>\n          </ng-container>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/pensum/pensum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PensumPage);

//# sourceMappingURL=pensum.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcesosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/escuelas/escuelas.module": [
		699,
		7
	],
	"../pages/inicio/inicio.module": [
		700,
		6
	],
	"../pages/login/login.module": [
		701,
		5
	],
	"../pages/pensum/pensum.module": [
		702,
		4
	],
	"../pages/preguntas/preguntas.module": [
		703,
		3
	],
	"../pages/procesos/procesos.module": [
		704,
		2
	],
	"../pages/redes/redes.module": [
		705,
		1
	],
	"../pages/unidades/unidades.module": [
		706,
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
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFinder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(220);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DataFinder);

//# sourceMappingURL=datafinder.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datafinder__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_redes_redes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_procesos_procesos__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_escuelas_escuelas__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_unidades_unidades__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_preguntas_preguntas__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pensum_pensum__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var FirebaseConfig = {
    apiKey: "AIzaSyAG6nc1Cce68eNODWUs1ih6f7Oxzb9aoeQ",
    authDomain: "fiusapp-3cd1a.firebaseapp.com",
    databaseURL: "https://fiusapp-3cd1a.firebaseio.com",
    projectId: "fiusapp-3cd1a",
    storageBucket: "fiusapp-3cd1a.appspot.com",
    messagingSenderId: "207784854226"
};
__WEBPACK_IMPORTED_MODULE_9_firebase___default.a.initializeApp(FirebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_redes_redes__["a" /* RedesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_procesos_procesos__["a" /* ProcesosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_escuelas_escuelas__["a" /* EscuelasPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_unidades_unidades__["a" /* UnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_preguntas_preguntas__["a" /* PreguntasPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_pensum_pensum__["a" /* PensumPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/escuelas/escuelas.module#EscuelasPageModule', name: 'EscuelasPage', segment: 'escuelas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pensum/pensum.module#PensumPageModule', name: 'PensumPage', segment: 'pensum', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preguntas/preguntas.module#PreguntasPageModule', name: 'PreguntasPage', segment: 'preguntas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/procesos/procesos.module#ProcesosPageModule', name: 'ProcesosPage', segment: 'procesos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/redes/redes.module#RedesPageModule', name: 'RedesPage', segment: 'redes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/unidades/unidades.module#UnidadesPageModule', name: 'UnidadesPage', segment: 'unidades', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(FirebaseConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_redes_redes__["a" /* RedesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_procesos_procesos__["a" /* ProcesosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_escuelas_escuelas__["a" /* EscuelasPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_unidades_unidades__["a" /* UnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_preguntas_preguntas__["a" /* PreguntasPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_pensum_pensum__["a" /* PensumPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_6__datafinder__["a" /* DataFinder */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(86);
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

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(155);
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
    function LoginPage(navCtrl, navParams, loadingCtrl, googleplus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.googleplus = googleplus;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    /*login(){
      this.googleplus.login({
        'webClientId': '207784854226-2onf480r4ja1uu1lakv7rgkepi9tc9nr.apps.googleusercontent.com',
        'offline':true
      }).then(res =>{
          console.log(res);
          Firebase.auth().signInWithCredential(Firebase.auth.GoogleAuthProvider.credential(res.idToken)
        ).then(suc =>{
          this.navCtrl.setRoot(InicioPage);
        }).catch(nosuc =>{
          alert("INICIO FALLIDO");
        })
      })
    }*/
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('estas en LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/melissa/Documentos/Fiusapp/app/src/pages/login/login.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Fiusapp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-list>\n      <ion-item text-center>\n        <ion-img width="192" height="192" src="assets/logo.png" ></ion-img>\n      </ion-item>\n    </ion-list>\n    \n  </form>\n\n  <button ion-button icon-left (click) ="login()" block outline>\n    <ion-icon name="logo-googleplus"></ion-icon>\n    INICIAR CON GOOGLE\n  </button>\n  \n</ion-content>'/*ion-inline-end:"/home/melissa/Documentos/Fiusapp/app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map