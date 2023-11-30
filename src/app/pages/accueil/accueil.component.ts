import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  title = 'MakerParty';
  soustitre:string = "L'application de gestion de vos soirées";
  moustache:string = 'Inscrit toi, soit pas timide';
  listeMoustaches:Array<string> = ['Depeche', 'plus vite !'];
  autreListeMoustaches:string[] = [];
}
