package com.example.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.model.newsmodel;
import com.example.project.repository.newsrepo;

import java.util.List;

@Service
public class newsservice {

    @Autowired
    private newsrepo dRepository;

    public newsmodel findByUsername(String username) {
        return dRepository.findByUsername(username);
    }

    public List<newsmodel> findAll() {
        return dRepository.findAll();
    }

    public newsmodel save(newsmodel dModel) {
        return dRepository.save(dModel);
    }

    public newsmodel updateUser(String username, newsmodel updatedModel) {
        newsmodel existingUser = dRepository.findByUsername(username);
        if (existingUser != null) {
            existingUser.setUsername(updatedModel.getUsername());
            existingUser.setEmail(updatedModel.getEmail());
            existingUser.setPassword(updatedModel.getPassword());
            existingUser.setPhonenumber(updatedModel.getPhonenumber());
            return dRepository.save(existingUser);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public void deleteByUsername(String username) {
        newsmodel existingUser = dRepository.findByUsername(username);
        if (existingUser != null) {
            dRepository.delete(existingUser);
        } else {
            throw new RuntimeException("User not found");
        }
    }
}