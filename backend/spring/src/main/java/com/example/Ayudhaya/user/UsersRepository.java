package com.example.Ayudhaya.User;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UsersRepository  extends MongoRepository<User,String> {
    List<User> findByUserId(String userId);
}
