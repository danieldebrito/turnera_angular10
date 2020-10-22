import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// SERVICES
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

// STYLES
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// LAYOUT
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { AboutComponent } from './components/layout/about/about.component';
import { HomeComponent } from './components/layout/home/home.component';
// USERS
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { environment } from 'src/environments/environment.prod';
import { SendEmailComponent } from './components/auth/send-email/send-email.component';
// TURNOS
import { TurnosBoardComponent } from './components/turnos/turnos-board/turnos-board.component';
import { TurnosReservarComponent } from './components/turnos/turnos-reservar/turnos-reservar.component';
import { TurnoConfirmacionComponent } from './components/turnos/turno-confirmacion/turno-confirmacion.component';
import { TurnosListadoComponent } from './components/turnos/turnos-listado/turnos-listado.component';
// PACIENTES
import { UserListadoComponent } from './components/pacientes/user-listado/user-listado.component';
import { UserFichaComponent } from './components/pacientes/user-ficha/user-ficha.component';
import { DatepickerComponent } from './components/turnos/datepicker/datepicker.component';
import { TurnosGridComponent } from './components/turnos/turnos-grid/turnos-grid.component';
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
import { CpanelAdminMenuItemsComponent } from './components/cpanel/cpanel-admin/cpanel-admin-menu-items/cpanel-admin-menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SendEmailComponent,
    TurnosBoardComponent,
    TurnosReservarComponent,
    UserListadoComponent,
    UserFichaComponent,
    DatepickerComponent,
    TurnosGridComponent,
    TurnoConfirmacionComponent,
    CpanelBoardComponent,
    CpanelLoginComponent,
    CpanelAdminComponent,
    CpanelProfComponent,
    HistoriaClinicaComponent,
    TurnosListadoComponent,
    QuienesSomosComponent,
    PlanesComponent,
    ContactoComponent,
    RrhhComponent,
    CpanelAdminMenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // FormControl,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxPaginationModule
  ],
  providers: [
    AuthService,
    { provide: BUCKET, useValue: 'gs://clinicaonline-745d6.appspot.com/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
