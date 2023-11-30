import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  @Input() nom: string = '';
  @Input() prenom: string = '';
  @Input() id: string = '';
  @Input() statut: string = '';
  @Input() infos: string = '';
}
