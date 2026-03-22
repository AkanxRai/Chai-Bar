import { HeroSection } from "@/components/home/HeroSection";
import { WhyChaiBar } from "@/components/home/WhyChaiBar";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { GalleryStrip } from "@/components/home/GalleryStrip";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChaiBar />
      <MenuTeaser />
      <GalleryStrip />
      <ReviewsSection />
      <InstagramSection />
      <ContactSection />
    </>
  );
}
