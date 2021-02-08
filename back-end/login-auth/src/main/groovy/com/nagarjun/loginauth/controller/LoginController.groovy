package com.nagarjun.loginauth.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.cloud.context.config.annotation.RefreshScope
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


import org.springframework.http.HttpStatus
import static org.springframework.http.HttpStatus.OK

import org.slf4j.Logger
import org.slf4j.LoggerFactory;

import com.nagarjun.loginauth.entity.Login
import com.nagarjun.loginauth.repository.LoginRepo
import com.nagarjun.loginauth.service.LoginService



@CrossOrigin(origins = "*")
@RestController
@RefreshScope
class LoginController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private LoginRepo work;
	
	@PostMapping("/login")
	ResponseEntity<Login> saveLog(@RequestBody Login log) {
		Login l = work.findByUserName(log.userName);
		logger.info("Inside PostMapping of /Login method in login-auth ms");
		return new ResponseEntity<>(l , HttpStatus.ACCEPTED);
	}
	
}
