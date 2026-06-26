import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "../../app/components/bounded";
import { Skateboards } from "./Skateboards";
import { Heading } from "@/app/components/Heading";
import { isFilled } from "@prismicio/client";


/**
 * Props for `Products`.
 */
export type ProductsProps = SliceComponentProps<Content.ProductsSlice>;

/**
 * Component for "Products" Slices.
 */
const Products: FC<ProductsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className = 'bg-texture bg-brand-gray'
    >
      <Heading className = 'text-center fl-mb-4/6' as="h2">
      <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="text-center ~mb-6/10">
          <PrismicRichText field={slice.primary.body} />
        </div>
      <div className = 'grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-4'>

      {slice.primary.product.map(({skateboards}) => (
        isFilled.contentRelationship(skateboards) && (
          <Skateboards key={skateboards.id} id={skateboards.id} />
        )
      ))}
      </div>
    </Bounded>
  );
};

export default Products;
