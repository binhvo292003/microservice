import { useState, useEffect, useRef } from 'react';

const carouselItems = [
    {
        src: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
        alt: 'Slide 1',
    },
    {
        src: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
        alt: 'Slide 2',
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
            );
        }, 3000);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1,
        );
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startAutoSlide();
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
        );
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
        >
            <div className="relative h-56 overflow-hidden md:h-96">
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        data-carousel-item
                    >
                        <img
                            src={item.src}
                            className="block w-full h-full object-cover"
                            alt={item.alt}
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? 'bg-blue-600'
                                : 'bg-gray-300'
                        }`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => {
                            setCurrentIndex(index);
                            if (intervalRef.current) {
                                clearInterval(intervalRef.current); // Clear interval on indicator click
                            }
                            startAutoSlide(); // Restart auto slide
                        }}
                    ></button>
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
