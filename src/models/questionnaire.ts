export type QuestionType = "free-text" | "single-choice" | "multiple-choice";

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: Option[];
  required: boolean;
}

export interface Questionnaire {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}
