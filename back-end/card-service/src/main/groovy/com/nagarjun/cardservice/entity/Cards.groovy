package com.nagarjun.cardservice.entity

import org.springframework.data.annotation.Id

class Cards {
	@Id
	public String id;
	public String name;
	public String project;
	public String text;
	public String hours;
	public boolean access;
	
	public Cards(){
	}
	
	public Cards(String name,String project,String text,String hours,boolean access) {
		this.name=name;
		this.project=project;
		this.text=text;
		this.hours=hours;
		this.access=access;
	}
}
