import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup-login',
    pathMatch: 'full'
  },
  {
    path: 'signup-login',
    loadChildren: () => import('./pages/signup-login/signup-login.module').then(m => m.SignupLoginPageModule)
  },
  {
    path: 'franchise-inquiry',
    loadChildren: () => import('./pages/franchise-inquiry/franchise-inquiry.module').then( m => m.FranchiseInquiryPageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./pages/otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
