import { Component } from '@angular/core';
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
    const searchTerm = this.form.get('searchTerm')!.value;
    this.router.navigate(['/movies'], { queryParams: { query: searchTerm } });
  }

  getFamily(): void {
    const categoryId = 10751;
    this.router.navigate(['/movies'], {
      queryParams: { category: categoryId },
    });
  }

  getAction(): void {
    const categoryId = 28;
    this.router.navigate(['/movies'], {
      queryParams: { category: categoryId },
    });
  }

  getDocs(): void {
    const categoryId = 99;
    this.router.navigate(['/movies'], {
      queryParams: { category: categoryId },
    });
  }

  getComedy(): void {
    const categoryId = 35;
    this.router.navigate(['/movies'], {
      queryParams: { category: categoryId },
    });
  }

  getSciFi(): void {
    const categoryId = 878;
    this.router.navigate(['/movies'], {
      queryParams: { category: categoryId },
    });
  }
}
