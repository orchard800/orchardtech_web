import type { ComponentType } from "react";
import HeroBlock from "@/blocks/HeroBlock";
import RichTextBlock from "@/blocks/RichTextBlock";
import CtaBlock from "@/blocks/CtaBlock";
import FeatureGridBlock from "@/blocks/FeatureGridBlock";
import ImageBlock from "@/blocks/ImageBlock";

export const BLOCKS: Record<string, ComponentType<any>> = {
  block_hero: HeroBlock,
  hero: HeroBlock,
  block_rich_text: RichTextBlock,
  rich_text: RichTextBlock,
  block_cta: CtaBlock,
  cta: CtaBlock,
  block_feature_grid: FeatureGridBlock,
  feature_grid: FeatureGridBlock,
  block_image: ImageBlock,
  image: ImageBlock,
};
