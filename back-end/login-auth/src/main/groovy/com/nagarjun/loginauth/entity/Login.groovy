package com.nagarjun.loginauth.entity

import java.lang.annotation.Documented

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("login")
class Login {
	@Id
	public String id;

	public String userName;
	public String passWord;
	
	public Login(){
	}
	
	public Login(String userName,String passWord) {
		this.userName=userName;
		this.passWord=passWord;
	}
}
