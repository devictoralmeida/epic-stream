import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarModule } from '@coreui/angular';
import { NavModule } from '@coreui/angular';
import { CollapseModule } from '@coreui/angular';
import { FormModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NavbarModule,
    NavModule,
    CollapseModule,
    FormModule,
    GridModule,
    ButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
