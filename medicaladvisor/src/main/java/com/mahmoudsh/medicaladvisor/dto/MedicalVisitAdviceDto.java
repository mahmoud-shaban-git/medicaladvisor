package com.mahmoudsh.medicaladvisor.dto;

import java.util.List;

public record MedicalVisitAdviceDto(
        List<String> beforeVisit,
        List<String> duringVisit,
        List<String> afterVisit,
        String disclaimer
) {}
