import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'app',component:AppComponent},
 { path:'showTicket',component:ShowTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ShowTicketComponent]
