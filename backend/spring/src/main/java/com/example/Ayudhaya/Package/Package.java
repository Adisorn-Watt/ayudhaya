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

    public String getPackageId() {
        return packageId;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    public String getPackageDetail() {
        return packageDetail;
    }

    public void setPackageDetail(String packageDetail) {
        this.packageDetail = packageDetail;
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

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
        this.conditionPrice = conditionPrice;
    }

    public String getConditionPrice() {
        return conditionPrice;
    }

    public void setConditionPrice(String conditionPrice) {
        this.conditionPrice = conditionPrice;
    }
}

