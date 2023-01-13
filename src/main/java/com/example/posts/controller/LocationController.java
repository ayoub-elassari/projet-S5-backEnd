package com.example.posts.controller;


import com.example.posts.models.Location;
import com.example.posts.repositories.LocationRepository;
import com.example.posts.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
public class LocationController {
    @Autowired
    private LocationService locationService;

    @Autowired
    private LocationRepository locationRepository;

    @PostMapping("/location")
    public void savelocation(@RequestBody Location location){
        locationService.save(location);
    }

    @GetMapping("/location/{id}")
    public Location getLocation(@PathVariable Long id){
        return locationRepository.getByIdUser(id);
    }
}
