import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(private loaderSer:LoaderService) {}
  ngOnInit(): void {
    this.loaderSer.toggleStauts(false)
  }
}
