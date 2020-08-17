package com.example.Ayudhaya.Package;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Package {
    @Id
    private String packageId;
    private String packageDetail;
    private String packagePrice;
    private String[] countryList;
    private String condition;
    private String conditionPrice;

    public Package(String packageId,
                   String packageDetail,
                   String packagePrice,
                   String[] countryList,
                   String condition,
                   String conditionPrice) {
        this.packageId = packageId;
        this.packageDetail = packageDetail;
        this.packagePrice = packagePrice;
        this.countryList = countryList;
        this.condition = condition;
        this.conditionPrice = conditionPrice;
    }
}

