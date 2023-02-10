import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren:()=>import('../app/noauth/noauth.module').then((m)=>m.NoauthModule)
  },
  {
    path:'home',
    loadChildren:()=>import('../app/auth/auth.module').then((m)=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
