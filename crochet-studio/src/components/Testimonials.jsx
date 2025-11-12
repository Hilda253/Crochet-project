import { useState, useEffect } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import testimonalsbackground from '../assets/craft.jpg';



const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        abbreviation: "SJ",
        role: "Worker of The New York Workshop",
        text: "The blanket I purchased is absolutely gorgeous! The quality is exceptional and it's become my favorite cozy companion on cold evenings.",

    },
    {
        id: 2,
        name: "Anna James",
        abbreviation: "AJ",
        role: "Marketing Director at Wool",
        text: "Their team is amazing! The design and quality were exactly what we envisioned. We couldn't have asked for a better.",
       
    },
    {
        id: 3,
        name: ">Emily Thompson",
        abbreviation: "ET",
        role: "Worker",
        text: "The patterns are so well-written and easy to follow. As a beginner, I was able to create beautiful items that look professional!",
    },
    {
        id: 4,
        name: "Michael Roberts",
        abbreviation: "MR",
        role: "Worker",
        text: "I bought the amigurumi bunny for my niece and she absolutely adores it! The craftsmanship is incredible and it's held up perfectly.The pattern uses a lot of amigurumi-specific terms like 'invisible decrease' and 'magic ring' without explaining them.",
    },

    {
        id: 5,
        name: "Sarah Kate",
        abbreviation: "SK",
        role: "CEO of Designer",
        text: " They truly understand our vision. The end result was stunning. The pattern was straightforward with no errors that I could find. ",
    },
    {
        id: 6,
        name: "William James",
        abbreviation: "WJ",
        role: "Project Manager",
        text: "Their attention to detail and commitment to excellence is evident in every project. We are thrilled with the results.",
        
    },
    {
        id: 7,
        name: "Emily Davis",
        abbreviation:"ED",
        role: "Creative Director at House",
        text: "Working with them was a fantastic experience. They brought our ideas to life beautifully. We look forward to more collaborations.",
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { name, role, text, abbreviation } = testimonials[index];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);





    return (
        <section className="max-w-8xl mx-auto px-16 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-2 bg-amber-100">
            <div class="container mx-auto px-2">
                <h2 className="text-4xl font-bold text-black mb-10">
                    What People Are Saying About Us
                </h2> 
                <div className="flex items-center gap-4 mb-6 transition-all duration-500 font-bold">{abbreviation}
        
                   
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                        <p className="text-lg text-gray-800">{role}</p>
                    </div>
                </div>

                <p className="text-gray-800  text-xl italic mb-15 leading-relaxed transition-all duration-500">
                    "{text}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-6 bg-amber-400 text-black hover:bg-amber-500 rounded-full transition font-bold"
                    >
                        <CiCircleChevLeft  className="cursor-pointer" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-6 bg-amber-400 text-black hover:bg-amber-500 rounded-full transition"
                    >
                        <CiCircleChevRight className="cursor-pointer" />
                    </button>
                </div>
            </div>

            <div className="flex justify-center ">
                <img
                    src={testimonalsbackground}
                    alt="testimonial background"
                    className="w-md h-[400px] object-cover rounded-lg aspect-square "
                />
            </div>
        </section>
    );
}
export default Testimonials;
