package com.mahmoudsh.medicaladvisor.dto;

import com.mahmoudsh.medicaladvisor.domain.*;
import jakarta.validation.constraints.NotNull;

public record MedicalVisitRequestDto(
        @NotNull MedicalSpecialty specialty,
        @NotNull VisitGoal visitGoal,
        String ageGroup,
        VisitType visitType
) {}
