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
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MlAnalyticModule, MlAnalyticGuardService } from 'ml-analytic';
import { MlAnalyticService } from 'projects/ml-analytic/src/public-api';


const appRoutes: Routes = [
  {
    path: 'page1', component: Page1Component,
    canActivate: [MlAnalyticGuardService],
  },
  {
    path: 'page2', component: Page2Component,
    canActivate: [MlAnalyticGuardService],
  },
  {
    path: 'page3', component: Page3Component,
    canActivate: [MlAnalyticGuardService],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    BinputDirective,
    Page3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PdfViewerModule,
    WebcamModule,
    ImageCropperModule,
    MlAnalyticModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    MlAnalyticService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
