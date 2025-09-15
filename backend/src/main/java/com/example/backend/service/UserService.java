package com.example.backend.service;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.RegisterRequest;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new RuntimeException("Email já cadastrado");
        }

        User user = User.builder()
                .username(request.username())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .build();

        userRepository.save(user);

        return jwtUtil.generateToken(user.getEmail());
    }
}
