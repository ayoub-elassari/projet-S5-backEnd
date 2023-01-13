package com.example.posts.service;

import com.example.models.User;
import com.example.posts.models.Location;
import com.example.posts.repositories.LocationRepository;
import com.example.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class LocationService {
    @Autowired
    LocationRepository locationRepository;



    public void save(Location location){
        if(locationRepository.getByIdUser(location.getIdUser())==null){
            locationRepository.save(location);
        } else{
            Location location1=locationRepository.getByIdUser(location.getIdUser());
            location1.setLongitude(location.getLongitude());
            location1.setLatitude(location.getLatitude());
            location1.setIdUser(location.getIdUser());
            locationRepository.save(location1);
        }

    }
}
