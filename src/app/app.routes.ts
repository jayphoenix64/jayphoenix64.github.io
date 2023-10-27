import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '', component: HomeComponent },
];
