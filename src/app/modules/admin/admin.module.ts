import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],

  declarations: [LoginComponent, MainComponent]
})
export class AdminModule { }
