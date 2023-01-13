package com.example.posts.models;

import com.example.models.User;
import lombok.Data;

import javax.persistence.*;

@Table
@Entity
@Data
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String latitude;
    String longitude;
    Long idUser;
}
