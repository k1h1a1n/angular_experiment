import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "" , redirectTo:"Welcome" , pathMatch : "full"},
  {path: 'Welcome', loadChildren: () => import('./modules/login-register/login-register.module').then(m => m.LoginRegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
