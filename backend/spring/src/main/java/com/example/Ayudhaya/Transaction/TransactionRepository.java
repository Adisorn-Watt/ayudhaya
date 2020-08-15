package com.example.Ayudhaya.Transaction;

import com.example.Ayudhaya.Package.Package;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    //Working like Select * From transaction WHERE id = 'xx'
    Optional<Transaction> findByTransactionId(String transactionId);
//    List<Transaction> findByTransactionId(String transactionId);
}