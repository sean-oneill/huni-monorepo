import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuniCardComponent } from './presentational-components/huni-card';

@NgModule({
  declarations: [HuniCardComponent],
  imports: [CommonModule],
  exports: [HuniCardComponent],
})
export class ComponentsModule {}
