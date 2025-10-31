package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.project.model.newsmodel;

@Repository
public interface newsrepo extends JpaRepository<newsmodel, Long> {
    newsmodel findByUsername(String username);
}