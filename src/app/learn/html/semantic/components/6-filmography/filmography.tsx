import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import filmographyDesignImg from "./filmography.png";

export const Filmography = () => {
  return (
    <LearnSection>
      <LearnImage src={filmographyDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
