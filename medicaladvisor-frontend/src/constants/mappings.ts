import type { Specialty, VisitGoal, VisitType, MappingOption } from '../types';

export const SPECIALTY_OPTIONS: MappingOption<Specialty>[] = [
    { value: 'GENERAL_MEDICINE', label: 'Allgemeinmedizin' },
    { value: 'DERMATOLOGY', label: 'Dermatologie' },
    { value: 'DENTISTRY', label: 'Zahnmedizin' },
    { value: 'ORTHOPEDICS', label: 'Orthopädie' },
];

export const VISIT_GOAL_OPTIONS: MappingOption<VisitGoal>[] = [
    { value: 'PAIN', label: 'Schmerzen' },
    { value: 'PREVENTION', label: 'Vorsorge' },
    { value: 'AESTHETICS', label: 'Ästhetik' },
    { value: 'FOLLOW_UP', label: 'Nachsorge' },
];

export const AGE_GROUP_OPTIONS: MappingOption<string>[] = [
    { value: 'UNDER_30', label: 'unter 30' },
    { value: '30-50', label: '30–50' },
    { value: '50+', label: 'über 50' },
];

export const VISIT_TYPE_OPTIONS: MappingOption<VisitType>[] = [
    { value: 'INITIAL', label: 'Erstbesuch' },
    { value: 'CHECKUP', label: 'Kontrolltermin' },
    { value: 'ACUTE', label: 'Akuter Termin' },
];
