
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Carrera } from '../../models/Carrera';

@IonicPage()
@Component({
  selector: 'page-pensum',
  templateUrl: 'pensum.html',
})
export class PensumPage {
  carrera: Carrera;
  isenabled: boolean = false;
  temp: string;
  colorCarrera:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public informacion: AlertController) {
    this.carrera = this.navParams.get("carrera");

  }

  SeleccionCurso(curso: string, codigo: string) {
    alert("S:" + curso + " " + codigo);
  }


  presentPopover(nombre:string, descripcion:string, codigo:string, creditos:string, colorfuerte:string, colorsuave:string) {
    
    let alert = this.informacion.create({
      title: nombre,
      message: 'Codigo: '+codigo+
      '<br>'+
      '<br>Descripción: ' +descripcion+
      '<br>'+
      '<br>Total de Créditos con '+nombre+' ganado :'+creditos+
      '<br>'+
      '<br>Cursos a ganar antes (Pre-Requisitos):'+
      '<br>'+
      '<br>Cursos que habilita '+nombre+' (Post-Requisitos):',
      buttons: [
        
        {
          text: 'Aceptar',
          handler: () => {
          }
        }
      ],

      cssClass: 'custom-alert-danger'
    });
    alert.present();

  }


  ionViewDidLoad() {

  }

}
