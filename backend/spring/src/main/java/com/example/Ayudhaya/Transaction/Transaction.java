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
    private String packageId;
    private User user;
    private String note;
    private double amount;
    private String startDate;
    private String endDate;

    @PersistenceConstructor
    public Transaction(String countryId,String packageId,User user) {
        this.transactionId = "transactionId";
        //Which page ? Input Beneficial
//        this.beneficialName = "beneficialName";
        this.countryId = countryId;
        this.packageId = packageId;
        this.user = user;
        this.note = "note";
        this.amount = 3232.94;
        this.startDate = "dd-mm-yyyy";
        this.endDate = "dd-mm-yyyy";
    }

}