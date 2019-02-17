import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeadComponent} from './components/head/head.component';
import { AdsComponent } from './components/ads/ads.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeadComponent,
        AdsComponent,
        SideBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
