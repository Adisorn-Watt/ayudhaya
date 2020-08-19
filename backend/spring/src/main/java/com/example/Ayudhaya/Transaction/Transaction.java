package com.example.Ayudhaya.Transaction;

import com.example.Ayudhaya.User.User;
import lombok.Data;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.stereotype.Component;

import java.util.Objects;


@Data
public class Transaction {
    private @Id String transactionId;
    private String countryId;
    private User user;
    private double amount;
    private String startDate;
    private String endDate;

    @PersistenceConstructor
    public Transaction(String countryId,User user) {
        this.transactionId = "transactionId";
        //Which page ? Input Beneficial
//        this.beneficialName = "beneficialName";
        this.countryId = countryId;
        this.user = user;
        this.amount = 3232.94;
        this.startDate = "dd-mm-yyyy";
        this.endDate = "dd-mm-yyyy";
    }

}