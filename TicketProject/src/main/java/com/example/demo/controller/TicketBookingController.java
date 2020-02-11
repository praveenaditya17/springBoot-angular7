package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.TicketBookDao;
import com.example.demo.model.Ticket;

@RestController
@RequestMapping("/tickts")
@CrossOrigin
public class TicketBookingController {
		
		@Autowired
		public TicketBookDao dao;
		
		@RequestMapping("/create")
		public Ticket createTiket(Ticket ticket) {
			System.out.println(ticket.getPassangerName());
			dao.save(ticket);
			return ticket;
			
		}
		@GetMapping("/get")
		public List getTicket() {
			List l=(List) dao.findAll();
			return l;
			
		}
		
}
