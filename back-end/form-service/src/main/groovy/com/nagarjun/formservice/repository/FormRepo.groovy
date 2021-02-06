package com.nagarjun.formservice.repository

import com.nagarjun.formservice.entity.Form
import javax.net.ssl.ExtendedSSLSession

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository


@Repository
interface FormRepo extends MongoRepository<Form, String>{
}
