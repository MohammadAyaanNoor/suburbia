import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Heading } from "@/app/components/Heading";
import { Bounded } from "@/app/components/bounded";
import { createClient } from "@/prismicio";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid: FC<TeamGridProps> = async ({ slice }) => {
  const client = createClient()
  const skaters = await client.getAllByType('skater')
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy relative"
    >
      <Heading as="h2" size="lg" className="mb-8 text-center text-white">
      <PrismicText field={slice.primary.heading} />

      </Heading>
    </Bounded>
  );
};

export default TeamGrid;
