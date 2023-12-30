import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import commentsDesignImg from "./comments.png";

export const Comments = () => {
  return (
    <LearnSection>
      <LearnImage src={commentsDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
