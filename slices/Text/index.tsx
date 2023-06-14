import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

const AlignmentConfig = {
  Left: 'items-start text-left',
  Center: 'items-center text-center',
  Right: 'items-end text-right',
};

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={`c-rich-text c-container py-4 md:py-8 ${AlignmentConfig[slice.primary.alignment]}`}>
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default Text;
