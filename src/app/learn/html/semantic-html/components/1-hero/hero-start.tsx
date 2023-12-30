import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import heroDesignImg from "./hero.png";

export const Hero = () => {
  return (
    <LearnSection>
      <LearnImage src={heroDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
