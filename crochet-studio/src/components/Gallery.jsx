import { useState, useEffect } from 'react';
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const itemsToShow = 5; // Number of items visible at once

    const handleImageClick = (imageData) => {
        console.log('Image clicked:', imageData);
    };

    // Function to get visible images based on current index
    const getVisibleImages = () => {
        const visibleImages = [];
        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % galleryImages.length;
            visibleImages.push(galleryImages[index]);
        }
        return visibleImages;
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="gallery" className="py-14 bg-amber-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center text-amber-950 mb-12">
                    Our Crochet Designs
                </h2>
                <p className="text-2xl text-center text-amber-950 mb-10">
                    What we have in store.
                </p>
                <p className="text-gray-800 font-bold text-2xl text-center mb-8">
                    Get the latest items in shop immediately.
                </p>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-full w-10 h-10 flex items-center justify-center shadow-lg font-bold text-xl transition duration-300"
                    >
                        ‹
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-full w-10 h-10 flex items-center justify-center shadow-lg font-bold text-xl transition duration-300"
                    >
                        ›
                    </button>

                    {/* Slider */}
                    <div className="overflow-hidden">
                        <div className="flex justify-center gap-4  transition-transform duration-500 ease-in-out">
                            {getVisibleImages().map((image, index) => (
                                <div key={`${currentIndex}-${index}`} className="shrink-0 w-1/5">
                                    <GalleryCard 
                                        image={image.src}
                                        alt={image.alt}
                                        onImageClick={() => handleImageClick(image)} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full  transition duration-300 ${
                                    index === currentIndex ? 'bg-amber-600' : 'bg-amber-300'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Auto-play Toggle */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-amber-700 hover:text-amber-900 text-sm font-medium"
                        >
                            {isAutoPlaying ? 'Pause' : 'Play'} Auto-slide
                        </button>
                    </div>
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