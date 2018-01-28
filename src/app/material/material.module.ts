import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material'

@NgModule({
    imports: [MatButtonModule, MatSidenavModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatSidenavModule, MatFormFieldModule, MatInputModule]
})

export class MaterialModule {

}