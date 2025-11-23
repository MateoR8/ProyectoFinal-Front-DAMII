import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { IndexComponent } from './shared/index/index.component';
import { IncTecnicaComponent } from './modules/inc-tecnica/inc-tecnica.component';
import { IncGeneralComponent } from './modules/inc-general/inc-general.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', redirectTo: 'inc-general', pathMatch: 'full' },
      { path: 'inc-tecnica', component: IncTecnicaComponent },
      { path: 'inc-general', component: IncGeneralComponent },
    ]
  },

  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
