package com.example.Ayudhaya.Transaction;

import lombok.Data;
import lombok.Generated;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;


@Data

public class Transaction {
    private String transactionId;
    private String title;
    private String firstName;
    private String lastName;
    private String citizenId;
    private String passportId;
    private String dateOfBirth;
    private String fromBankName;
    private String fromBankNo;
    private Double fromBankBalance;
    private String beneficialName;
    private String email;
    private String mobileNo;
    private String countryId;
    private String packageId;
    private String note;
    private double amount;
    private String startDate;
    private String endDate;

    @PersistenceConstructor
    public Transaction(String countryId) {
        this.transactionId = "transactionId";
        this.title = "title";
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.citizenId = "citizenId";
        this.passportId = "passportId";
        this.dateOfBirth = "dateOfBirth";
        this.fromBankName = "fromBankName";
        this.fromBankNo = "fromBankNo";
        this.fromBankBalance = 10000.00;
        this.beneficialName = "beneficialName";
        this.email = "email";
        this.mobileNo = "mobileNo";
        this.countryId = countryId;
        this.packageId = "packageId";
        this.note = "note";
        this.amount = 3232.94;
        this.startDate = "dd-mm-yyyy";
        this.endDate = "dd-mm-yyyy";
    }

    @PersistenceConstructor
    public Transaction(String transactionId, String title,
                       String firstName,
                       String lastName,
                       String citizenId,
                       String passportId,
                       String dateOfBirth,
                       String fromBankName,
                       String fromBankNo,
                       Double fromBankBalance,
                       String beneficialName,
                       String email,
                       String mobileNo,
                       String countryId,
                       String packageId,
                       Double amount,
                       String startDate,
                       String endDate) {
        this.transactionId = transactionId;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.citizenId = citizenId;
        this.passportId = passportId;
        this.dateOfBirth = dateOfBirth;
        this.fromBankName = fromBankName;
        this.fromBankNo = fromBankNo;
        this.fromBankBalance = fromBankBalance;
        this.beneficialName = beneficialName;
        this.email = email;
        this.mobileNo = mobileNo;
        this.countryId = countryId;
        this.packageId = packageId;
        this.note = "note";
        this.amount = amount;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}