import galleryImage1 from '../assets/gallery 1.jpg';
import galleryImage2 from '../assets/gallery 2.jpg';
import galleryImage3 from '../assets/gallery 3.jpg';
import galleryImage4 from '../assets/gallery 4.jpg';
import galleryImage5 from '../assets/gallery 5.jpg';
import galleryImage6 from '../assets/gallery 6.jpg';
import galleryImage7 from '../assets/gallery 7.jpg';
import galleryImage8 from '../assets/gallery 8.jpg';
import galleryImage9 from '../assets/gallery 9.jpg';
import galleryImage10 from '../assets/gallery 10.jpg';
import { GalleryCard } from './Card.jsx';

function Gallery() {
    const galleryImages = [
        { src: galleryImage1, alt: "Crochet product 1" },
        { src: galleryImage2, alt: "Crochet product 2" },
        { src: galleryImage3, alt: "Crochet product 3" },
        { src: galleryImage4, alt: "Crochet product 4" },
        { src: galleryImage5, alt: "Crochet product 5" },
        { src: galleryImage6, alt: "Crochet product 6" },
        { src: galleryImage7, alt: "Crochet product 7" },
        { src: galleryImage8, alt: "Crochet product 8" },
        { src: galleryImage9, alt: "Crochet product 9" },
        { src: galleryImage10, alt: "Crochet product 10" }
    ];

   
    const handleImageClick = (imageData) => {
        console.log('Image clicked:', imageData);
    };

    return (
        <section id="gallery" className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center text-amber-950 mb-12">Our Crochet Designs</h2>
                <p className="text-2xl  text-center text-amber-950 mb-10">What we have in store.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">
                    {galleryImages.map((image, index) => (
                        <GalleryCard 
                            key={index}
                            image={image.src}
                            alt={image.alt}
                            onImageClick={() => handleImageClick(image)} 
                        />
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <button className="border-2 border-amber-300 bg-orange-950 hover:bg-amber-400 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Gallery;