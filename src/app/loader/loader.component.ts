import { Component } from '@angular/core';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoaded!: boolean
  constructor(private LoaderServices: LoaderService) { }

  ngOnInit(): void {
    this.LoaderServices.pageLoadedObserv.subscribe((data) => { this.isLoaded = data })
  }
}
