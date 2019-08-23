import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroPage } from './contato/cadastro/cadastro.page';
import { ListarPage } from './contato/listar/listar.page';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent, CadastroPage, ListarPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,

  AngularFireModule.initializeApp({
      apiKey: "AIzaSyCAyPZhJcmZbP_KCx4AXdlrrhwDiSBliaU",
      authDomain: "book-1ca38.firebaseapp.com",
      databaseURL: "https://book-1ca38.firebaseio.com",
      projectId: "book-1ca38",
      storageBucket: "",
      messagingSenderId: "1022316425845",
      appId: "1:1022316425845:web:61465f4462d04785"
    }), AngularFireDatabaseModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
