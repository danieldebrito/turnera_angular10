import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { AboutComponent } from './components/layout/about/about.component';
import { HomeComponent } from './components/layout/home/home.component';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SendEmailComponent } from './components/auth/send-email/send-email.component';
// turnos
import { TurnosBoardComponent } from './components/turnos/turnos-board/turnos-board.component';
import { TurnosGridComponent } from './components/turnos/turnos-grid/turnos-grid.component';
import { TurnosListadoComponent } from './components/turnos/turnos-listado/turnos-listado.component';
// PACIENTES
import { UserListadoComponent } from './components/pacientes/user-listado/user-listado.component';
import { HistoriaClinicaComponent } from './components/pacientes/historia-clinica/historia-clinica.component';
// CPANEL
import { CpanelBoardComponent } from './components/cpanel/cpanel-board/cpanel-board.component';
import { CpanelLoginComponent } from './components/cpanel/cpanel-login/cpanel-login.component';
import { CpanelAdminComponent } from './components/cpanel/cpanel-admin/cpanel-admin.component';
import { CpanelProfComponent } from './components/cpanel/cpanel-prof/cpanel-prof.component';
// INSTITUCIONAL
import { QuienesSomosComponent } from './components/institucional/quienes-somos/quienes-somos.component';
import { PlanesComponent } from './components/institucional/planes/planes.component';
import { ContactoComponent } from './components/institucional/contacto/contacto.component';
import { RrhhComponent } from './components/institucional/rrhh/rrhh.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomeComponent , data: {animation: 'home'}},
  { path: 'about', component: AboutComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent ,  data: {animation: 'login'}},
  { path: 'registro', component: RegisterComponent ,  data: {animation: 'registro'}},
  { path: 'verificaemail', component: SendEmailComponent },
  { path: 'turnoReserva', component: TurnosBoardComponent },
  { path: 'turnoListado', component: TurnosListadoComponent },
  { path: 'historiaClinica', component: HistoriaClinicaComponent },
  { path: 'profecionales', component: UserListadoComponent },
  { path: 'turnosGrid', component: TurnosGridComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'rrhh', component: RrhhComponent },
  {
    path: 'cpanel',
    component: CpanelBoardComponent,
    children:
      [{ path: '', component: CpanelLoginComponent },
      { path: 'administrador', component: CpanelAdminComponent },
      { path: 'profesional', component: CpanelProfComponent }]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'upload-image', loadChildren: () => import('./shared/upload-image/uload-image.module').then(m => m.UloadImageModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
