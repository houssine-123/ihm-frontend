import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouteroffre',
  templateUrl: './ajouteroffre.component.html',
  styleUrls: ['./ajouteroffre.component.css']
})
export class AjouteroffreComponent {
  offre = {
    address: '',
    contact: '',
    postesVacants: 0,
    experienceRequiree: '',
    languesRequirees: '',
    niveauEtude: '',
    id_s_cat: 0
  };

  onSubmit() {
    console.log('Offre soumise :', this.offre);
    // Ici tu peux envoyer les données à ton backend Laravel via HTTP
  }
}
