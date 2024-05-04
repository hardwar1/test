import { Component,  ElementRef } from '@angular/core';
import { HeaderSearchService } from './header-search.service';

@Component({
  selector: 'shard-header-search',
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss',
})
export class HeaderSearchComponent {
  showGradient = true
  showDropdown = false
  history = [
    'закрепить теги',
    'закрепить теги',
    'закрепить теги',
    'закрепить теги',
    'закрепить теги',
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
    'выпадающий список',
  ];

  checkList1 = ['Я участник', 'Строгий поиск', 'В заголовках'];
  checkList2 = ['Теги', 'Просьбы', 'Контакты'];

  constructor(private elementRef: ElementRef, public headerSearchService: HeaderSearchService) {}

  onScroll(event: any) {
    const scrollableDiv = this.elementRef.nativeElement.querySelector('.history');

    if (scrollableDiv.scrollHeight - scrollableDiv.scrollTop === scrollableDiv.clientHeight ) {
      this.showGradient = false
    } else {
      this.showGradient = true
    }
  }

}
