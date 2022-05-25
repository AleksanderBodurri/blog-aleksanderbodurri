import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routes/landing/landing.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    pathMatch: "full"
  }
];

const routerModuleImport = RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking'});

@NgModule({
  imports: [routerModuleImport],
  exports: [RouterModule]
})
export class AppRoutingModule { }
