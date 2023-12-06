import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnDestroy, OnInit {
  filtre = '';
  listener: Subscription;
  depart = 0;
  pas = 5;

  constructor(public events: EvenementsService) {
    this.listener = this.events.listeEvent$.subscribe({
      next : (ev) => {console.log("From Observable",ev);},
      error : (er) => console.log(er),
      complete : () => console.log("Observable terminé")
    });;
  }

  ngOnInit(): void {
    this.fetchEvenements();
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }

  avant() {
    this.depart += 4;
  }

  arriere() {
    this.depart -= 4;
  }

  private fetchEvenements() {
    this.events.getEvenements();
    console.log('LIST', this.events.listeEvenements);
  }
}
