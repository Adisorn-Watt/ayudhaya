package com.example.Ayudhaya.Country;

import lombok.Data;
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
}
