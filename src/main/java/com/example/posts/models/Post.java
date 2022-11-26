package com.example.posts.models;

import com.example.models.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_post;
    private String title;
    private String question;


    @ManyToOne()
    private User userCreatPost;

    @JsonIgnore
    @OneToMany(mappedBy = "post")
    private List<Comments> comments;

    @JsonIgnore
    @OneToMany(mappedBy = "postLike")
    private List<Likes> likes;
}

