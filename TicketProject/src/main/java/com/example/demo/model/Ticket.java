package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity

public class Ticket {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private int ticketId;
	private String passanger_name;
	public Ticket() {}
	public Ticket(Integer ticketId,String passangerName) {
		this.ticketId=ticketId;
		this.passanger_name=passangerName;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public String getPassangerName() {
		return passanger_name;
	}

	public void setPassangerName(String passanger_name) {
		this.passanger_name = passanger_name;
	}
//
//	public void setPassangerName1(String passangerName2) {
//		// TODO Auto-generated method stub
//		PassangerName = passangerName2;
//	}
//	

}
