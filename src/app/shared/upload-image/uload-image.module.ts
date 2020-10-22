import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UloadImageRoutingModule } from './uload-image-routing.module';
import { UloadImageComponent } from './uload-image.component';
import { NgClinicaOnLineFilesDirective } from './directives/ng-clinica-on-line-files.directive';


@NgModule({
  declarations: [UloadImageComponent, NgClinicaOnLineFilesDirective],
  imports: [
    CommonModule,
    UloadImageRoutingModule
  ]
})
export class UloadImageModule { }
