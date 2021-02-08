package com.nagarjun.loginauth.service

import org.slf4j.Logger
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import com.nagarjun.loginauth.entity.Login
import com.nagarjun.loginauth.repository.LoginRepo

@Service
class LoginService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private LoginRepo logRepo;
	
	Login checkLoginCredentials(Login log) {
		logger.info("inside service method");
		Login l =  logRepo.findByUserName(log.userName);
		return l;
	}
}
