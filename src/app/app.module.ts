import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { DeleteComponent } from './delete/delete.component';
import { routes } from './app.routes';
import { SharedModule } from './shared/components/shared.module';

@NgModule({
  declarations: [AppComponent, MainComponent, DeleteComponent],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
