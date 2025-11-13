import aboutImage from '../assets/crochet.jpg';
function About () {
    return (
         <section class="py-16 bg-amber-50 ">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-start">
            <div class="md:w-1/2 mb-10 md:mb-0">
              <img src={aboutImage} alt="Crochet process" class="w-full h-90 object-cover rounded-lg aspect-square"></img>
            </div>
            <div class="md:w-1/2 md:pl-12 bg-amber-50">
                <h2 class="text-3xl font-bold text-black mb-4">Our Crochet Story</h2>
                <p class="text-gray-900 mb-4  text-xl">CrochetProject began as a small passion project in 2015, when our founder discovered the joy of creating beautiful items with just a hook and yarn.</p>
                <p class="text-gray-900 mb-6  text-xl">Today, we're a community of artisans dedicated to preserving traditional crochet techniques while creating modern, stylish pieces for everyday life.</p>
                <p class="text-gray-900 mb-4  text-xl">Crochet Project is a passion for creating beautiful, handmade items that bring comfort and joy to everyday life. Each piece is carefully crafted with attention to detail and made to last.</p>
                    <p class="text-gray-900 mb-6 text-xl">We believe in sustainable crafting practices and source our materials responsibly, ensuring that our creations are not only beautiful but also environmentally conscious.</p>
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-brown rounded-full flex items-center justify-center mr-4">
                        <div class="fas fa-heart text-white"></div>
                    </div>
                    <div>
                        <h3 class="font-bold text-black  text-xl">Handmade with Passion.</h3>
                        <p class="text-gray-900  text-xl">Every stitch tells a story.</p>
                        <p class="text-gray-900 text-xl">Over 5000 happy customers.</p>

                    </div>
                </div>
            </div>
        </div>

    </section>

    );
}
export default About;