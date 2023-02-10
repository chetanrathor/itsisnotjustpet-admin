import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { VetComponent } from './components/vet/vet.component';
import { OrderComponent } from './components/order/order.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { MasterComponent } from './components/master/master.component';
import { ProfileComponent } from './users/components/profile/profile.component';
import { HeaderComponent } from '../shared/header/header.component';
import { TableComponent } from '../shared/table/table.component';


@NgModule({
    declarations: [
        AuthComponent,
        UsersComponent,
        SidebarComponent,
        VetComponent,
        OrderComponent,
        AppointmentComponent,
        ProductComponent,
        BlogComponent,
        MasterComponent,
        ProfileComponent,
        HeaderComponent,
        TableComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
      
    ]
})
export class AuthModule { }
