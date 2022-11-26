package com.example.posts.repositories;

import com.example.posts.models.Comments;
import com.example.posts.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, Long> {
    public List<Comments> findByPost(Post id_post);
}
