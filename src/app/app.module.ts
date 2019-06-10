import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImgInfoContainerComponent } from './img-info-container/img-info-container.component';
import { RenderDataComponent } from './render-data/render-data.component';
import { FacesComponent } from './faces/faces.component';
import { LabelsComponent } from './labels/labels.component';
import { WebComponent } from './web/web.component';
import { PropertiesComponent } from './properties/properties.component';
import { SafeSearchComponent } from './safe-search/safe-search.component';
import { JsonComponent } from './json/json.component';

import { HttpApiService } from './http-api.service';
import { AppModelService } from './app-model.service';

import { AppRoutingModule } from './app-routing.module';
import { KeepHtmlPipe } from './keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UploadImgComponent,
    ImageDetailsComponent,
    ImgInfoContainerComponent,
    RenderDataComponent,
    FacesComponent,
    LabelsComponent,
    WebComponent,
    PropertiesComponent,
    SafeSearchComponent,
    JsonComponent,
    KeepHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpApiService, AppModelService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
