package com.example.posts.service;

import com.example.posts.models.Comments;
import com.example.posts.models.Post;
import com.example.posts.repositories.CommentsRepository;
import com.example.posts.repositories.PostRepository;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentsRepository commentsRepository;

    public Post addPost(Long id_user ,Post post){
        post.setUserCreatPost(userRepository.findById(id_user).get());
        return  postRepository.save(post);
    }

    public Comments addCommentToPost(Comments comments, Long id_user, Long id_post) {
        comments.setUserComment(userRepository.findById(id_user).get());
        comments.setPost(postRepository.findById(id_post).get());
        return commentsRepository.save(comments);
    }


    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public List<Comments> getAllComments(Long id_post) {
        Post post = postRepository.findById(id_post).get();
        return commentsRepository.findByPost(post);
//        return commentsRepository.findAll();
    }

}
