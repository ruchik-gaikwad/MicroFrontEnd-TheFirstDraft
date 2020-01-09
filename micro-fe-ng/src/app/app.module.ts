import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomElementComponent } from './custom-element/custom-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    CustomElementComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const { injector } = this;
    
    // Creating Custom elements from angular components
    const ngCustomElement = createCustomElement(CustomElementComponent, {injector});

    // define in browser registry
    customElements.define('ng-el', ngCustomElement);
    
  }
 }
