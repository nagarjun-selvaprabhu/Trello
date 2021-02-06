package com.nagarjun.formservice

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class FormServiceApplication {

	static void main(String[] args) {
		SpringApplication.run(FormServiceApplication, args)
	}

}
