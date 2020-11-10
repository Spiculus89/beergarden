import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social/social.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { StartComponent } from './start/start.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'start',
        component: StartComponent
      },
      {
        path: 'kontakt',
        component: KontaktComponent
      },
      {
        path: 'proizvodi',
        component: ProizvodiComponent
      },
      {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/start',
        pathMatch: 'full'
      }


    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

