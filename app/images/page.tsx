"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Download, 
  Eye, 
  Image as ImageIcon,
  Grid3X3,
  List
} from "lucide-react";
import Image from "next/image";
import MenuFab from "@/components/MenuFab";
import { Karla, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";

const display = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const karla = Karla({ subsets: ["latin"], weight: ["400", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

// Import all images
import img1 from "@/assets/img/1.png";
import img2 from "@/assets/img/2.png";
import img3 from "@/assets/img/3.png";
import img4 from "@/assets/img/4.png";
import img5 from "@/assets/img/5.png";
import img6 from "@/assets/img/6.png";
import img7 from "@/assets/img/7.png";
import img8 from "@/assets/img/8.png";
import img9 from "@/assets/img/9.png";
import img10 from "@/assets/img/10.png";
import img11 from "@/assets/img/11.png";
import img12 from "@/assets/img/12.png";
import img13 from "@/assets/img/13.png";
import img14 from "@/assets/img/14.png";

interface GalleryImage {
  id: number;
  src: any;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: img1,
    alt: "Gallery Image 1"
  },
  {
    id: 2,
    src: img2,
    alt: "Gallery Image 2"
  },
  {
    id: 3,
    src: img3,
    alt: "Gallery Image 3"
  },
  {
    id: 4,
    src: img4,
    alt: "Gallery Image 4"
  },
  {
    id: 5,
    src: img5,
    alt: "Gallery Image 5"
  },
  {
    id: 6,
    src: img6,
    alt: "Gallery Image 6"
  },
  {
    id: 7,
    src: img7,
    alt: "Gallery Image 7"
  },
  {
    id: 8,
    src: img8,
    alt: "Gallery Image 8"
  },
  {
    id: 9,
    src: img9,
    alt: "Gallery Image 9"
  },
  {
    id: 10,
    src: img10,
    alt: "Gallery Image 10"
  },
  {
    id: 11,
    src: img11,
    alt: "Gallery Image 11"
  },
  {
    id: 12,
    src: img12,
    alt: "Gallery Image 12"
  },
  {
    id: 13,
    src: img13,
    alt: "Gallery Image 13"
  },
  {
    id: 14,
    src: img14,
    alt: "Gallery Image 14"
  }
];

export default function ImagesPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".gallery-hero", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" });
      gsap.from(".gallery-stagger", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.05,
        delay: 0.15,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const filteredImages = GALLERY_IMAGES;

  return (
    <div className="min-h-screen px-6 md:px-16 py-12" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="gallery-hero mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="grid place-items-center size-16 rounded-2xl bg-primary/10 border">
              <ImageIcon className="size-8 text-primary" />
            </div>
            <div>
              <h1 className={`text-4xl md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/80 to-muted-foreground/60 font-bold ${display.className}`}>
                Image Gallery
              </h1>
              <p className={`text-muted-foreground ${karla.className}`}>
                A collection of creative works and visual designs
              </p>
            </div>
          </div>
        </div>


        {/* Controls */}
        <div className="flex justify-end gap-2 mb-8 gallery-stagger">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="flex items-center gap-2"
          >
            <Grid3X3 className="size-4" />
            Grid
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="flex items-center gap-2"
          >
            <List className="size-4" />
            List
          </Button>
        </div>

        {/* Gallery */}
        <div className={`gallery-stagger ${viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8' 
          : 'space-y-6'
        }`}>
          {filteredImages.map((image, index) => (
            <GalleryItem 
              key={image.id} 
              image={image} 
              index={index} 
              viewMode={viewMode}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* No results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <ImageIcon className="size-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No images found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

      <MenuFab />
    </div>
  );
}

function GalleryItem({ 
  image, 
  index, 
  viewMode, 
  onClick 
}: { 
  image: GalleryImage; 
  index: number; 
  viewMode: 'grid' | 'list';
  onClick: () => void;
}) {
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="rounded-xl border bg-card/60 backdrop-blur overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex gap-6 p-6">
          <div className="relative size-32 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 min-w-0 flex items-center justify-between">
            <span className="text-base text-muted-foreground">Image #{image.id}</span>
            <Button size="sm" variant="ghost">
              <Eye className="size-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group rounded-xl border bg-card/60 backdrop-blur overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur rounded-full p-3">
            <Eye className="size-6 text-black" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-base text-muted-foreground">#{image.id}</span>
          <Button size="sm" variant="ghost">
            <Download className="size-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ImageModal({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-7xl max-h-[95vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="size-8" />
        </button>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="relative max-h-[85vh] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Image #{image.id}</span>
              <Button>
                <Download className="size-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
