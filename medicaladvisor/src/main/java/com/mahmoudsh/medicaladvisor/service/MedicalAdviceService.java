package com.mahmoudsh.medicaladvisor.service;

import com.mahmoudsh.medicaladvisor.dto.MedicalVisitAdviceDto;
import com.mahmoudsh.medicaladvisor.dto.MedicalVisitRequestDto;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class MedicalAdviceService {

    private final ChatClient chatClient;
    private final PromptBuilderService promptBuilder;

    public MedicalAdviceService(ChatClient chatClient,
                                PromptBuilderService promptBuilder) {
        this.chatClient = chatClient;
        this.promptBuilder = promptBuilder;
    }

    public MedicalVisitAdviceDto generateAdvice(MedicalVisitRequestDto request) {

        String prompt = promptBuilder.buildPrompt(request);

        return chatClient
                .prompt(prompt)
                .call()
                .entity(MedicalVisitAdviceDto.class);
    }
}
