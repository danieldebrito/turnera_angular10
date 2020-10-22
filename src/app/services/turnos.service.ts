import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Turno } from 'src/app/class/Turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  ItemsCollection: AngularFirestoreCollection<Turno>;
  ItemDoc: AngularFirestoreDocument<Turno>;
  Items: Observable<Turno[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('Turnos');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Turno;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Turno) {
    this.ItemDoc = this.db.doc(`Turnos/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Turno) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Turno) {
    this.ItemDoc = this.db.doc(`Turnos/${Item.id}`);
    this.ItemDoc.update(Item);
  }

  getfecha() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString();
    const mes = (fechaActual.getMonth() + 1).toString();
    const anio = fechaActual.getFullYear().toString();
    const hora = fechaActual.getHours().toString();
    const minutos = fechaActual.getMinutes().toString();
    const segundos = fechaActual.getSeconds().toString();
    /*
    this.fecha = dia + '/' + mes + '/' + anio;
    this.hora = hora + ':' + minutos + ':' + segundos;

    const ret = this.fecha;

    return ret;*/
    return fechaActual;
  }
}
