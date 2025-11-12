

function ProductCard(props) {
    // Add error handling for props
    if (!props) {
        return <div>Error: No props provided</div>;
    }

    const { product, onAddToCart } = props;
    
    // Add error handling for product
    if (!product) {
        return <div></div>;
    }

    const {
        image,
        name,
        description,
        price,
        priceUnit = ''
    } = product;

    // Function to handle add to cart
    function handleAddToCart() {
        if (onAddToCart) {
            onAddToCart(product);
        }
    }
   
    const formattedPrice = typeof price === 'number' ? price : price;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Product Image */}
            <div className="h-64 overflow-hidden">
                <img 
                    src={image} 
                    alt={name || 'Product image'} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                    }}
                />
            </div>
            
            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-orange-950 mb-2">
                    {name || 'Unnamed Product'}
                </h3>
                <p className="text-amber-800 mb-4">
                    {description || 'No description available'}
                </p>
                   </div>
        </div>
    );
}
// Gallery Card Component (new for Gallery.jsx)
function GalleryCard({ image, alt, onImageClick }) {
    const handleClick = () => {
        if (onImageClick) {
            onImageClick({ image, alt });
        }
    };

    return (
        <div 
            className="overflow-hidden rounded-lg cursor-pointer group "
            onClick={handleClick}
        >
            <img 
                src={image} 
                alt={alt} 
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
            />
        </div>
    );
}

export default ProductCard;
export { GalleryCard };





