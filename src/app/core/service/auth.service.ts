import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: Firestore) {}

  async login(user: String, password: String){
    const usersRef = collection(this.firestore, 'usuarios');

    const q = query(usersRef, where('user', '==', user), where('password', '==', password));
    const result = await getDocs(q);

    if(result.empty){
      return null;
    }
    return result.docs[0].data();
  }


}
