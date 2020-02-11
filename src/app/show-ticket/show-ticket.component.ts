import { Component, OnInit } from '@angular/core';
import {JavaCallService,Ticket} from '../java-call.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit {
  ticket:Ticket[];
  constructor(private javacall:JavaCallService) {
    this.javacall.getAllTicket().subscribe(
      (response) =>{this.ticket = response;
        console.log(response[1]);
      }
     );
  
   }

  ngOnInit() {
    console.log("routing pe..............");
  }

}
