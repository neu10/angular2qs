import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { MyScrollDirective }  from '../shared/scroll.directive';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,ReactiveFormsModule,CommonModule],
  declarations: [ AppComponent,MyScrollDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
