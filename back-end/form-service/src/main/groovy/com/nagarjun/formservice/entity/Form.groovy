package com.nagarjun.formservice.entity

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("cards")
class Form {
	@Id
	public String id;
	public String name;
	public String project;
	public String text;
	public String hours;
	
	public Form(){
	}
	
	public Form(String name,String project,String text,String hours) {
		this.name=name;
		this.project=project;
		this.text=text;
		this.hours=hours;
	}
}
