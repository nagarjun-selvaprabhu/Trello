package com.nagarjun.zuulgateway

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.web.bind.annotation.CrossOrigin

@EnableZuulProxy
@EnableDiscoveryClient
@SpringBootApplication
class ZuulGatewayApplication {

	static void main(String[] args) {
		SpringApplication.run(ZuulGatewayApplication, args)
	}
	
	

}
