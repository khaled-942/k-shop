import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-accout',
  templateUrl: './accout.component.html',
  styleUrls: ['./accout.component.scss']
})
export class AccoutComponent implements OnInit {
  name!: string
  email!: string
  address!: string
  password!: number
  constructor(private account: AccountService) { }
  ngOnInit(): void {
    this.account.infoObs.subscribe((data:any)=>{
      this.name = data.name;
      this.email = data.email;
      this.address = data.formArrayAddress;
      this.password = data.password;
    })
  }
}
