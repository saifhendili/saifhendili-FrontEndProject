import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../models/Fournisseur';
import { FounisseurService } from '../../Services/founisseur.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs:Fournisseur[];
  fournisseurToEdit:Fournisseur;
  showAdd = false;
  nb=5;
Stat:any;
  show:true;
  searchVal:'';
 
  constructor(private ac:ActivatedRoute, private FounisseurServ:FounisseurService) { }
  
  ngOnInit(): void {
    
    this.FounisseurServ.getAllFournisseurFromServer().subscribe(res=>{
      this.fournisseurs=res;
  });
   this.FounisseurServ.getChiffreAffaireAllFournisseur().subscribe(res=>{
      this.Stat=res;
      console.log(this.Stat);
      console.log("ddd"+this.Stat.map(i=>i.Fournisseur));
  })
  }

  MyStatistique(){
 
}

  DeleteBtn(fournisseur :Fournisseur , x:number){
    this.FounisseurServ.deleteFournisseur(fournisseur).subscribe();
    this.fournisseurs.splice(x,1);
  }

  
  editFournisseur(x:Fournisseur){
    this.show=true;
    this.fournisseurToEdit=x;
    
  }
  
  editMyFournisseur(i:any){
    for (let k in this.fournisseurs){
      if (this.fournisseurs[k].idFournisseur == i.idFournisseur){
        this.fournisseurs[k]=i;
      }
    }

    

    
  }
  showForm(){
    this.showAdd=true;
  }
  addFournisseur(i:Fournisseur){
this.fournisseurs.push(i);
  }



 
}