import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RatingModule
    ],
    exports: [TableComponent],
    providers: [],
})
export class SharedModule { }
