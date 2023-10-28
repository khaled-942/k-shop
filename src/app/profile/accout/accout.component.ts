import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/userInterface';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-accout',
  templateUrl: './accout.component.html',
  styleUrls: ['./accout.component.scss'],
})
export class AccoutComponent implements OnInit {
  user!: User;
  constructor(private account: AccountService) {}
  ngOnInit(): void {
    this.account.infoObs.subscribe((data: any) => {
      this.user = data;
    });
    // this.account.getusers().subscribe((data:any)=>{
    // })

    // this.account.infoObs.subscribe((data:any)=>{
    // })
  }
}
