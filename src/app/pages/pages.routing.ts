import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHerosPageComponent } from './all-heros-page/all-heros-page.component';
import { HeroPageComponent } from './hero-page/hero-page.component';

const routes: Routes = [
    { path: '', component: AllHerosPageComponent },
    { path: 'hero', component: HeroPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
