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
  PensumCivil=[]; 
  A1:any; A2:any; A3:any; A4:any; A5:any; A6:any; A7:any; A8:any; A9:any;
  sem1=[]; sem2=[]; sem3=[]; sem4=[]; sem5=[]; sem6=[]; sem7=[]; sem8=[]; sem9=[]; sem10=[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private datafinder: DataFinder
  ) {
  }

  ionViewDidLoad() {
    this.datafinder.getJSONData("assets/Data/data.json").then(data => {
      this.SetData(data);
    });
  }

  SetData(data : any) {
    this.PensumCivil = data.redes[0].civil;
    this.sem1 = this.PensumCivil[0].semestre1[0].area6;
    //Nombres de las Áreas
    this.A1 = this.PensumCivil[1].AreasNombres[0].area1;
    this.A2 = this.PensumCivil[1].AreasNombres[0].area2;
    this.A3 = this.PensumCivil[1].AreasNombres[0].area3;
    this.A4 = this.PensumCivil[1].AreasNombres[0].area4;
    this.A5 = this.PensumCivil[1].AreasNombres[0].area5;
    this.A6 = this.PensumCivil[1].AreasNombres[0].area6;
    this.A7 = this.PensumCivil[1].AreasNombres[0].area7;
    this.A8 = this.PensumCivil[1].AreasNombres[0].area8;
    this.A9 = this.PensumCivil[1].AreasNombres[0].area9;
    
    //console.log(this.A1);
    //console.log(this.networks);
  }

  

}
