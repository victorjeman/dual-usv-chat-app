import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import biographyDesignImg from "./biography.png";

export const Biography = () => {
  return (
    <LearnSection>
      <LearnImage src={biographyDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
