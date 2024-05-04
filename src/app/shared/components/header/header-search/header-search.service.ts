import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderSearchService {
  private isOpen: boolean = false;
  private isClose: boolean = false;

  constructor() {}

  getIsOpen() {
    return this.isOpen;
  }

  openSearch() {
    this.isOpen = true;
  }

  closeSearch() {
    this.isOpen = false;
  }

  getClose() {
    return this.isClose;
  }

  mobileCloseSearch() {
    this.isClose = true;

    setTimeout(() => {
      this.isOpen = false;
      this.isClose = false;
    }, 500);
  }
}
