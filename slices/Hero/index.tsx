import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Link from 'next/link';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const AlignmentConfig = {
  'Top Left': 'justify-start items-start text-left',
  'Top Center': 'justify-center items-start text-center',
  'Top Right': 'justify-end items-start text-right',
  'Middle Left': 'justify-start items-center text-left',
  'Middle Center': 'justify-center items-center text-center',
  'Middle Right': 'justify-end items-center text-right',
  'Bottom Left': 'justify-start items-end text-left',
  'Bottom Center': 'justify-center items-end text-center',
  'Bottom Right': 'justify-end items-end text-right',
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const alignment = AlignmentConfig[slice.primary.alignment || 'Middle Center'];

  return (
    <section
      className="relative w-full h-[32rem]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        field={slice.primary.background_image}
        className="absolute top-0 left-0 w-full h-full shadow-inner"
        style={{ objectFit: 'cover' }}
      />

      <div className={`relative flex flex-col w-full h-full text-white bg-black bg-opacity-20 p-8 ${alignment}`}>
        <h1 className="text-5xl font-bold mb-4">{slice.primary.heading}</h1>
        <PrismicRichText field={slice.primary.body} />

        {slice.primary.button_text && slice.primary.button_link ? (
          <PrismicNextLink
            field={slice.primary.button_link}
            className="w-max bg-white text-black font-medium py-2 px-4 text-center mt-8 rounded-md"
          >
            {slice.primary.button_text}
          </PrismicNextLink>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
