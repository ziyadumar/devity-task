import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsCompleteComponent } from './components/stats-complete/stats-complete.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
