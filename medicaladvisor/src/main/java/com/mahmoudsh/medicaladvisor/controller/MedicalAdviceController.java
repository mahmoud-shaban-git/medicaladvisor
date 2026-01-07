package com.mahmoudsh.medicaladvisor.controller;

import com.mahmoudsh.medicaladvisor.dto.MedicalVisitRequestDto;
import com.mahmoudsh.medicaladvisor.dto.MedicalVisitAdviceDto;
import com.mahmoudsh.medicaladvisor.service.MedicalAdviceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
@RestController
@RequestMapping(
        value = "/api/advice",
        consumes = "application/json",
        produces = "application/json"
)
public class MedicalAdviceController {

    private final MedicalAdviceService adviceService;

    public MedicalAdviceController(MedicalAdviceService adviceService) {
        this.adviceService = adviceService;
    }

    @PostMapping
    public ResponseEntity<MedicalVisitAdviceDto> generateAdvice(
            @Valid @RequestBody MedicalVisitRequestDto request) {

        return ResponseEntity.ok(
                adviceService.generateAdvice(request)
        );
    }
}
