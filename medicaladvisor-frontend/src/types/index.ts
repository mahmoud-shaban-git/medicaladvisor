export type Specialty = 'DERMATOLOGY' | 'DENTISTRY' | 'ORTHOPEDICS' | 'GENERAL_MEDICINE';
export type VisitGoal = 'PAIN' | 'PREVENTION' | 'AESTHETICS' | 'FOLLOW_UP';
export type AgeGroup = 'unter 30' | '30–50' | '50+'; // Matching the prompt's request values if they are technical strings
export type VisitType = 'INITIAL' | 'CHECKUP' | 'ACUTE';

export interface AdviceRequest {
    specialty: Specialty;
    visitGoal: VisitGoal;
    ageGroup: string; // Using string to be safe with "50+" or "OVER_50"
    visitType: VisitType;
}

export interface AdviceResponse {
    beforeVisit: string[];
    duringVisit: string[];
    afterVisit: string[];
    disclaimer: string;
}

export interface MappingOption<T> {
    value: T;
    label: string;
}
