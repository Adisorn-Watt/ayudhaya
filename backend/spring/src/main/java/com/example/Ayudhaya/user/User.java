package com.example.Ayudhaya.User;

import lombok.Data;
import nonapi.io.github.classgraph.json.Id;

@Data
public class User {
    @Id
    private String userId;
    private String title;
    private String firstName;
    private String lastName;
    private String citizenId;
    private String passportId = "-";
    private String dateOfBirth;
    private String bankName;
    private double bankBalance;
    private String emailAddress;
    private String mobileNum;
    private String beneficial = "-";

    public User(String userId, String title, String firstName, String lastName, String citizenId, String dateOfBirth, String bankName, double bankBalance, String emailAddress, String mobileNum) {
        this.userId = userId;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.citizenId = citizenId;
        this.passportId = passportId;
        this.dateOfBirth = dateOfBirth;
        this.bankName = bankName;
        this.bankBalance = bankBalance;
        this.emailAddress = emailAddress;
        this.mobileNum = mobileNum;
        this.beneficial = beneficial;
    }

    public void setPassportId(String passportId) {
        this.passportId = passportId;
    }

    public void setBeneficial(String beneficial) {
        this.beneficial = beneficial;
    }

    public String getUserId() {
        return userId;
    }

    public String getTitle() {
        return title;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getCitizenId() {
        return citizenId;
    }

    public String getPassportId() {
        return passportId;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public String getBankName() {
        return bankName;
    }

    public double getBankBalance() {
        return bankBalance;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getMobileNum() {
        return mobileNum;
    }
}
