import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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


  constructor(public auth:AuthService, public user:UsersService, private red:Router) { }

  inscr() {
    this.auth.fireNewUser();
  }

  complete(profile : NgForm) {
    console.log(profile);
    this.user.gereInscr(profile);
    this.red.navigate(["/profil"]);
  }
}
