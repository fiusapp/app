import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carrera } from '../../models/Carrera';

/**
 * Generated class for the PensumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pensum',
  templateUrl: 'pensum.html',
})
export class PensumPage {
  carrera:Carrera;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrera = this.navParams.get("carrera");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PensumPage');
  }

}
