import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrl: './loader-spinner.component.scss',
  standalone: true,
  imports: [CommonModule, SpinnerModule, GridModule],
})
export class LoaderSpinnerComponent {

}
