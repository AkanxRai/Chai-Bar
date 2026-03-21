import { HeroSection } from "@/components/home/HeroSection";
import { WhyChaiBar } from "@/components/home/WhyChaiBar";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { GalleryStrip } from "@/components/home/GalleryStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChaiBar />
      <MenuTeaser />
      <GalleryStrip />
    </>
  );
}
