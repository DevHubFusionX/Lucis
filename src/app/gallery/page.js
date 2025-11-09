import Navbar from '../../components/layout/Navbar';
import GalleryHero from '../../components/gallery/GalleryHero';
import FeaturedCreatives from '../../components/gallery/FeaturedCreatives';
import CategoryFilters from '../../components/gallery/CategoryFilters';
import ImageGrid from '../../components/gallery/ImageGrid';
import GalleryCTA from '../../components/gallery/GalleryCTA';
import SocialProof from '../../components/gallery/SocialProof';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <GalleryHero />
      <FeaturedCreatives />
      <CategoryFilters />
      <ImageGrid />
      <GalleryCTA />
      <SocialProof />
    </div>
  );
}