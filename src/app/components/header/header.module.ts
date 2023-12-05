import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarModule } from '@coreui/angular';
import { NavModule } from '@coreui/angular';
import { CollapseModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { FormModule } from '@coreui/angular';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NavbarModule,
    NavModule,
    CollapseModule,
    ReactiveFormsModule,
    GridModule,
    ButtonModule,
    RouterModule,
    FormModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
