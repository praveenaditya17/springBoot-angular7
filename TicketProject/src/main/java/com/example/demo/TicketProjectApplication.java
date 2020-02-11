package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.model.Ticket;
import com.example.demo.service.TicketBookService;

@SpringBootApplication
public class TicketProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(TicketProjectApplication.class, args);

		
		
//		ConfigurableApplicationContext applicationContext=SpringApplication.run(TicketProjectApplication.class, args);
//		TicketBookService ticketBookingService=applicationContext.getBean("ticketBookingService",TicketBookService.class);
//		Ticket ticket=new Ticket();
//		ticket.setPassangerName("raj");
//		
//		ticketBookingService.createTicket(ticket);
	}

}
