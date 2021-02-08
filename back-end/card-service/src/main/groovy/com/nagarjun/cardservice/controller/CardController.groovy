package com.nagarjun.cardservice.controller


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

import com.google.gson.Gson
import com.nagarjun.cardservice.entity.Cards
import com.nagarjun.cardservice.entity.WorkLog
import com.nagarjun.cardservice.repository.CardRepo
import com.nagarjun.cardservice.repository.LogRepo


@CrossOrigin(origins = "*")
@RestController
@RefreshScope
class CardController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CardRepo cardsRepo;
	
	@Autowired
	private LogRepo logRepo;
	
	@GetMapping("/card")
	ResponseEntity<Cards> cardDetails(){
		logger.info("Inside card microservice to render cards in frontend");
		List<Cards> listOfCards = cardsRepo.findAll();
		Gson gson = new Gson();
		String jsonCartList = gson.toJson(listOfCards);
		println jsonCartList
		return new ResponseEntity(jsonCartList,HttpStatus.OK);
	}
	
	@GetMapping("/list")
	ResponseEntity<WorkLog> listDetials(){
		logger.info("Inside card microservice to render list in frontend");
		List<WorkLog> listOfWorkLogs = logRepo.findAll();
		Gson gson = new Gson();
		String jsonCartList = gson.toJson(listOfWorkLogs);
		println jsonCartList
		return new ResponseEntity(jsonCartList,HttpStatus.OK);
	}
}
