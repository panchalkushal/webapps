import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournaleditComponent } from './journal/journaledit.component';

const routes: Routes = [
  { path: 'journal/edit', component: JournaleditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
