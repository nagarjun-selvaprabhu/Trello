package com.nagarjun.loginauth.repository

import com.nagarjun.loginauth.entity.Login
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository


@Repository
interface LoginRepo extends MongoRepository<Login, String>{
	
	public Login findByUserName(String userName);
	public Login findByPassWord(String passWord);

	}
