package com.nagarjun.formservice.controller


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
import org.slf4j.LoggerFactory

import com.nagarjun.formservice.entity.Form
import com.nagarjun.formservice.repository.FormRepo


@CrossOrigin(origins = "*")
@RestController
@RefreshScope
class FormController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private FormRepo formRepo;
	
	@PostMapping("/savecard")
	ResponseEntity<Form> saveCard(@RequestBody Form form) {
		logger.info("inside form microservice to save a card");
		Form cardSubmit = formRepo.save(form);
		return new ResponseEntity<>(cardSubmit , HttpStatus.ACCEPTED);
	}
}
