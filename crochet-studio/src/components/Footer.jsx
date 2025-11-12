import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer () {
    return (
         <footer class="bg-black text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <div class="fas fa-crochet text-brown text-2xl mr-2"></div>
                        <span class="text-xl font-bold">Crochet<span class="text-brown">Project</span></span>
                    </div>
                    <p class="text-gray-400 mb-4">Creating beautiful handmade crochet items with love and attention to detail since 2015.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition"><FaTwitter /></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><FaInstagram /></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><FaPinterest /></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><FaYoutube /></a>
                    </div>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Shop</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Product</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Features</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-4">Customer Service</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Shipping Info</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Returns & Exchanges</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-4">Newsletter</h3>
                    <p class="text-gray-400 mb-4">Subscribe to get special offers, free patterns, and new product announcements.</p>
                    <div class="flex">
                        <input type="email" placeholder="Your email" class="px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none w-full"></input>
                        <button class="bg-brown text-white px-4 rounded-r-lg hover:bg-amber-900 transition">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2023 CrochetProject. All rights reserved.</p>
            </div>
        </div>
    </footer>



    );
}
export default Footer;