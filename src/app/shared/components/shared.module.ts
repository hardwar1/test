import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SvgComponent } from './svg/svg.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from './header/header-search/header-search.component';

@NgModule({
  declarations: [HeaderComponent, SvgComponent, HeaderSearchComponent],
  imports: [RouterModule, CommonModule],
  exports: [HeaderComponent, SvgComponent, HeaderSearchComponent],
})
export class SharedModule {}
