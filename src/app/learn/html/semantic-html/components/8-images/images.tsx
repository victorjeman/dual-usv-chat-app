import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import imagesDesignImg from "./images.png";

export const Images = () => {
  return (
    <LearnSection>
      <LearnImage src={imagesDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
