import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductdetailsComponent } from './components/productdetails/productdetails/productdetails.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{
  "path":"",
  component:HomeComponent,
},
{

  "path":"productdetails/:id",
  component:ProductdetailsComponent,

}
];
