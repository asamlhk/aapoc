import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AdobeGuardService } from './adobe-guard.service'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BinputDirective } from './binput.directive';

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component, canActivate: [AdobeGuardService], },
  { path: 'page2', component: Page2Component, canActivate: [AdobeGuardService], },

];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    BinputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [
    {
      provide: Window, useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
