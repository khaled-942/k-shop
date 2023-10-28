import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/userInterface';
import { AccountService } from 'src/app/shared/services/account.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  login: FormGroup | any;
  validEmail: boolean = false;
  validPass: boolean = false;
  user!: User[];
  constructor(
    private fb: FormBuilder,
    private account: AccountService,
    private route: Router,
    private loaderSer: LoaderService
  ) {}
  ngOnInit(): void {
    this.loaderSer.toggleStauts(false);
    this.login = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
          ),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
          ),
        ],
      ],
    });
  }

  get controls() {
    return this.login.controls;
  }

  submitValue() {
    this.account.getusers().subscribe((user: any) => {
      this.user = user.filter(
        (item: any) => item.email === this.login.controls.email.value
      );
      if (this.user[0].password === this.login.controls.password.value) {
        this.account.passInformation(this.user[0]);
        this.account.changeStatus(true);
        this.route.navigate(['/profile']);
      } else {
        this.validPass = true;
      }
    });
  }
}
