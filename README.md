# Crochet-project
MY PROJECT 
# WOOL & THREAD.

# Live Demo




# Project Demo
WOOL & THREAD is a type of business that turns soft string into useful and beautiful things,making cozy blankets,stylish clothes,and unique gifts one loop at a time . This website serves as primary function - e.g., portfolio, e-commerce, informational site designed to[main goal - e.g., showcase work, sell products, provide information.

# Brand Identity.
###Color System

. Primary: #D97706 (Amber) - Used for primary buttons, links, and accents to represent warmth, creativity, and handmade craftsmanship.

. Secondary: #374151 (Gray) - Used for secondary elements and backgrounds, symbolizing sophistication and versatility.

. Neutral Dark: #111827 (Black) - Used for text and strong contrasts, representing elegance and timelessness.

. Neutral Light: #F9FAFB (White) - Used for backgrounds and light sections, representing purity and the blank canvas of creativity.

# Typography

. Headings: Playfair Display - Chosen for its elegant, serif style that reflects the artistic and traditional nature of crochet craftsmanship.

. Body: Inter - Selected for its excellent readability and modern, clean appearance that balances the traditional headings.

. Fallback Stack: serif for headings, sans-serif for body text.

# Design Decisions.
## Layout Adherence.

. Spacing Implementation: Used Tailwind's spacing scale with 4px base unit for consistent measurements.
. Design Tools: Figma with pixel-perfect measurements and Tailwind CSS plugin for design accuracy.
. Breakpoint Strategy: Mobile-first approach with careful attention to touch targets and readability.

# Creative Departures.
Content Strategy: Focus on storytelling through crochet - each product tells a story of technique, material, and craftsmanship.

Brand Positioning: Positioned as premium, sustainable crochet rather than traditional/hobbyist to appeal to modern consumers.

MD Breakpoint Decisions: Optimized product grids to show 2 items per row with enhanced image visibility and clear CTAs.

# Component Architecture.
src/

├── components/

│   ├── ui/ ( Card,)

│   ├── layout/ (Header, Footer, ProductGrid ,Features,Gallery,Hero,Stats,Testimonials)

│   └── products/ (ProductCard, )

├── hooks/ ( useProducts)

└── styles/ (custom Tailwind classes)

Reusability Strategy: Component-first architecture with prop-based customization for different crochet product types and pattern variations.

# Performance Optimizations.
Image optimization with WebP format and lazy loading

Component code splitting for patterns and product pages

CSS purging with Tailwind for minimal bundle size

Optimized product image loading with placeholder blur

Efficient state management for cart and user preferences

# Image Credits.
All product photography by Wool & Thread Studio.

Pattern diagrams created with Crochet Chart Generator Pro.

Yarn texture images sourced from Sustainable Yarn Council.

# Installation & Setup.
Node.js
npm 
##Local Delevopment.

# Clone the repository
git clone [your-repo-url]
 Navigate to project directory
cd crochet-studio
 Install dependencies
npm install
 Start development server
npm run dev
 Build for production
npm run build
 Start production server
npm start

##Technologies Used.
React: ^18.2.0
Tailwind CSS: ^3.3.0
Additional Packages:
React Router: ^6.0.0 - For navigation.

# Challenges & Sollutions.
## Challenge 1: Complex Product Variant Management.
Problem: Crochet products have multiple variants (yarn type, color, size) that needed efficient state management.
Solution: Implemented a custom useProductVariant hook with context API to manage complex product configurations.

## Challenge 2: Pattern PDF Generation and Display.
Problem: Crochet patterns required dynamic PDF generation with proper formatting for different devices.
Solution: Created a PatternViewer component that renders patterns responsively and generates print-friendly PDFs on demand.

## Challenge 3: Image Optimization for Product Galleries.
Problem: High-resolution product images were impacting load times on mobile devices.
Solution: Implemented responsive image loading with WebP fallbacks and blur-up placeholders for smooth user experience.

# Future Improvements.
 1.AR Try-On Feature: Implement augmented reality for users to visualize crochet products in their space.
2.Pattern Customizer: Build an interactive tool for users to customize existing patterns with their preferences.
3.Community Features: Add user-generated content sections for sharing projects and techniques.

#Screenshots.
