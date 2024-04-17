import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'services', component: TestComponent},
{path: 'projects', component: TestComponent},
{path: 'aboutUs', component: TestComponent},
{path: 'signUp', component: TestComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }