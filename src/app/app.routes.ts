import { SignupComponent } from './page/signup/signup.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "signup",
        component: SignupComponent,
    }
];
