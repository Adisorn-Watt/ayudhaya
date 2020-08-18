package com.example.Ayudhaya.Transaction;

import com.example.Ayudhaya.Country.Country;
import com.example.Ayudhaya.Country.CountryRepository;
import com.example.Ayudhaya.Package.Package;
import com.example.Ayudhaya.Package.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class TransactionController {
    @Autowired
    private TransactionRepository transactionRepository;
    private PackageRepository packageRepository;
    private CountryRepository countryRepository;

//    @GetMapping("/api/v1/transaction/asdasd")
//    public List<Transaction> GetAllTransaction(){
//        return transactionRepository.findAll();
//    }

//    @GetMapping("/api/v1/transaction/{transactionId}")
//    public Optional<Transaction> GetTransactionById(@RequestParam (defaultValue = "01") String transactionId){
//        return transactionRepository.findByTransactionId(transactionId);
//    }

    @GetMapping("/api/v1/transaction")
    public List<Transaction> GetAllTransaction(){
        return transactionRepository.findAll();
    }

    @PostMapping("/api/v1/summary")
    public void PostTransactionById(@RequestBody Transaction transaction
//                                                 @RequestBody String title,
//                                                 @RequestBody String firstName,
//                                                 @RequestBody String lastName,
//                                                 @RequestBody String citizenId,
//                                                 @RequestBody String passportId,
//                                                 @RequestBody String dateOfBirth,
//                                                 @RequestBody String fromBankName,
//                                                 @RequestBody String fromBankNo,
//                                                 @RequestBody Double fromBankBalance,
//                                                 @RequestBody String beneficialName,
//                                                 @RequestBody String email,
//                                                 @RequestBody String mobileNo,
//                                                 @RequestBody String countryId,
//                                                 @RequestBody String packageName
    ){
//        Transaction transaction = new Transaction(transactionId,title,firstName,lastName,citizenId,
//                passportId,dateOfBirth,fromBankName,fromBankNo,fromBankBalance,beneficialName,email,mobileNo,countryId,packageName);
        transactionRepository.insert(transaction);
        return ;
    }




//    @GetMapping("/api/v1/transaction")
//    public List<Transaction> GetAllDetail(@RequestParam (defaultValue = "01") String countryId,
//                                          @RequestParam (defaultValue = "01") String packageId,
//                                          @RequestParam (defaultValue = "01") String transactionId){
//        Optional<Transaction> transactionsdetail = transactionRepository.findByTransactionId(transactionId);
//        List<Package> packages = packageRepository.findByCountryListIn(countryId);
//        List anotherList = Arrays.asList(transactionsdetail,packages);
//        return anotherList;
//
//    }

//    @PostMapping("")


}
