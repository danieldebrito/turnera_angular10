import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UloadImageComponent } from './uload-image.component';

const routes: Routes = [{ path: '', component: UloadImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UloadImageRoutingModule { }
