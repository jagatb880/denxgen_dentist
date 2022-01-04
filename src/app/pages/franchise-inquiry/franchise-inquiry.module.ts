import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FranchiseInquiryPageRoutingModule } from './franchise-inquiry-routing.module';

import { FranchiseInquiryPage } from './franchise-inquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FranchiseInquiryPageRoutingModule
  ],
  declarations: [FranchiseInquiryPage]
})
export class FranchiseInquiryPageModule {}
