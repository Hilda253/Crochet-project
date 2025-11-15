import { Link } from 'react-router-dom';
import backgroundImage from '../assets/hero.jpg';

function Hero() {
    return (
        <section
            className="min-h-screen flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // background: 'rgba(0, 0, 0, 0.6)', // commented out properly
            }}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-8xl font-bold text-amber-200 mb-6">
                        Handcrafted Crochet <span className="text-brown">Creations</span>
                    </h1>
                    <p className="text-xl text-white mb-6 font-bold">
                        Discover beautiful handmade crochet items crafted with love and attention to detail. Each piece tells a unique story.
                    </p>
                    <div className="flex space-x-4">
                        <Link to="/signup" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-3 lg:py-4 border-2 border-amber-700 bg-amber-700 text-white font-semibold rounded-full hover:bg-amber-900 hover:text-white transition-all duration-300 text-base sm:text-lg lg:text-xl">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;