import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {path: 'login', component: RegisterComponent}
];
