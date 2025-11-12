import backgroundImage from '../assets/hero.jpg';
function Hero () {
    return (
        <section
        className="min-h-screen flex items-center justify-center text-center text-white"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        //background: 'rgba(0, 0, 0, 0.6)',:
    }}
    >
         <div class="container mx-auto px-4 flex flex-col md:flex-row items-center text-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="text-4xl md:text-8xl font-bold  text-amber-200 mb-6">Handcrafted Crochet <span class="text-brown">Creations</span></h1>
                <p class=" text-xl text-white mb-6 font-bold">Discover beautiful handmade crochet items crafted with love and attention to detail. Each piece tells a unique story.</p>
                <div class="flex space-x-4">
                    <button class="bg-amber-900 border-2 border-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition font-bold">Shop Now</button>
                    <button class="border-2 border-amber-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-700 transition">Learn More</button>
                </div>
            </div>
        </div>
    </section>
        
    );
}
export default Hero;