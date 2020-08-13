package com.example.Ayudhaya.Package;

import com.example.Ayudhaya.Country.Country;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PackageRepository extends MongoRepository<Package, Long> {
    List<Package> findByCountryListIn(String countryId);
}
