import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup | any;
  checkFound!: number;
  dpEmail: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private account: AccountService,
    private loaderSer: LoaderService
  ) {}
  ngOnInit(): void {
    this.loaderSer.toggleStauts(false);
    this.signUpForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
          ),
        ],
      ],
      uname: [null, [Validators.required]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
          ),
        ],
      ],
      address: this.fb.array([null]),
    });
  }
  createAccount() {
    this.account.getusers().subscribe((data: any) => {
      this.checkFound = data.findIndex(
        (el: any) => el.email === this.signUpForm.controls.email.value
      );
      if (this.checkFound === -1) {
        this.account.passInformation(this.signUpForm.value);
        this.account.changeStatus(true);
        this.account
          .adduser(this.signUpForm.value)
          .subscribe(() => console.log('done added'));
        this.route.navigate(['/profile']);
      } else {
        this.dpEmail = true;
      }
    });
  }

  get formControls() {
    return this.signUpForm.controls;
  }

  addNewAddress() {
    const addInput = new FormControl(null, [Validators.required]);
    this.adds.push(addInput);
  }

  delSpecAddress(index: number) {
    this.adds.removeAt(index);
  }

  get adds() {
    return this.signUpForm.controls.address as FormArray;
  }

  loginNavigate() {
    this.route.navigate(['']);
  }
}
