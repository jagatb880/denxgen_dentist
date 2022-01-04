import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupLoginPageRoutingModule } from './signup-login-routing.module';

import { SignupLoginPage } from './signup-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignupLoginPageRoutingModule
  ],
  declarations: [SignupLoginPage]
})
export class SignupLoginPageModule { }
