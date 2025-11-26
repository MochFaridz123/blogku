import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import hobby1 from "@/assets/hobby1.jpg";
import hobby2 from "@/assets/hobby2.jpg";
import hobby3 from "@/assets/hobby3.jpg";
import hobby4 from "@/assets/hobby4.jpg";
import hobby5 from "@/assets/hobby5.jpg";
import hobby6 from "@/assets/hobby6.jpg";

const galleryImages = [
  { id: 1, src: hobby1, title: "Nasi Padang", description: "Makanan Favorit" },
  { id: 2, src: hobby2, title: "Sate Padang", description: "Makanan Favorit" },
  { id: 3, src: hobby3, title: "Coding", description: "Programing" },
  { id: 4, src: hobby4, title: "Gaming", description: "Digital adventures" },
  { id: 5, src: hobby5, title: "Coding", description: "make project" },
  { id: 6, src: hobby6, title: "Coding", description: "Creating Project" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-bold mb-4 text-center text-glow">
          Hobby Gallery
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          A visual journey through my passions and hobbies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-glow"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-accent text-glow mb-2">
                  {image.title}
                </h3>
                <p className="text-foreground/90">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-lg border-accent">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                >
                  <X size={24} className="text-accent" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-accent text-glow mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-lg text-foreground/90">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;
