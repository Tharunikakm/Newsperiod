package com.example.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.project.model.newsmodel;
import com.example.project.service.newsservice;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/users")
public class newscontroller {

    @Autowired
    private newsservice dService;

    @GetMapping("/{username}")
    public newsmodel getUserByUsername(@PathVariable String username) {
        return dService.findByUsername(username);
    }

    @GetMapping
    public List<newsmodel> getAllUsers() {
        return dService.findAll();
    }

    @PostMapping("/register")
    public newsmodel registerUser(@RequestBody newsmodel dModel) {
        return dService.save(dModel);
    }

    @PutMapping("/{username}")
    public newsmodel updateUser(@PathVariable String username, @RequestBody newsmodel updatedModel) {
        return dService.updateUser(username, updatedModel);
    }

    @DeleteMapping("/{username}")
    public void deleteUser(@PathVariable String username) {
        dService.deleteByUsername(username);
    }
}
