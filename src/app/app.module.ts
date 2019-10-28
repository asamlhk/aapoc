import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BinputDirective } from './binput.directive';
import { Page3Component } from './page3/page3.component';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupMaterialModule } from './material/material.module';
import { Page4Component } from './page4/page4.component';
import { HeaderComponent } from './header/header.component';
import { MliAnalyticsModule } from '@mli/analytics';
import { Page5Component } from './page5/page5.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule, EntityMetadataMap } from '@ngrx/data';
import { Hero, entityConfig } from './models';

const appRoutes: Routes = [
  {
    path: 'page1', component: Page1Component,

  },
  {
    path: 'page2', component: Page2Component,

  },
  {
    path: 'page3', component: Page3Component,

  },
  {
    path: 'page4', component: Page4Component
  },
  {
    path: 'page5', component: Page5Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    BinputDirective,
    Page3Component,
    Page4Component,
    HeaderComponent,
    Page5Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PdfViewerModule,
    WebcamModule,
    ImageCropperModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 100],
      } // <-- debugging purposes only,
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    GroupMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
    // MliAnalyticsModule.forRoot(environment.analyticUrl),
  ],
  providers: [
    {
      provide: 'analyticUrl', useValue: environment.analyticUrl
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
