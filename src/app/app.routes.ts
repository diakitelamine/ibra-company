import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { NgModule } from '@angular/core';
import { ProduitsComponent } from './produits/produits.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { ActiviteComponent } from './activite/activite.component';
import { GalerieComponent } from './galerie/galerie.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    {path: 'partenaire',component:PartenaireComponent}, 
    {path: 'produits', component: ProduitsComponent},
    {path:'temoignage',component:TemoignageComponent},
    {path: 'activite', component: ActiviteComponent},
    {path: 'galerie', component: GalerieComponent}
  ]; 
  
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
  
