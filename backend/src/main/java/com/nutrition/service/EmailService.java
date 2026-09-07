package com.nutrition.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
public class EmailService {

    @Value("${app.frontend.login-url}")
    private String loginUrl;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    public void sendOtpVerificationEmail(String toEmail, String userName, String otp) throws MessagingException {
        Context context = new Context();
        context.setVariable("name", userName);
        context.setVariable("otp", otp);
        context.setVariable("loginUrl", loginUrl);

        // "otp-verification" refers to otp-verification.html in src/main/resources/templates/
        String process = templateEngine.process("otp-verification", context);
        
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(toEmail);
        helper.setSubject("Your OTP Verification Code");
        helper.setText(process, true); // true indicates HTML content

        mailSender.send(message);
    }

    public void sendAccountVerifiedEmail(String toEmail, String userName) throws MessagingException {
        Context context = new Context();
        context.setVariable("name", userName);
        context.setVariable("loginUrl", loginUrl);

        String process = templateEngine.process("account-verified", context);
        
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(toEmail);
        helper.setSubject("Account Verified - Welcome to Nutrition AI!");
        helper.setText(process, true);

        mailSender.send(message);
    }
}
