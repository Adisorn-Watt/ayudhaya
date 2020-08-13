package com.example.Ayudhaya;

import com.example.Ayudhaya.Country.Country;
import com.example.Ayudhaya.Country.CountryRepository;
import com.example.Ayudhaya.Package.Package;
import com.example.Ayudhaya.Package.PackageRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DbInitializer implements CommandLineRunner {
    private CountryRepository countryRepository;
    private PackageRepository packageRepository;

    public DbInitializer(CountryRepository countryRepository, PackageRepository packageRepository) {
        this.countryRepository = countryRepository;
        this.packageRepository = packageRepository;
    }
    @Override
    public void run(String... args) throws Exception{
        Country c1 = new Country("01","Germany");
        Country c2 = new Country("02","Thailand");
        this.countryRepository.deleteAll();
        List<Country> counties = Arrays.asList(c1,c2);
        this.countryRepository.saveAll(counties);


        Package p1 = new Package("01","Personal Accident Loss of Life, Dismemberment Loss of Sight or Total Permanent Disability from Accident", "1,5000,000", new String[]{"01","02"},"Allianz");
        Package p2 = new Package("02","Medical Expenses Incurred Overseas", "1,500,000", new String[]{"01"},"Allianz");
        Package p3 = new Package("03","Medical Expenses Incurred in Thailand", "150,000", new String[]{"01","02"},"Allianz");
        Package p4 = new Package("04","Emergency Medical Evacuation and Repatriation/Repatriation of Mortal Remains", "3,000,000", new String[]{"01"},"Allianz");
        Package p5 = new Package("05","Loss or Damage of Baggage and Personal Effects", "10,000", new String[]{"02"},"Allianz");
        Package p6 = new Package("06","Travel Delay (Pay 10% of Sum Insured for every 6 consecutive hours delay)", "15,000", new String[]{"01","02"},"Allianz");
        Package p7 = new Package("07","Missed Connecting Flight (For every 8 consecutive hours delay)", "5,000", new String[]{"01"},"Allianz");
        Package p8 = new Package("08","Trip Cancellation or Poseponement", "15,000", new String[]{"02"},"Allianz");
        Package p9 = new Package("09","Trip Curtailment", "15,000", new String[]{"01","02"},"Allianz");
        Package p10 = new Package("10","Hijacking (Pay THB 5,000 for every 12 consecutive hours)", "5,000", new String[]{"01"},"Allianz");
        Package p11 = new Package("11","Loss of Travel Document", "5,000", new String[]{"02"},"Allianz");
        Package p12 = new Package("12","Loss or Damage of Baggage and Personal Effects from Natural Disasters", "15,000", new String[]{"02"},"Allianz");


        this.packageRepository.deleteAll();
        List<Package> packages = Arrays.asList(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);
        this.packageRepository.saveAll(packages);
    }




}
