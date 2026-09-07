package com.nutrition.service;

import com.nutrition.dto.AppointmentDto;
import com.nutrition.entity.Appointment;
import com.nutrition.entity.User;
import com.nutrition.repository.AppointmentRepository;
import com.nutrition.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;

    public List<AppointmentDto> getMyAppointments(Long userId) {
        return appointmentRepository.findByUserIdOrderByAppointmentTimeDesc(userId)
            .stream()
            .map(this::mapToDto)
            .collect(Collectors.toList());
    }

    public AppointmentDto bookAppointment(Long userId, AppointmentDto dto) {
        User user = userRepository.findById(userId).orElseThrow();
        User dietitian = null;
        if (dto.getDietitianId() != null) {
            dietitian = userRepository.findById(dto.getDietitianId()).orElse(null);
        }

        Appointment appointment = new Appointment();
        appointment.setUser(user);
        appointment.setDietitian(dietitian);
        appointment.setAppointmentTime(dto.getAppointmentTime());
        appointment.setNotes(dto.getNotes());
        // status is "SCHEDULED" by default in entity

        return mapToDto(appointmentRepository.save(appointment));
    }

    private AppointmentDto mapToDto(Appointment apt) {
        AppointmentDto dto = new AppointmentDto();
        dto.setId(apt.getId());
        dto.setUserId(apt.getUser().getId());
        if (apt.getDietitian() != null) {
            dto.setDietitianId(apt.getDietitian().getId());
            dto.setDietitianName(apt.getDietitian().getFirstName() + " " + apt.getDietitian().getLastName());
        }
        dto.setAppointmentTime(apt.getAppointmentTime());
        dto.setStatus(apt.getStatus());
        dto.setMeetingLink(apt.getMeetingLink());
        dto.setNotes(apt.getNotes());
        return dto;
    }
}
