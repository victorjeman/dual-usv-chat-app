import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import newsDesignImg from "./news.png";

export const News = () => {
  return (
    <LearnSection>
      <LearnImage src={newsDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
