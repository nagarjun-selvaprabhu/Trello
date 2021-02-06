package com.nagarjun.cardservice

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class CardServiceApplication {

	static void main(String[] args) {
		SpringApplication.run(CardServiceApplication, args)
	}

}
