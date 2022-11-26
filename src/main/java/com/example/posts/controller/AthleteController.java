package com.example.posts.controller;


import com.example.models.User;
import com.example.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/athlete")
public class AthleteController {
    @Autowired
    UserDetailsServiceImpl userDetailsService;
    @GetMapping("/athletes/{city}")
    public List<User> getAthlete(@PathVariable String city){
        return userDetailsService.getAthlete(city);


    }
}


