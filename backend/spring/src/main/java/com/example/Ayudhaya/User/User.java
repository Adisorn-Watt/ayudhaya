package com.example.Ayudhaya.User;

import lombok.Data;
import nonapi.io.github.classgraph.json.Id;

@Data
public class User {
    private @Id String userId;
    private String title;
    private String firstName;
    private String lastName;
    private String citizenId;
    private String passportId = "-";
    private String dateOfBirth;
    private String fromBankName;
    private double fromBankBalance;
    private String fromBankNo;
    private String email;
    private String mobileNo;
    private String beneficialName = "-";

    public User(String userId, String title, String firstName, String lastName, String citizenId, String dateOfBirth, String fromBankName, double fromBankBalance, String fromBankNo, String email, String mobileNo) {
        this.userId = userId;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.citizenId = citizenId;
        this.dateOfBirth = dateOfBirth;
        this.fromBankName = fromBankName;
        this.fromBankBalance = fromBankBalance;
        this.fromBankNo = fromBankNo;
        this.email = email;
        this.mobileNo = mobileNo;
    }

    public void setPassportId(String passportId) {
        this.passportId = passportId;
    }

    public void setBeneficialName(String beneficialName) {
        this.beneficialName = beneficialName;
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

    public String getFromBankName() {
        return fromBankName;
    }

    public double getFromBankBalance() {
        return fromBankBalance;
    }

    public String getEmail() {
        return email;
    }

    public String getMobileNo() {
        return mobileNo;
    }
}
