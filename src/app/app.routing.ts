import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
     path: '',
     component: MainComponent
   },
   {
     path: 'Form',
     component: FormComponent
   },
   {
     path: 'About',
     component: AboutComponent
   }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
