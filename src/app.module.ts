import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuService } from './services/menu.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { InstelationComponent } from './components/instelation/instelation.component';
import { Menu3Component } from './components/menu3/menu3.component';
import { Menu4Component } from './components/menu4/menu4.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    HomeComponent,
    InstelationComponent,
    Menu3Component,
    Menu4Component,
    ChartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MenuService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
