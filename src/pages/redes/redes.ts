import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataFinder } from '../../../datafinder';
import { Carrera } from '../../models/Carrera';
import { PensumPage } from '../pensum/pensum';
import {} from '../../../src/Data/data.json';

@IonicPage()
@Component({
  selector: 'page-redes',
  templateUrl: 'redes.html',
})
export class RedesPage {

  searchQuery: string = '';
  items=[];
  temp:string[];
  carreras: Carrera[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private datafinder: DataFinder) {
      
  }

  ionViewDidLoad() {
    this.datafinder.getJSONData("assets/Data/data.json").then(data => {
      this.carreras = data.Carreras;
      this.initializeItems(this.carreras);
    });
  }

  initializeItems(carreras:any) {
    
    for (let nombre of carreras){
      this.items.push(nombre.nombre);
    }
    this.temp=[
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
  }

  seleccion(carrera: Carrera){
    this.navCtrl.push(PensumPage,{"carrera": carrera});
  }
  getItems(ev: any) {
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        
      })
    }
  }

}
