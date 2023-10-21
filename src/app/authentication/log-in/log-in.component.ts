import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  login: FormGroup | any;
  constructor(private fb: FormBuilder, private account:AccountService, private route:Router) { }
  ngOnInit(): void {
    this.login = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)]],
      password: [null, [Validators.required, Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)]],
    });
  }

  get controls(){
    return this.login.controls
  }

  submitValue() {
    this.account.passInformation(this.login.value);
    this.account.changeStatus(true);
    this.route.navigate(['/profile'])
    console.log(this.login.value)
  }
}
