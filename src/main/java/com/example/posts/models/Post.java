package com.example.posts.models;

import com.example.models.User;
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

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "post")
    private List<Comments> comments;

    @OneToMany(mappedBy = "postLike")
    private List<Likes> likes;
}

