import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataFinder } from '../../../datafinder';

/**
 * Generated class for the PensumCivilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pensum-civil',
  templateUrl: 'pensum-civil.html',
})
export class PensumCivilPage {
  PensumCivil = [];
  nombresArea = [];
  paginas = [];
  semestres = [];
  areas = [];
  cursos = [];
  pre = [];
  post = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private datafinder: DataFinder
  ) { }



  ionViewDidLoad() {
    this.datafinder.getJSONData("../Data/data.json").then(data => {
      this.SetData(data);
    });
  }

  SetData(data: any) {
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
          console.log("temporal ",temp, n3);
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
  }
}
