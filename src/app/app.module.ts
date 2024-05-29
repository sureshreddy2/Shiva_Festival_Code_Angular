import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimatedButtonsComponent } from './animated-buttons/animated-buttons.component';
import { PureCSSLoaderElementSwappyComponent } from './Spinner/pure-cssloader-element-swappy/pure-cssloader-element-swappy.component';
import { AnimatedSpinnersComponent } from './Spinner/animated-spinners/animated-spinners.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedButtonsComponent,
    PureCSSLoaderElementSwappyComponent,
    AnimatedSpinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
