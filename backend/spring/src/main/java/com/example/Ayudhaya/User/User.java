package com.example.Ayudhaya.User;

import lombok.Data;
import nonapi.io.github.classgraph.json.Id;

@Data
public class User {
    private @Id
    String userId;
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
}