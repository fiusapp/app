webpackJsonp([0],{

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PensumCivilPageModule", function() { return PensumCivilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pensum_civil__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PensumCivilPageModule = (function () {
    function PensumCivilPageModule() {
    }
    return PensumCivilPageModule;
}());
PensumCivilPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pensum_civil__["a" /* PensumCivilPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pensum_civil__["a" /* PensumCivilPage */]),
        ],
    })
], PensumCivilPageModule);

//# sourceMappingURL=pensum-civil.module.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PensumCivilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datafinder__ = __webpack_require__(152);
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
var PensumCivilPage = (function () {
    function PensumCivilPage(navCtrl, navParams, datafinder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datafinder = datafinder;
        this.PensumCivil = [];
        this.nombresArea = [];
        this.paginas = [];
        this.semestres = [];
        this.areas = [];
        this.cursos = [];
        this.pre = [];
        this.post = [];
    }
    PensumCivilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.datafinder.getJSONData("assets/Data/data.json").then(function (data) {
            _this.SetData(data);
        });
    };
    PensumCivilPage.prototype.SetData = function (data) {
        this.PensumCivil = data.Redes[0].Civil;
        for (var nombre in this.PensumCivil[1].AreasNombres) {
            this.nombresArea.push(nombre);
        }
        //semestres
        var temp = [];
        console.log(this.PensumCivil);
        for (var n1 in this.PensumCivil[0].Semestres) {
            for (var area_id in this.PensumCivil[0].Semestres[n1].semestre.Areas) {
                for (var n3 in this.PensumCivil[0].Semestres[n1].semestre.Areas[area_id].area) {
                    //pre requisitos
                    for (var n4 in this.PensumCivil[0].Semestres[n1].semestre.Areas[area_id].area[n3].pre) {
                        temp = this.PensumCivil[0].Semestres[n1].semestre.Areas[area_id].area[n3].pre;
                        this.pre.push({
                            codigo: temp[n4].codigo
                        });
                    }
                    //post requisitos
                    for (var n4 in this.PensumCivil[0].Semestres[n1].semestre.Areas[area_id].area[n3].post) {
                        temp = this.PensumCivil[0].Semestres[n1].semestre.Areas[area_id].area[n3].post;
                        this.post.push({
                            codigo: temp[n4].codigo
                        });
                    }
                    temp = this.PensumCivil[0].Semestres[n1].semestre.Areas[area_id].area;
                    console.log("temporal ", temp, n3);
                    this.cursos.push({
                        codigo: temp[n3].codigo,
                        nombre: temp[n3].nombre,
                        creditos: temp[n3].creditos,
                        pre: this.pre,
                        post: this.post,
                        tipo: temp[n3].tipo
                    });
                    console.log("this.cursos", this.cursos);
                    this.pre = [];
                    this.post = [];
                }
                //agregar area       
            }
            var x = +n1 + 1;
            this.paginas.push({
                tituloSemestre: "Semestre " + x,
                nombres: this.cursos
            });
            console.log(this.cursos);
            this.cursos = [];
        }
    };
    return PensumCivilPage;
}());
PensumCivilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-pensum-civil',template:/*ion-inline-start:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\pensum-civil\pensum-civil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ingeniería Civil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n  <ion-slides pager>\n      \n    <ion-slide *ngFor="let pagina of paginas">\n        \n      <h1>{{pagina.tituloSemestre}}</h1>\n      <!---->\n      <ion-list>\n        <ion-item>\n          <ion-item-group *ngFor="let nArea of nombresArea">\n            <ion-item-divider color="light">{{nArea}}</ion-item-divider>\n            <ion-list>\n              <ion-item *ngFor="let curso of pagina.nombres">\n                {{curso.nombre}}\n              </ion-item>\n\n            </ion-list>\n            \n          </ion-item-group>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"E:\Università\2018\Seminario Clase\Tesis\Fiusapp\fiusapp\src\pages\pensum-civil\pensum-civil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__datafinder__["a" /* DataFinder */]])
], PensumCivilPage);

//# sourceMappingURL=pensum-civil.js.map

/***/ })

});
//# sourceMappingURL=0.js.map