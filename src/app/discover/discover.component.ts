import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent {
  constructor(private route: Router) {}
  toNavigate(text:string) {
    this.route.navigate([`${text}`]);
  }
}
