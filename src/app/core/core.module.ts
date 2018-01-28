import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent]
})
export class CoreModule { }
