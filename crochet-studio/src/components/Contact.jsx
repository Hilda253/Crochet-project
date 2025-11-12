import backgroundImage from '../assets/contact.jpg';
function Contact () {
    return (
        <section class="py-14 bg-white"
        style={{
            backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    imageRendering: 'initial'
                    //background: 'rgba(0, 0, 0, 0.6)',:

        }}
        >
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto  rounded-lg shadow-md overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/2 p-8">
                        <h2 class="text-3xl font-bold  text-white mb-4">Get In Touch</h2>
                        <p class="text-white text-xl mb-6">Have questions about our products or need assistance with an order? We'd love to hear from you!</p>
                        
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-brown rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-map-marker-alt text-white"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-xl text-white">Visit Our Studio</h3>
                                    <p class="text-white text-xl">123 Craft Avenue, Artisan District</p>
                                </div>
                            </div>
                             <div class="flex items-center">
                                <div class="w-10 h-10 bg-brown rounded-full flex items-center justify-center mr-4">
                                    <div class="fas fa-phone text-white"></div>
                                </div>
                                <div>
                                    <h3 class="font-bold text-xl text-white">Call Us</h3>
                                    <p class="text-white text-xl">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-brown rounded-full flex items-center justify-center mr-4">
                                    <div class="fas fa-envelope text-white"></div>
                                </div>
                                <div>
                                    <h3 class="font-bold text-xl text-white">Email Us</h3>
                                    <p class="text-white text-xl">hello@crochetproject.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2  p-8">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-white text-lg font-bold mb-2 " for="name">Name</label>
                                <input class="w-full px-3 bg-white py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-50" id="name" type="text" placeholder="Your name"></input>
                            </div>
                            
                            <div>
                                <label class="block text-white text-lg font-bold mb-2" for="email">Email</label>
                                <input class="w-full px-3 bg-white py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-50" id="email" type="email" placeholder="Your email"></input>
                            </div>
                            
                            <div>
                                <label class="block text-white text-lg font-bold mb-2" for="message">Message</label>
                                <textarea class="w-full bg-white px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-50" id="message" rows="4" placeholder="Your message"></textarea>
                            </div>
                             <button class="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-900 transition">Send Message</button>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    </section>
                            

    );
}
export default Contact;