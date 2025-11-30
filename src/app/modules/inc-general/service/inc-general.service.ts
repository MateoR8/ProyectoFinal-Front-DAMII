import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncGeneralService {

  constructor(private firestore: Firestore) {}

  getIncGeneralData(): Observable<any[]> {
    const incGeneralCollection = collection(this.firestore, 'incidenciaGeneral');
    return collectionData(incGeneralCollection, { idField: 'id' }) as Observable<any[]>;
  }

  eliminarIncidenciaGeneral(codigo: String){
    const incGeneralDocRef = doc(this.firestore, `incidenciaGeneral/${codigo}`);
    return deleteDoc(incGeneralDocRef);
  }
}
