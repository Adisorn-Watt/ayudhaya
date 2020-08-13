package com.example.Ayudhaya.Package;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Package {
    @Id
    private String packageId;
    private String packageName;
    private String packagePrice;
    private String[] countryList;
    private String companyName;

    public Package(String packageId, String packageName, String packagePrice, String[] countryList, String companyName) {
        this.packageId = packageId;
        this.packageName = packageName;
        this.packagePrice = packagePrice;
        this.countryList = countryList;
        this.companyName = companyName;
    }
}

