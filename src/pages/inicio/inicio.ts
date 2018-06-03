import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

    this.googleplus.logout().then(() => {
      this.navCtrl.setRoot(LoginPage);  
      console.log("logged out");
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  

}
