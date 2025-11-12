import  BackgroundImage from '../assets/prod.jpg';
import productImage  from '../assets/craft.jpg';
import BackGroundImage  from '../assets/scarf.jpg';
import image from '../assets/adorable.jpg';
function Product (){
    return (
         <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-black mb-4">Featured Products</h2>
            <p class="text-center  text-xl text-gray-800 mb-12 max-w-2xl mx-auto">Explore our collection of beautifully handcrafted crochet items perfect for gifts or personal use.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <div class="h-48 overflow-hidden">
                        <img src={BackgroundImage} alt="Crochet blanket" class="w-full h-full object-cover transition hover:scale-105"></img>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-black text-lg">Cozy Blanket</h3>
                        <p class="text-gray-800 text-xl mb-2">Warm and comfortable for chilly evenings</p>
                        <div class="flex justify-between items-center">
                            <span class="text-brown  text-xl font-bold">$45.00</span>
                        </div>
                    </div>
                </div>
                <div class="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <div class="h-48 overflow-hidden">
                        <img src={productImage} alt="Crochet bag" class="w-full h-full object-cover transition hover:scale-105"></img>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-black text-lg">Eco Tote Bag</h3>
                        <p class="text-gray-700 text-xl mb-2">Stylish and sustainable everyday carry</p>
                        <div class="flex justify-between items-center">
                            <span class="text-brown  text-xl font-bold">$28.00</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <div class="h-48 overflow-hidden">
                        <img src={image} alt="Crochet amigurumi" class="w-full h-full object-cover transition hover:scale-105"></img>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-black text-lg">Amigurumi Bunny</h3>
                        <p class="text-gray-700 text-xl mb-2">Adorable handmade stuffed animal</p>
                        <div class="flex justify-between items-center">
                            <span class="text-brown  text-xl font-bold">$22.00</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <div class="h-48 overflow-hidden">
                        <img src={BackGroundImage} alt="Crochet scarf" class="w-full h-full object-cover transition hover:scale-105"></img>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-black text-lg">Winter Scarf</h3>
                        <p class="text-gray-700 text-xl mb-2">Soft and warm accessory for cold days</p>
                        <div class="flex justify-between items-center">
                            <span class="text-brown text-xl font-bold">$32.00</span>
                             </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="border-2 border-amber-800 text-white bg-amber-900 px-6 py-3 rounded-lg hover:bg-amber-800 transition">View All Products</button>
            </div>
        </div>
    </section>


    );
}
export default Product;