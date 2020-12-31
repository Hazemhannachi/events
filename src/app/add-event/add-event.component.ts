import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  newEvent: Event = new Event();
  constructor(private eventService:EventService) {}

  ngOnInit(): void {}

  addEvent() {
    this.eventService.addEvent(this.newEvent);
  }
}
