import { LearnSection } from "@/app/learn/learn-components/learn-section ";
import { LearnImage } from "@/app/learn/learn-components/learn-image ";

import addressDesignImg from "./address.png";

export const Address = () => {
  return (
    <LearnSection>
      <LearnImage src={addressDesignImg} />

      {/* START SEMANTIC HTML HERE */}
    </LearnSection>
  );
};
