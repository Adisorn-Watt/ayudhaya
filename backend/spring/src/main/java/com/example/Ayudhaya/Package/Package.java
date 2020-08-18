package com.example.Ayudhaya.Package;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;

@Data
public class Package {
    @Id
    private String packageId;
    private String packageDetail;
    private Integer packagePrice;
    private String[] countryList;
    private String condition;
    private Integer conditionPrice;

    @PersistenceConstructor
    public Package(String packageId,
                   String packageDetail,
                   int packagePrice,
                   String[] countryList) {
        this.packageId = packageId;
        this.packageDetail = packageDetail;
        this.packagePrice = packagePrice;
        this.countryList = countryList;
    }

    @PersistenceConstructor
    public Package(String packageId,
                   String packageDetail,
                   int packagePrice,
                   String[] countryList,
                   String condition,
                   int conditionPrice) {
        this.packageId = packageId;
        this.packageDetail = packageDetail;
        this.packagePrice = packagePrice;
        this.countryList = countryList;
        this.condition = condition;
        this.conditionPrice = conditionPrice;
    }


    public String getPackageId() {
        return packageId;
    }
}

