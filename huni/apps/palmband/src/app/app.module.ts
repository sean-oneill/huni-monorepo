import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@huni/svg-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    SvgIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
