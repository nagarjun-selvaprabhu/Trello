package com.nagarjun.loginauth.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import com.nagarjun.loginauth.entity.Login
import com.nagarjun.loginauth.repository.LoginRepo

@Service
class LoginService {
	@Autowired
	private LoginRepo logRepo;
	
	Login checkLoginCredentials(Login log) {
		Login l =  logRepo.findByUserName(log.userName);
		return l;
	}
}
