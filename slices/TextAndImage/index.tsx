import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import clsx from "clsx";
import { Heading } from "@/app/components/Heading";
import { ButtonLink } from "@/app/components/ButtonLink";
import { ParallaxImages } from "./ParallaxImages";

declare module 'react'{
  interface CSSProperties{
    '--index'?: number
  }
}

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage: FC<TextAndImageProps> = ({ slice,index }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className = {clsx(
        slice.primary.theme !== 'Lime' && 'sticky',
        slice.primary.theme === 'Blue' && 'bg-brand-blue bg-texture text-white',
        slice.primary.theme === 'Orange' && 'bg-brand-orange bg-texture text-white',
        slice.primary.theme === 'Navy' && 'bg-brand-navy bg-texture text-white',
        slice.primary.theme === 'Lime' && 'relative z-10 bg-brand-lime bg-texture',
      )}
      style={{
        '--index' : index,
        top: `calc((${index} * 2rem) - 4rem)`,
      
      }}
    > 
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
      <div className={clsx('flex items-center gap-8 flex-col text-center md:items-start md:text-left',slice.variation ==='imageOnLeft' && 'md:order-2')}>
      <Heading size="lg" as="h2">
      <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="max-w-md text-lg leading-relaxed">
      <PrismicRichText field={slice.primary.body} />

      </div>
      <ButtonLink color={slice.primary.theme === 'Lime'?'orange':'lime'} field={slice.primary.button} >
        {slice.primary.button.text}
      </ButtonLink>
      </div>
      <ParallaxImages foregroundImage={slice.primary.foreground_image} backgroundImage={slice.primary.background_image}/>
      </div>
    </Bounded>
  );
};

export default TextAndImage;
