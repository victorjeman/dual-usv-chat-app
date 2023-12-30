import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import takeQuizDesignImg from "./take-quiz.png";

export const TakeQuiz = () => {
  return (
    <LearnSection>
      <LearnImage src={takeQuizDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
