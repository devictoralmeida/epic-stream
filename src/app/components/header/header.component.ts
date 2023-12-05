import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  form: FormGroup = new FormGroup({
    searchTerm: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router) {}

  searchMovie(): void {
    console.log(this.form);
    const searchTerm = this.form.get('searchTerm')!.value;
    this.router.navigate(['/movies'], { queryParams: { query: searchTerm } });
  }
}
