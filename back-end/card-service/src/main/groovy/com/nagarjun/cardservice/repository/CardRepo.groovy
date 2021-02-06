package com.nagarjun.cardservice.repository

import javax.net.ssl.ExtendedSSLSession

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import com.nagarjun.cardservice.entity.Cards

@Repository
interface CardRepo extends MongoRepository<Cards, String>{
}
