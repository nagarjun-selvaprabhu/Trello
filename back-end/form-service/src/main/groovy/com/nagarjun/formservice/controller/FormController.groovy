package com.nagarjun.formservice.controller


import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


import org.springframework.http.HttpStatus
import static org.springframework.http.HttpStatus.OK

import com.nagarjun.formservice.entity.Form
import com.nagarjun.formservice.repository.FormRepo


@CrossOrigin(origins = "*")
@RestController
class FormController {
	
	@Autowired
	private FormRepo formRepo;
	
	@PostMapping("/savecard")
	ResponseEntity<Form> saveCard(@RequestBody Form form) {
		Form ca = formRepo.save(form);
		return new ResponseEntity<>(ca , HttpStatus.ACCEPTED);
	}
}
