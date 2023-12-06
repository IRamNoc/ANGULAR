import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, setDoc, getDoc, deleteDoc, getDocs } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { UsersI } from '../models/users-i';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersList : Array<UsersI> = [];

  constructor(private store:Firestore, private auth:AuthService) { }

  gereInscr(profil: NgForm){
    const monInscr = doc(this.store, 'users', this.auth.user.uid);
    setDoc(monInscr, profil, {merge:true})
    .then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }

  deleteDoc(id:string){
    deleteDoc(doc(this.store, 'users', id)).then(
      () => {
        console.log('supprimé');
        this.auth.deleteUser();
      }
    ).catch(
      er => console.log(er)
    );
  }

  getAllUsers(){
    this.usersList = [];
    getDocs(collection(this.store, 'users')).then(
      (docs) => {
        docs.forEach(
          (doc) => {
            this.usersList.push(doc.data() as UsersI);
          }
        );
      }
    ).catch(
      (er) => console.log(er)
    );
  }
}
