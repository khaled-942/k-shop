import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup | any
  constructor(private fb: FormBuilder, private route: Router, private account:AccountService) { }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.pattern(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)]],
      uname: [null, [Validators.required]],
      password: [null, [Validators.required,Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)]],
      formArrayAddress: this.fb.array([null])
    })
  }
  createAccount() {
    this.account.passInformation(this.signUpForm.value);
    this.account.changeStatus(true);
    this.route.navigate(['/profile'])
    console.log(this.signUpForm.value)
  }

  get formControls() {
    return this.signUpForm.controls
  }

  addNewAddress(){
    const addInput = new FormControl(null,[Validators.required])
    this.adds.push(addInput);
    
  }

  delSpecAddress(index:number){
    this.adds.removeAt(index);
    
  }

  get adds(){
    return this.signUpForm.controls.formArrayAddress as FormArray;
  }

  loginNavigate() {
    this.route.navigate([''])
  }
}
