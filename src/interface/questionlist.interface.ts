export default interface QustionProps {
    question: string;
    category: string;
    callback: Function;
    totalQuestion: number;
    questionNumber: number;
    correct_answer: string;
}