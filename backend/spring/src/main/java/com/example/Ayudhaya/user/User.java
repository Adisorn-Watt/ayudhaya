package com.example.Ayudhaya.User;

public class User {
    private String userId;
    private String title;
    private String firstName;
    private String lastName;
    private String citizenId;
    private String passportId;
    private String dateOfBirth;
    private String bankName;
    private double bankBalance;
    private String emailAddress;
    private String mobileNum;
    private String beneficial;

    public User() {
        this.beneficial = beneficial;
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
