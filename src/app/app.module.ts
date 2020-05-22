import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay'; 

import { SidenavModule } from './modules/sidenav/sidenav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    SidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('angular-material-router-app-theme');
  }
}
