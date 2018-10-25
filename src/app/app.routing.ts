import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  {
     path: '',
     component: MainComponent
   },
   {
     path: 'form',
     component: FormComponent
   },
   {
     path: 'about',
     component: AboutComponent
   },
   {
     path: 'phone',
     component: ProductComponent
   }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
