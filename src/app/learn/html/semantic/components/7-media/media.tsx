import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import mediaDesignImg from "./media.png";

export const Media = () => {
  return (
    <LearnSection>
      <LearnImage src={mediaDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
