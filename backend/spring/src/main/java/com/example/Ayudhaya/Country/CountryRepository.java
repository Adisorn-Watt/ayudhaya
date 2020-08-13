package com.example.Ayudhaya.Country;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CountryRepository extends MongoRepository<Country, Long> {
}
