export interface Question {
    type: string;
    label: string;
    answers: AnswerQuestion[]
}

export interface AnswerQuestion {
    label: string;
    isCorrect: boolean;
    src?: string;
}