package com.example.Ayudhaya.Transaction;

import com.example.Ayudhaya.Country;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepository extends MongoRepository<Transaction, Long>{
}
