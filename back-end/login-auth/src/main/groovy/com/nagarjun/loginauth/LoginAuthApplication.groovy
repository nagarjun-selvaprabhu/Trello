package com.nagarjun.loginauth

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class LoginAuthApplication {

	static void main(String[] args) {
		SpringApplication.run(LoginAuthApplication, args)
	}

}
