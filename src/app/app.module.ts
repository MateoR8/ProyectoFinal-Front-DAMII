import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { IncGeneralModule } from './modules/inc-general/inc-general.module';
import { IncTecnicaModule } from './modules/inc-tecnica/inc-tecnica.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    IncGeneralModule,
    IncTecnicaModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({ "projectId": "proyecto-damii-b783b", "appId": "1:909049177010:web:b4d4d875da05858fd4baab", "storageBucket": "proyecto-damii-b783b.firebasestorage.app", "apiKey": "AIzaSyD4Mv79ly-E3jeyKKLNErB5cPnQQUjgwss", "authDomain": "proyecto-damii-b783b.firebaseapp.com", "messagingSenderId": "909049177010", "measurementId": "G-W3MQWVDKS1"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
