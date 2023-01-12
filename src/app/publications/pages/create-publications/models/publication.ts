export interface InputCreatePost {
    title: string,
    category: "WRITING" | "READING" | "TALKING" | "LISTENING",
    body: string;
    isValidTitle: boolean;
    isValidCategory: boolean;
    isValidBody: boolean;
}