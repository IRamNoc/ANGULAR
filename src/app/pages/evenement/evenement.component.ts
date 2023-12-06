import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EvenementsService } from 'src/app/shared/services/evenements.service';
import { ParticipantsService } from 'src/app/shared/services/participants.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  event!: EvenementI;
  param!: string;
  loader = true;
  countInscrits!: number;
  isInscrit = false;

  constructor(
    public activeRoute: ActivatedRoute,
    public evenements: EvenementsService,
    public auth: AuthService,
    public participants: ParticipantsService
  ) {
    this.param = this.activeRoute.snapshot.paramMap.get('event') || '';
    this.loadEventDetails();
  }

  ngOnInit() {}

  private loadEventDetails() {
    this.evenements.getEvenement(this.param).then(
      (ev) => {
        this.event = ev;
        this.loader = false;
        this.checkUserInscription();
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  private checkUserInscription() {
    if (this.auth.isLoggedIn) {
      this.participants.getParticipation(this.param, this.auth.user.uid).then(
        (participation) => {
          if (participation) {
            this.isInscrit = true;
          }
        }
      ).catch(
        (er) => console.log(er)
      );
    }
  }

  public inscription() {
    const participant = { idUser: this.auth.user.uid, nom: this.auth.profil.nom, prenom: this.auth.profil.prenom, event: this.param };
    try {
      this.participants.inscription(participant);
      this.getCountInscrits();
      this.isInscrit = true;
    } catch (error) {
      console.error(error);
    }
  }

  public desincrire() {
    this.participants.deleteParticipation(this.param, this.auth.user.uid).then(
      () => {
        this.isInscrit = false;
        this.getCountInscrits();
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  private getCountInscrits() {
    this.participants.getCountInscrits(this.param).then(
      (count) => {
        this.countInscrits = count;
      }
    ).catch(
      (er) => console.log(er)
    );
  }
}
