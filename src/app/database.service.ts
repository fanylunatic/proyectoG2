import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  addCoach(coach: any)
  {
    return this.firestore.collection('coachs').add(coach);
  }

  getCoachs(): Observable<any>
  {
    return this.firestore.collection('coachs').snapshotChanges();
  }

  deleteCoach(id: string): Promise<any>{
    return this.firestore.collection('coachs').doc(id).delete();
  }

  getCoach(id: string): Observable<any>{
    return this.firestore.collection('coachs').doc(id).snapshotChanges();
  }

  updateCoach(id: string, data:any){
    return this.firestore.collection('coachs').doc(id).update(data);
  }
}
