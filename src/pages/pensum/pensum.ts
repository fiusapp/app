
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Carrera } from '../../models/Carrera';
import { Curso } from '../../models/Curso';

@IonicPage()
@Component({
  selector: 'page-pensum',
  templateUrl: 'pensum.html',
})
export class PensumPage {
  carrera: Carrera;
  isenabled: boolean = false;
  temp: string;
  ejemplo=[];
  colorCarrera:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public informacion: AlertController) {
    this.carrera = this.navParams.get("carrera");

  }


  presentPopover(c:Curso, lista:any) {
    console.log(lista);
    let alert = this.informacion.create({
      title: c.nombre,
      message: 'Codigo: '+c.codigo+
      '<br>'+
      '<br>Descripción: ' +c.descripcion+
      '<br>'+
      '<br>Total de Créditos con '+c.nombre+' ganado :'+c.creditos+
      '<br>'+
      '<br>Cursos a ganar antes (Pre-Requisitos):'+
      '<br>'+
      '<br>Cursos que habilita '+c.nombre+' (Post-Requisitos):',
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

    this.ejemplo.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
    this.ejemplo.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
    this.ejemplo.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
    this.ejemplo.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
    this.ejemplo.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
    this.ejemplo.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });

    localStorage.setItem('ejemplo', JSON.stringify('ejemplo'));
  }

}
