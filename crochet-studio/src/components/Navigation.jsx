function Navigation () {
    return (
        <nav class="bg-white shadow-md py-4 sticky top-0 z-50">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center">
                <div class="fas fa-crochet text-brown text-3xl mr-2"></div>
                <span class="text-2xl font-bold text-black">Crochet<span class="text-amber-900">Project</span></span>
            </div>
            <div class="hidden md:flex space-x-8">
                <a href="#" class="text-black hover:text-amber-900 transition text-xl">Home</a>
                <a href="#" class="text-black hover:text-amber-900 transition text-xl">Products</a>
                <a href="#" class="text-black hover:text-amber-900 transition text-xl">Features</a>
                <a href="#" class="text-black hover:text-amber-900 transition text-xl">Contact</a>
                <a href="#" class="text-black hover:text-amber-900 transition text-xl">About</a>
            </div> 
        </div>
    </nav>

       

    );
}
export default Navigation;