import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstelationComponent } from './components/instelation/instelation.component';
import { Menu3Component } from './components/menu3/menu3.component';
import { Menu4Component } from './components/menu4/menu4.component';
import { ChartComponent } from './components/chart/chart.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "instelation", component: InstelationComponent },
  { path: "menu3", component: Menu3Component },
  { path: "menu4", component: Menu4Component },
  { path: "chart" , component: ChartComponent },
  { path: "" , component: ChartComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
