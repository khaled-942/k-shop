import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor(private loaderSer: LoaderService) {}
  ngOnInit(): void {
    this.loaderSer.toggleStauts(false);
  }
}
