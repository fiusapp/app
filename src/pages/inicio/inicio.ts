import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedesPage } from '../redes/redes';
import { ProcesosPage } from '../procesos/procesos';
import { EscuelasPage } from '../escuelas/escuelas';
import { UnidadesPage } from '../unidades/unidades';
import { PreguntasPage } from '../preguntas/preguntas';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  
})
export class InicioPage {

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
}

  gotoRedes(){
    
    this.navCtrl.setRoot(RedesPage);
  }

  gotoProcesos(){
    
    this.navCtrl.setRoot(ProcesosPage);
  }
  gotoEscuelas(){
    
    this.navCtrl.setRoot(EscuelasPage);
  }
  gotoUnidades(){
    
    this.navCtrl.setRoot(UnidadesPage);
  }
  gotoPreguntas(){
    
    this.navCtrl.setRoot(PreguntasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
