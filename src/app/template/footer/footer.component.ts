import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footerMessage = '© 2023 CY TECH Party Planner. Tous droits réservés.';
  contactEmail = 'contact@cytechpartyplanner.com';
}
