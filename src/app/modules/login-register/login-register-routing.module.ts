import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterContainerComponent } from './view/login-register-container/login-register-container.component';

const routes: Routes = [
  {path:'', redirectTo:'Sign-In', pathMatch:'full'},
  {path:'Sign-In' , component:LoginRegisterContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
