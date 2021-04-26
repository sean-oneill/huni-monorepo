import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'ecogas-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecogas';

  constructor(private router: Router, private icons: MatIconRegistry) {
    this.test();
  }

  

  public test(): void {
    console.log(this.router.isActive);
    console.log(this.icons.getDefaultFontSetClass());
  }
}