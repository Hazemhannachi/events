import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  { path: 'eventList', component: ListEventComponent },
  { path: 'eventAdd', component: AddEventComponent },
  {path: "updateEvent/:id", component: UpdateEventComponent},
  { path: '', redirectTo: 'eventList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
