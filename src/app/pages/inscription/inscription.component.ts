import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  nom : string = '';
  prenom : string = '';
  id : string = '';
  email : string = '';
  statut : string = '';
  infos : string = '' ;
  mdp : string = '';


  constructor(public auth:AuthService, public user:UsersService) { }

  inscr() {
    this.auth.fireNewUser();
  }

}
