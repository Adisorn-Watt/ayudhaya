package com.example.Ayudhaya.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin
public class UsersController {
    @Autowired
    private UsersRepository usersRepository;
    @GetMapping("/api/v1/user/{userId}")
    @CrossOrigin
    public List<User> getUserById(@RequestParam(required = false,defaultValue = "01")String userId){
        List<User> users = usersRepository.findByUserId(userId);
        return users;
    }
    @GetMapping("/api/v1/user")
    @CrossOrigin
    public List<User> getAllUser(){
        return usersRepository.findAll();
    }
}
