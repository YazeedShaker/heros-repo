import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AllHerosPageComponent } from './all-heros-page/all-heros-page.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { AllHerosPageService } from './services/all-heros-page.service';
import { PagesRoutingModule } from './pages.routing';
import { FilterPipe } from '../pipes/filter.pipe';
import { UiSwitchModule } from 'ngx-toggle-switch';

@NgModule({
    declarations: [
        AllHerosPageComponent,
        HeroPageComponent,
        FilterPipe
    ],
    imports: [
        PagesRoutingModule,
        FormsModule,
        CommonModule,
        SharedModule,
        UiSwitchModule
    ],
    exports: [AllHerosPageComponent],
    providers: [AllHerosPageService],
})
export class PagesModule { }
