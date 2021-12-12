import { FactureModulesModule } from './facture-modules/facture-modules.module';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { FactureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';
import {  ListFournisseurComponent } from './Fournisseur/list-fournisseur/list-fournisseur.component';
import {GetFournisseurComponent} from './Fournisseur/get-fournisseur/get-fournisseur.component'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      {path:'facture', loadChildren: 
()=>import('./facture-modules/facture-modules.module').then(m=>m.FactureModulesModule)} ,
     // { path: 'facture', component: FactureComponent },
    //  { path: 'detailfacture/:idfacture', component: DetailFactureComponent },
      { path: 'listProduit', component: ProduitListComponent },
      { path: 'listFournisseur', component:ListFournisseurComponent,children:[ {
        path:":id",component:GetFournisseurComponent
      }]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
