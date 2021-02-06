package com.nagarjun.cardservice.repository

import com.nagarjun.cardservice.entity.WorkLog
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository


@Repository
interface LogRepo extends MongoRepository<WorkLog, String>{
}
