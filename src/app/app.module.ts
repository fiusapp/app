import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DataFinder } from '../../datafinder';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { TabMenuPage } from '../pages/tab-menu/tab-menu';
import { RedesPage } from '../pages/redes/redes';
import { ProcesosPage } from '../pages/procesos/procesos';
import { EscuelasPage } from '../pages/escuelas/escuelas';
import { UnidadesPage } from '../pages/unidades/unidades';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { PensumCivilPage } from '../pages/pensum-civil/pensum-civil';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    InicioPage,
    TabMenuPage,
    RedesPage,
    ProcesosPage,
    EscuelasPage,
    UnidadesPage,
    PreguntasPage,
    PensumCivilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    InicioPage,
    TabMenuPage,
    RedesPage,
    ProcesosPage,
    EscuelasPage,
    UnidadesPage,
    PreguntasPage,
    PensumCivilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataFinder
  ]
})
export class AppModule {}
