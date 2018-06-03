import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { RedesPage } from '../redes/redes';
import { ProcesosPage } from '../procesos/procesos';
import { EscuelasPage } from '../escuelas/escuelas';
import { UnidadesPage } from '../unidades/unidades';
import { PreguntasPage } from '../preguntas/preguntas';

import { GooglePlus } from '@ionic-native/google-plus';
import Firebase from 'firebase';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  
})
export class InicioPage {

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public googleplus: GooglePlus
  ) {
}

  gotoRedes(){
    
    this.navCtrl.push(RedesPage);
  }

  gotoProcesos(){
    
    this.navCtrl.push(ProcesosPage);
  }
  gotoEscuelas(){
    
    this.navCtrl.push(EscuelasPage);
  }
  gotoUnidades(){
    
    this.navCtrl.push(UnidadesPage);
  }
  gotoPreguntas(){
    
    this.navCtrl.push(PreguntasPage);
  }

  logout(){
    let loader = this.loadingCtrl.create({
      content: "Cerrando Sesión...",
      duration: 1000
    });
    loader.present();
    this.googleplus.logout().then(() => {
      this.navCtrl.setRoot(LoginPage);  
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  

}
