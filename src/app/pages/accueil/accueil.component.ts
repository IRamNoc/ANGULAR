import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  appTitle = 'CY TECH Party Planner';
  subTitle = "L'application de gestion de soirées étudiantes";
  welcomeMessage = "Préparez-vous à vivre des moments inoubliables avec vos amis de CY TECH !";
  mustaches: string[] = ['Planification facile', 'Événements mémorables', 'Convivialité garantie'];
}
