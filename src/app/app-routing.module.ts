import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BygenerComponent } from './bygener/bygener.component';
import { ByratingComponent } from './byrating/byrating.component';

const appRoutes: Routes =[
    { path: '', redirectTo: '/homepage', pathMatch:'full'},
    { path: 'homepage', component: HomepageComponent},
    { path: 'ByGener', component: BygenerComponent},
    { path: 'ByRating', component: ByratingComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
