import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FranchiseInquiryPage } from './franchise-inquiry.page';

const routes: Routes = [
  {
    path: '',
    component: FranchiseInquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FranchiseInquiryPageRoutingModule {}
