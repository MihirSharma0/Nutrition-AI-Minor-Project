package com.nutrition.service;

import com.nutrition.entity.SystemSetting;
import com.nutrition.repository.SystemSettingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SystemSettingService {

    private final SystemSettingRepository systemSettingRepository;

    public boolean isOtpEnabled() {
        return systemSettingRepository.findBySettingKey("OTP_ENABLED")
                .map(setting -> Boolean.parseBoolean(setting.getSettingValue()))
                .orElse(false);
    }

    public void setOtpEnabled(boolean enabled) {
        SystemSetting setting = systemSettingRepository.findBySettingKey("OTP_ENABLED")
                .orElse(new SystemSetting());
        setting.setSettingKey("OTP_ENABLED");
        setting.setSettingValue(String.valueOf(enabled));
        systemSettingRepository.save(setting);
    }
}
