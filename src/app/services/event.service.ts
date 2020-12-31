import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  events: Event[];

  event: Event;

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'Medibat',
        description:
          'International trade show for Media and Advertising Industry.',
        location: 'Sfax',
        creationDate: new Date('03/06/2021'),
      },
      {
        id: 2,
        name: 'Tunisia Education Exposition ',
        description: 'Higher Education Conference and Study abroad fair',
        location: 'Tunis',
        creationDate: new Date('01/20/2021'),
      },
      {
        id: 3,
        name: 'International Conference on Cyber Management and Engineering ',
        description: 'conference',
        location: 'Hammamet',
        creationDate: new Date('05/28/2021'),
      },
      {
        id: 4,
        name: 'ENVIROTEC & ENERGIE EXPO',
        description:
          'International exhibition of environmental protection, water treatment and renewable energy',
        location: 'Tunis',
        creationDate: new Date('06/04/2021'),
      },
    ];
  }
  getEvents(): Event[] {
    return this.events;
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }
  deleteEvent(event: Event) {
    //supprimer le produit prod du tableau produits
    const index = this.events.indexOf(event, 0);
    if (index > -1) {
      this.events.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }

  consultEvent(id: number): Event {
    this.event = this.events.find((e) => e.id == id);
    return this.event;
  }

  updateEvent(e: Event) {
    // console.log(e);
    this.deleteEvent(e);
    this.addEvent(e);
    this.sortEvents();
  }

  sortEvents(){
    this.events = this.events.sort((n1,n2) => {
    if (n1.id > n2.id) {
    return 1;
    }
    if (n1.id < n2.id) {
    return -1;
    }
    return 0;
    });
    }

}
