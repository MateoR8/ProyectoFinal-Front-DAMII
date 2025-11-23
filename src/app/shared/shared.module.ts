import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    SidebarComponent,
    BodyComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
],
  exports: [
    SidebarComponent,
    BodyComponent,
    IndexComponent
  ]
})
export class SharedModule { }
