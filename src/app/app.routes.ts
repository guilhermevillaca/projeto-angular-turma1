import { Routes } from '@angular/router';
import { CepComponent } from './cep/cep.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'cep', 
        component: CepComponent
    },
    {
        path: '', component: 
        HomeComponent
    }
];
