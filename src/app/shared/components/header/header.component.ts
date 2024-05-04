import { Component, HostListener } from '@angular/core';
import { allSvg } from '../svg/svg.component';
import { HeaderSearchService } from './header-search/header-search.service';

interface IMenuLinks {
  svg: allSvg;
  text: string;
  href: string;
}

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuLinks: IMenuLinks[] = [
    {
      svg: 'link',
      text: 'Ссылки',
      href: '/',
    },
    {
      svg: 'users',
      text: 'Контакты',
      href: '/',
    },
    {
      svg: 'sharp',
      text: 'Теги',
      href: '/',
    },
    {
      svg: 'star',
      text: 'Избранное',
      href: '/',
    },
    {
      svg: 'clock',
      text: 'Посещения',
      href: '/',
    },
  ];
  menuOpen = false;

  constructor(public headerSearchService: HeaderSearchService) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (
      event.target &&
      !(event.target as HTMLElement).closest('.header-search') &&
      !(event.target as HTMLElement).closest('.header__search-btn')
    ) {
      this.headerSearchService.closeSearch();
    }
  }
}
