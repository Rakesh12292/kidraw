import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EnrollmentPageRoutingModule } from './enrollment-routing.module';
import { EnrollmentPage } from './enrollment.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnrollmentPageRoutingModule
  ],
  declarations: [EnrollmentPage]
})
export class EnrollmentPageModule {}