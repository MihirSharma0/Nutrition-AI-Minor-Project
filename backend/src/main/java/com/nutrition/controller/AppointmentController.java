package com.nutrition.controller;

import com.nutrition.dto.AppointmentDto;
import com.nutrition.security.CustomUserDetails;
import com.nutrition.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;

    @GetMapping("/me")
    public ResponseEntity<List<AppointmentDto>> getMyAppointments(@AuthenticationPrincipal CustomUserDetails userDetails) {
        return ResponseEntity.ok(appointmentService.getMyAppointments(userDetails.getId()));
    }

    @PostMapping("/book")
    public ResponseEntity<AppointmentDto> bookAppointment(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody AppointmentDto dto) {
        return ResponseEntity.ok(appointmentService.bookAppointment(userDetails.getId(), dto));
    }
}
