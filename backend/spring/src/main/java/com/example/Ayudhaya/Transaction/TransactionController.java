package com.example.Ayudhaya.Transaction;

import com.example.Ayudhaya.Country.CountryRepository;
import com.example.Ayudhaya.Package.Package;
import com.example.Ayudhaya.Package.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class TransactionController {
    @Autowired
    private TransactionRepository transactionRepository;
    private PackageRepository packageRepository;
    private CountryRepository countryRepository;

    @GetMapping("/api/v1/transaction")
    public List<Transaction> GetAllTransaction(){
        return transactionRepository.findAll();
    }

    @GetMapping("/api/v1/package/{transactionId}")
    public Optional<Transaction> GetTransactionById(@RequestParam (defaultValue = "01") String transactionId){
        return transactionRepository.findByTransactionId(transactionId);
    }

}
