import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { GooglePlus } from 'ionic-native';
import { InicioPage } from '../inicio/inicio';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
}

  login(){
    
    GooglePlus.login({
      'webClientId': '449937519255-9hb7bikfdpjnk369jkmi91kpl6tjf6ra.apps.googleusercontent.com'
    }).then((res) => {
        console.log(res);
        this.navCtrl.setRoot(InicioPage);
        console.log("éxito");
    }, (err) => {
        console.log(err);
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 2000
        });
        loader.present();
        console.log("fallido");
        this.navCtrl.setRoot(InicioPage);
    });

  }

  logout(){

    GooglePlus.logout().then(() => {
        console.log("logged out");
    });

  }

  ionViewDidLoad() {
    console.log('estas en LoginPage');
  }

}
