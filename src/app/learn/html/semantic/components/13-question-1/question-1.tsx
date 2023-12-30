import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import question1DesignImg from "./question-1.png";

export const Question1 = () => {
  return (
    <LearnSection>
      <LearnImage src={question1DesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
