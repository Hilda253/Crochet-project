
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
function Features () {
    return (
        <section class="py-16 bg-amber-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-black mb-12">Why Choose Our Crochet</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    <div class="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div class="fa fa-hand-holding-heart text-white text-2xl"><FaHandHoldingHeart /></div>
                    </div>
                    <h3 class="text-xl font-bold text-black mb-2">Handmade with Love</h3>
                    <p class="text-gray-800 text-xl ">Each item is carefully crafted by skilled artisans with attention to every detail.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    <div class="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div class="fa fa-leaf text-white text-2xl"><FaLeaf /></div>
                    </div>
                    <h3 class="text-xl font-bold text-black mb-2">Eco-Friendly Materials</h3>
                    <p class="text-gray-800 text-xl">We use sustainable, high-quality yarns that are gentle on the environment.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    <div class="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div class="fa fa-award text-white text-2xl"><FaAward /></div>
                    </div>
                    <h3 class="text-xl font-bold text-black mb-2">Unique Designs</h3>
                    <p class="text-gray-800 text-xl">Our patterns are original and each piece is one-of-a-kind or made in limited editions.</p>
                    </div>  
            </div>
        </div>
    </section>

    );
}
export default Features;