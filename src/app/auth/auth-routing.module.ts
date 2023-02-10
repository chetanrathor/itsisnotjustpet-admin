import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BlogComponent } from './components/blog/blog.component';
import { MasterComponent } from './components/master/master.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';
import { VetComponent } from './components/vet/vet.component';

const routes: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      {
        path:'',
        redirectTo:'users',
        pathMatch:'full'
      },
      {
        path:'users',
        loadChildren:()=>import('../auth/module/users/users.module').then((m)=>m.UsersModule)
      },
      {
        path:'vet',
        component:VetComponent
      },
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'appointment',
        component:AppointmentComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'blog',
        component:BlogComponent
      },
      {
        path:'master',
        component:MasterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
