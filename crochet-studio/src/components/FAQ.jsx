function FAQ () {
    return (
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
            <h2 class="text-3xl font-bold text-center text-black mb-12">Frequently Asked Questions</h2>
            
            <div class="space-y-6">
                <div class="border-b border-gray-200 pb-4">
                    <button class="flex justify-between items-center w-full text-left">
                        <h3 class="font-bold text-xl text-black">How long does shipping take?</h3>
                    </button>
                    <p class="text-gray-700 text-xl font-semibold mt-2">We typically process orders within 1-2 business days. Domestic shipping takes 3-7 business days, while international shipping can take 10-21 business days depending on the destination.</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                    <button class="flex justify-between items-center w-full text-left">
                        <h3 class="font-bold text-xl text-black">Do you accept custom orders?</h3>
                    </button>
                    <p class="text-gray-700 text-xl font-semibold mt-2">Yes! We love creating custom pieces. Please contact us with your ideas, and we'll work with you to bring your vision to life. Custom orders typically take 2-4 weeks to complete.</p>
                </div>
                
                <div class="border-b border-gray-200 pb-4">
                    <button class="flex justify-between items-center w-full text-left">
                        <h3 class="font-bold text-xl text-black">What is your return policy?</h3>
                    </button>
                    <p class="text-gray-700 font-semibold text-xl mt-2">We accept returns within 30 days of purchase for items in original condition. Due to the handmade nature of our products, custom orders are final sale unless there is a defect.</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                    <button class="flex justify-between items-center w-full text-left">
                        <h3 class="font-bold text-xl text-black">How do I care for my crochet items?</h3>
                    </button>
                    <p class="text-gray-700 text-xl font-semibold mt-2">Most crochet items should be hand washed in cool water with mild detergent and laid flat to dry. Specific care instructions are included with each purchase.</p>
                </div>
            </div>
        </div>
    </section>

    );
}
export default FAQ;