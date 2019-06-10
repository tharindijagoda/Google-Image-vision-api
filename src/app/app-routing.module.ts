import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadImgComponent } from './upload-img/upload-img.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/upload-img', pathMatch: 'full' },
  { path: 'upload-img', component: UploadImgComponent },
  { path: 'img-details', component: ImageDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
