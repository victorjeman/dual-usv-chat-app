import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
}

export const LearnImage = ({ src }: Props) => {
  return <Image src={src} alt="Figma Design" className="mx-auto mt-8" />;
};
