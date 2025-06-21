import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Catalogo } from './components/pages/catalogo/catalogo';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path: "home", component: Home, title: "home"},
    {path: "catalogo", component: Catalogo, title: "catalogo"},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "**", component : PageNotFound, title: "Page Not Found"}
];
