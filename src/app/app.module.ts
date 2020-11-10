import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { from } from 'rxjs';
import { ProizvodComponent } from './proizvodi/proizvod/proizvod.component';
@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    KontaktComponent,
    ProizvodiComponent,
    StartComponent,
    ProizvodComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

