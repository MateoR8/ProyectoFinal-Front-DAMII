import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncTecnicaService {

  constructor(private firestore: Firestore) { }

  getIncTecnicaData(): Observable<any[]> {
    const incTecnicaCollection = collection(this.firestore, 'incidenciaTecnica');
    return collectionData(incTecnicaCollection, { idField: 'id' }) as Observable<any[]>;
  }

  eliminarIncidenciaTecnica(codigo: String) {
    const incTecnicaDocRef = doc(this.firestore, `incidenciaTecnica/${codigo}`);
    return deleteDoc(incTecnicaDocRef);
  }
}
