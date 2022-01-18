import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.page.html',
  styleUrls: ['./signup-login.page.scss'],
})
export class SignupLoginPage implements OnInit {

  loginType: any;
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createSignupForm();
  }

  ngOnInit() {
    this.loginType = 1;
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      dnstName: ["", Validators.compose([Validators.required,
      Validators.minLength(3),
      Validators.pattern('^([A-Za-z ]+ )+[A-Za-z ]+$|^[A-Za-z ]+$')])],
      dnstEmail: ["", Validators.required, Validators.email],
      dnstPhoneNumber: ["", Validators.compose([Validators.required,
      Validators.minLength(10),
      Validators.pattern('^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$')])],
      dnstRegistrationNumber: ["", Validators.required],
      clinicName: [""],
      clinicAddress: [""],
      clinicPhoneNumber: ["", Validators.compose([Validators.minLength(8),
      Validators.pattern('^[-0-9\.\-\/]+$')])],
      yearOfExp: ["", Validators.compose([Validators.minLength(1),
      Validators.pattern('^[0-9\.\-\/]+$')])],
      numberOfChair: ["", Validators.compose([Validators.minLength(1),
      Validators.pattern('^[0-9\.\-\/]+$')])],
      dnstGender: [1]
    });
    // this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  segmentChanged(event) {
    console.log(event)
  }

  openDeveloper() {
    window.open('https://play.google.com/store/apps/details?id=com.savart', '_system', 'location=yes');
  }

}
