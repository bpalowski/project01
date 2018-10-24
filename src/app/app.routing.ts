import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

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
   },
   {
     path: 'Nav',
     component: NavComponent
   }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
