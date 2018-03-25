import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    
    GooglePlus.login({
      'webClientId': '449937519255-9hb7bikfdpjnk369jkmi91kpl6tjf6ra.apps.googleusercontent.com'
    }).then((res) => {
        console.log(res);
        this.navCtrl.setRoot(HomePage);
        //console.log("éxito");
    }, (err) => {
        console.log(err);
        this.navCtrl.setRoot(LoginPage);
        console.log("fallido");

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
