import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageListComponent } from './components/package-list/package-list.component';
import { PackageFormComponent } from './components/package-form/package-form.component';

const routes: Routes = [
  { path: '', component: PackageListComponent },
  { path: 'packages/new', component: PackageFormComponent },
  { path: 'packages/:id/edit', component: PackageFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
