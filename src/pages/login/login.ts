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
  storageRef: Firebase.storage.Reference;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public googleplus: GooglePlus
  ) {
}


login(){
  this.navCtrl.setRoot(InicioPage);
  this.downloadfiledata();
}

downloadfiledata(){
  //referencia del archivo data en firebase
  this.storageRef = Firebase.storage().refFromURL("https://firebasestorage.googleapis.com/v0/b/fiusapp-3cd1a.appspot.com/o/data.json?alt=media&token=024961fe-54da-4757-b4ab-0c4dc1baa05c");
  console.log("la Url: ", this.storageRef);
  
}

  /*login(){
    this.googleplus.login({
      'webClientId': '207784854226-2onf480r4ja1uu1lakv7rgkepi9tc9nr.apps.googleusercontent.com',
      'offline':true
    }).then(res =>{
        console.log(res);
        Firebase.auth().signInWithCredential(Firebase.auth.GoogleAuthProvider.credential(res.idToken)
      ).then(suc =>{
        this.navCtrl.setRoot(InicioPage);
      }).catch(nosuc =>{
        alert("INICIO FALLIDO");
      })
    })
  }*/

  ionViewDidLoad() {
    console.log('estas en LoginPage');
  }

}
