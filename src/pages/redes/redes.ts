import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PensumCivilPage } from '../pensum-civil/pensum-civil';
import { PruebaPage } from '../prueba/prueba';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the RedesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redes',
  templateUrl: 'redes.html',
})
export class RedesPage {

  searchQuery: string = '';
  items: string[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.initializeItems();
  }

  initializeItems() {
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
    
  }

  seleccion(red: string){
    if(red=="01 Ingenieria Civil"){
      this.navCtrl.setRoot(PensumCivilPage);
    }else if(red == "01 Ingenieria Civil 2017"){
      this.navCtrl.setRoot(PruebaPage);
    }else if(red == "02 Ingenieria Quimica"){

    }else if(red == "03 Ingenieria Mecanica"){

    }else if(red == "04 Ingenieria Electrica"){

    }else if(red == "05 Ingenieria Industrial"){

    }else if(red == "06 Ingenieria Mecanica Electrica"){

    }else if(red == "07 Ingenieria Mecanica Industrial"){

    }else if(red == "09 Ingenieria en Ciencias y Sistemas"){

    }else if(red == "13 Ingenieria Electronica"){

    }else if(red == "35 Ingenieria Ambiental"){

    }else if(red == "Licenciatura en Matematica"){

    }else if(red == "Licenciatura en Fisica"){

    }
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedesPage');
  }

}
