package com.example.Ayudhaya.Country;

import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;

@Data
public class Country {
    @Id
    private String countryId;
    private String countryName;

    public Country(String countryId, String countryName) {
        this.countryId = countryId;
        this.countryName = countryName;
    }

//    public String getCountryId() {
//        return countryId;
//    }

//    public void setCountryId(String countryId) {
//        this.countryId = countryId;
//    }

//    public String getCountryName() {
//        return countryName;
//    }
//
//    public void setCountryName(String countryName) {
//        this.countryName = countryName;
//    }
}
