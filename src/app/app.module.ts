import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { LayoutComponent } from './home/layout/layout.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactureComponent } from './facture/facture.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { FormFournisseurComponent } from './Fournisseur/form-fournisseur/form-fournisseur.component';
import { ListFournisseurComponent } from './Fournisseur/list-fournisseur/list-fournisseur.component';
import { GetFournisseurComponent } from './Fournisseur/get-fournisseur/get-fournisseur.component';
import { CategorieFournisseurComponent } from './Fournisseur/categorie-fournisseur/categorie-fournisseur.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';

import { CategoryService, LegendService, DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { FournisseurChartComponent } from './Fournisseur/fournisseur-chart/fournisseur-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FournisseurPieChartsComponent } from './fournisseur-pie-charts/fournisseur-pie-charts.component';


@NgModule({
  declarations: [
   
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidbarComponent,
    LayoutComponent,
    ProduitListComponent,
    FormFournisseurComponent,
    ListFournisseurComponent,
    GetFournisseurComponent,
    CategorieFournisseurComponent,
    FournisseurChartComponent,
    FournisseurPieChartsComponent,
    
    
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartModule,
    NgxChartsModule,
    
  ],
  providers: [ CategoryService, LegendService, DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
