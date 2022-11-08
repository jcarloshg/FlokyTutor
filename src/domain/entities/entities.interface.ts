

export enum ActivityLevel {
    A1 = "A1",
    A2 = "A2",
    B1 = "B1",
    B2 = "B2",
    C1 = "C1",
    C2 = "C2"
}

export enum Role {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    ADMIN = "ADMIN"
}

export enum ActivityType {
    WRITING = "WRITING",
    READING = "READING",
    TALKING = "TALKING",
    LISTENING = "LISTENING"
}


export interface Topic {
    id?: string;
    name: string;
    activities: string[]
    conceptInformation: string[];
    createdAt?: string;
    updatedAt?: string;
}


interface Answer {
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
}

export interface Activitie {
    id: string;
    name: string;
    activityLevel?: ActivityLevel; // todo required
    typeActivity?: ActivityType; // todo required
    question: string;
    questionBody?: string | null;
    topicID: string;
    answers?: Answer | null; // todo required
    accounts?: []; // todo fix this
    examples?: string[] | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}