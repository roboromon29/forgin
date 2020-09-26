import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule }  from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ], 
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
