import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../../services/package.service';
import { TravelPackage } from '../../models/travel-package';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {
  packageForm: FormGroup;
  packageId?: number;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private service: PackageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.packageForm = this.fb.group({
      title: ['', Validators.required],
      destination: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.packageId = Number(id);
        this.loadPackage(this.packageId);
      }
    });
  }

  private loadPackage(id: number): void {
    this.loading = true;
    this.service.findById(id).subscribe({
      next: result => {
        this.packageForm.patchValue(result);
        this.loading = false;
      },
      error: error => {
        this.errorMessage = 'Could not load package details.';
        console.error(error);
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.packageForm.invalid) {
      this.packageForm.markAllAsTouched();
      return;
    }

    const travelPackage: TravelPackage = this.packageForm.value;
    this.loading = true;

    const request = this.packageId
      ? this.service.update(this.packageId, travelPackage)
      : this.service.create(travelPackage);

    request.subscribe({
      next: () => this.router.navigate(['/']),
      error: error => {
        this.errorMessage = 'Failed to save package. Check validation and backend connectivity.';
        console.error(error);
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
