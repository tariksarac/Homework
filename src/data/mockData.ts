import { Questionnaire } from "../models/questionnaire";

export const mockQuestionnaire: Questionnaire = {
  id: "2",
  title: "Video Doctor Consultation",
  description: "Please answer the following questions to help your doctor provide better care.",
  questions: [
    {
      id: "q1",
      type: "single-choice",
      text: "What is your gender?",
      options: [
        { id: "o1", text: "Male" },
        { id: "o2", text: "Female" },
        { id: "o3", text: "Other" },
        { id: "o4", text: "Prefer not to say" },
      ],
      required: true,
    },
    {
      id: "q2",
      type: "free-text",
      text: "What is the reason for your consultation?",
      required: false,
    },
    {
      id: "q3",
      type: "single-choice",
      text: "Do you have any chronic illnesses?",
      options: [
        { id: "o1", text: "Yes" },
        { id: "o2", text: "No" },
      ],
      required: false,
    },
    {
      id: "q4",
      type: "multiple-choice",
      text: "If yes, which of the following apply to you?",
      options: [
        { id: "o1", text: "Diabetes" },
        { id: "o2", text: "Hypertension" },
        { id: "o3", text: "Heart disease" },
        { id: "o4", text: "Asthma" },
        { id: "o5", text: "Other" },
      ],
      required: false,
    },
    {
      id: "q5",
      type: "single-choice",
      text: "Do you smoke?",
      options: [
        { id: "o1", text: "Yes" },
        { id: "o2", text: "No" },
        { id: "o3", text: "Occasionally" },
      ],
      required: false,
    },
    {
      id: "q6",
      type: "single-choice",
      text: "How often do you consume alcohol?",
      options: [
        { id: "o1", text: "Never" },
        { id: "o2", text: "Rarely" },
        { id: "o3", text: "Occasionally" },
        { id: "o4", text: "Frequently" },
      ],
      required: false,
    },
    {
      id: "q7",
      type: "free-text",
      text: "Do you have any known allergies? If yes, please specify.",
      required: false,
    },
    {
      id: "q8",
      type: "multiple-choice",
      text: "Which of the following symptoms are you experiencing?",
      options: [
        { id: "o1", text: "Fever" },
        { id: "o2", text: "Cough" },
        { id: "o3", text: "Shortness of breath" },
        { id: "o4", text: "Headache" },
        { id: "o5", text: "Other" },
      ],
      required: false,
    },
    {
      id: "q9",
      type: "free-text",
      text: "What medications are you currently taking?",
      required: false,
    },
    {
      id: "q10",
      type: "single-choice",
      text: "Have you had a recent COVID-19 infection?",
      options: [
        { id: "o1", text: "Yes" },
        { id: "o2", text: "No" },
      ],
      required: false,
    },
  ],
};
