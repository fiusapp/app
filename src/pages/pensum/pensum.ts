
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public informacion: AlertController) {
    this.carrera = this.navParams.get("carrera");

  }

  SeleccionCurso(curso: string, codigo: string) {
    alert("S:" + curso + " " + codigo);
  }


  presentPopover(nombre:string, codigo:string, creditos:string) {
    let alert = this.informacion.create({
      title: nombre,
      message: "Codigo: "+codigo+
      '<br>Total de Créditos con '+nombre+' ganado:'+creditos+
      '<br>Pre-Requisitos:\n'+
      '<br>Post-Requisitos:\n',
      buttons: [
        
        {
          text: 'Aceptar',
          handler: () => {




          }
        }
      ]
    });
    alert.present();

  }


  ionViewDidLoad() {

  }

}
