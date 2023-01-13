package com.example.posts.repositories;

import com.example.posts.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    Location getByIdUser(Long idUser);
}
