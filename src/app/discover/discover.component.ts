import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit{
  constructor(private route: Router,private loaderSer:LoaderService) {}
  toNavigate(text:string) {
    this.route.navigate([`${text}`]);
  }
  ngOnInit(): void {
    this.loaderSer.toggleStauts(false)
  }
}
