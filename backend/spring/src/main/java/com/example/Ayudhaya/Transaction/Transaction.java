package com.example.Ayudhaya.Transaction;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Transaction {
    private @Id String transactionId;
    private String title;
    private String firstName;
    private String lastName;
    private String citizenId;
    private String passportId;
    private String dateOfBirth;
    private String backName;
    private String bankNo;
    private String beneficialName;
    private String email;
    private String mobileNo;
    private String countryName;
    private String packageName;
    private Double bankBalance;

    public Transaction() {
        this.transactionId = transactionId;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.citizenId = citizenId;
        this.passportId = passportId;
        this.dateOfBirth = dateOfBirth;
        this.backName = backName;
        this.bankNo = bankNo;
        this.beneficialName = beneficialName;
        this.email = email;
        this.mobileNo = mobileNo;
        this.countryName = countryName;
        this.packageName = packageName;
        this.bankBalance = bankBalance;
    }

    public Transaction(String transactionId, String title, String firstName, String lastName, String citizenId, String passportId, String dateOfBirth, String backName, String bankNo, String beneficialName, String email, String mobileNo, String countryName, String packageName, Double bankBalance) {
        this.transactionId = transactionId;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.citizenId = citizenId;
        this.passportId = passportId;
        this.dateOfBirth = dateOfBirth;
        this.backName = backName;
        this.bankNo = bankNo;
        this.beneficialName = beneficialName;
        this.email = email;
        this.mobileNo = mobileNo;
        this.countryName = countryName;
        this.packageName = packageName;
        this.bankBalance = bankBalance;
    }
}
