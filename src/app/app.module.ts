import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DataFinder } from '../../datafinder';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import Firebase from 'firebase';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { RedesPage } from '../pages/redes/redes';
import { ProcesosPage } from '../pages/procesos/procesos';
import { EscuelasPage } from '../pages/escuelas/escuelas';
import { UnidadesPage } from '../pages/unidades/unidades';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { PensumPage } from '../pages/pensum/pensum';

export const FirebaseConfig={
  apiKey: "AIzaSyAG6nc1Cce68eNODWUs1ih6f7Oxzb9aoeQ",
  authDomain: "fiusapp-3cd1a.firebaseapp.com",
  databaseURL: "https://fiusapp-3cd1a.firebaseio.com",
  projectId: "fiusapp-3cd1a",
  storageBucket: "fiusapp-3cd1a.appspot.com",
  messagingSenderId: "207784854226"
}

Firebase.initializeApp(FirebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    InicioPage,
    RedesPage,
    ProcesosPage,
    EscuelasPage,
    UnidadesPage,
    PreguntasPage,
    PensumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    InicioPage,
    RedesPage,
    ProcesosPage,
    EscuelasPage,
    UnidadesPage,
    PreguntasPage,
    PensumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    DataFinder
  ]
})
export class AppModule {}
