import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AdsComponent } from 'src/app/components/ads/ads.component';
import { HeadComponent } from 'src/app/components/head/head.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';

@NgModule({
  declarations: [UserComponent, AdsComponent, HeadComponent, SideBarComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
