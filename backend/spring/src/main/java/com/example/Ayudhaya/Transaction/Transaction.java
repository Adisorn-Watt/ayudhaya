package com.example.Ayudhaya.Transaction;

import org.springframework.data.annotation.Id;

public class Transaction {
    private @Id String transactionId;
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
    private String countryName;
    private String packageName;


    public Transaction(String countryName) {
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
        this.countryName = this.countryName;
        this.packageName = packageName;
    }

    public Transaction(String transactionId, String title, String firstName, String lastName, String citizenId, String passportId, String dateOfBirth, String fromBankName, String fromBankNo, Double fromBankBalance, String beneficialName, String email, String mobileNo, String countryName, String packageName) {
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
        this.countryName = countryName;
        this.packageName = packageName;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCitizenId() {
        return citizenId;
    }

    public void setCitizenId(String citizenId) {
        this.citizenId = citizenId;
    }

    public String getPassportId() {
        return passportId;
    }

    public void setPassportId(String passportId) {
        this.passportId = passportId;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getBackName() {
        return fromBankName;
    }

    public void setBackName(String backName) {
        this.fromBankName = backName;
    }

    public String getFromBankNo() {
        return fromBankNo;
    }

    public void setFromBankNo(String fromBankNo) {
        this.fromBankNo = fromBankNo;
    }

    public String getBeneficialName() {
        return beneficialName;
    }

    public void setBeneficialName(String beneficialName) {
        this.beneficialName = beneficialName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public Double getFromBankBalance() {
        return fromBankBalance;
    }

    public void setFromBankBalance(Double fromBankBalance) {
        this.fromBankBalance = fromBankBalance;
    }
}