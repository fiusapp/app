import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';
import Firebase from 'firebase';

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
    public loadingCtrl: LoadingController,
    public googleplus: GooglePlus
  ) {
}

  login(){
    this.googleplus.login({
      'webClientId': '207784854226-2onf480r4ja1uu1lakv7rgkepi9tc9nr.apps.googleusercontent.com',
      'offline':true
    }).then(res =>{
        console.log(res);
        Firebase.auth().signInWithCredential(Firebase.auth.GoogleAuthProvider.credential(res.idToken)
      ).then(suc =>{
        
        this.navCtrl.setRoot(InicioPage);
        console.log("éxito");
      }).catch(nosuc =>{
        alert("INICIO FALLIDO");
      })
    })
  }

  ionViewDidLoad() {
    console.log('estas en LoginPage');
  }

}
