package com.nutrition.service;

import org.springframework.stereotype.Service;

@Service
public class MailService {
    
    private final String frontendUrl = "http://localhost:5173";

    public void sendVerificationEmail(String to, String token) {
        String link = frontendUrl + "/verify?token=" + token;
        System.out.println("=================================================");
        System.out.println("EMAIL SIMULATION - Verification");
        System.out.println("To: " + to);
        System.out.println("Link: " + link);
        System.out.println("=================================================");
    }
    
    public void sendPasswordResetEmail(String to, String token) {
        String link = frontendUrl + "/reset-password?token=" + token;
        System.out.println("=================================================");
        System.out.println("EMAIL SIMULATION - Password Reset");
        System.out.println("To: " + to);
        System.out.println("Link: " + link);
        System.out.println("=================================================");
    }
}
