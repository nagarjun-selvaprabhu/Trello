package com.nagarjun.cardservice.entity

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("worklog")
class WorkLog {
	@Id
	public String id;
	public String indexNumber;
	public String name;
	public String project;
	public String text;
	public String hours;
	
	public WorkLog(){
	}
	
	public WorkLog(String indexNumber,String name,String project,String text,String hours) {
		this.indexNumber=indexNumber;
		this.name=name;
		this.project=project;
		this.text=text;
		this.hours=hours;
	}
}
