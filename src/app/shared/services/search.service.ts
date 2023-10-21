import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchText = new BehaviorSubject<string>('');
  searchTextobserv = this.searchText.asObservable();
  constructor() {}

  setItemByText(text: string) {
    this.searchText.next(text);
  }
}
