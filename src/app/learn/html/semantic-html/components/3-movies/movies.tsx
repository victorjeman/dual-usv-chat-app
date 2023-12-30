import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import moviesDesignImg from "./movies.png";

export const Movies = () => {
  return (
    <LearnSection>
      <LearnImage src={moviesDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
