import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginRegisterContainerComponent } from './view/login-register-container/login-register-container.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    LoginRegisterContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRegisterRoutingModule,
  ]
})
export class LoginRegisterModule { }
