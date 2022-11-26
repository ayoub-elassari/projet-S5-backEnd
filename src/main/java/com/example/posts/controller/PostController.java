package com.example.posts.controller;

import com.example.posts.models.Comments;
import com.example.posts.models.Post;
import com.example.posts.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;
    @PostMapping("/add/{id_user}")
    public Post addPost(@RequestBody Post post, @PathVariable Long id_user){
        return postService.addPost(id_user ,post);
    }

    @GetMapping("/get")
    public List<Post> getPost(){
        return postService.getAll();
    }

    @PostMapping("/comment/{id_user}/{id_post}")
    public Comments addCommentToPost(@RequestBody Comments comments, @PathVariable Long id_user, @PathVariable Long id_post ){
        return postService.addCommentToPost(comments ,id_user, id_post);
    }

    @GetMapping("/comments/{id_post}")
    public List<Comments> getAllComments(@PathVariable Long id_post){
        return postService.getAllComments(id_post);
    }

}
