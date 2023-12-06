import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { EventsPipe } from './shared/pipes/events.pipe';
import { TokenInterceptor } from './shared/securite/token.interceptor';
import { Auth401Interceptor } from './shared/securite/auth401.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { EvenementComponent } from './pages/evenement/evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    UsersComponent,
    ProfilComponent,
    EvenementsComponent,
    InscriptionComponent,
    ConnexionComponent,
    ContactComponent,
    ErreurComponent,
    EventsPipe,
    EvenementComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angularapp-842b4","appId":"1:628313134530:web:e8c468825d321d7b57b25b","storageBucket":"angularapp-842b4.appspot.com","apiKey":"AIzaSyBngLTbivmXfnIul3SCUTlMkmksEcBZlHQ","authDomain":"angularapp-842b4.firebaseapp.com","messagingSenderId":"628313134530","measurementId":"G-7NYZE836ZJ"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass : Auth401Interceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
