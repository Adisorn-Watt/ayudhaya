package com.example.Ayudhaya.Package;

import lombok.Data;
import org.springframework.data.annotation.Id;


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

    public String getPackageId() {
        return packageId;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getPackagePrice() {
        return packagePrice;
    }

    public void setPackagePrice(String packagePrice) {
        this.packagePrice = packagePrice;
    }

    public String[] getCountryList() {
        return countryList;
    }

    public void setCountryList(String[] countryList) {
        this.countryList = countryList;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}

