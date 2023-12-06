import { Component } from '@angular/core';
import { ContactI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: ContactI = {
    nom: '',
    prenom: '',
    age: 0,
    adresse: {
      rue: '',
      codePostal: 64000,
      ville: ''
    },
    tel: '',
    mobile: '',
    email: '',
    infos: ''
  };

  sendMessage() {
    console.log(this.contact);
    // Ici, tu peux ajouter une logique pour envoyer le message (par exemple, via un service).
  }
}
