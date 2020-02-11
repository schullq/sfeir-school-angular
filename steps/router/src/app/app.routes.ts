import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';

// APP COMPONENTS
// import { HomeComponent } ...

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
