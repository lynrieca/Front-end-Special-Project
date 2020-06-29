import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatTableModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule,
    Material.MatDialogModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatTableModule,
    Material.MatSnackBarModule,
    Material.MatDialogModule
  ]
})
export class MaterialModule { }
