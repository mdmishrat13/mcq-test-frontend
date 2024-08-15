// src/components/Carousel.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'https://png.pngtree.com/background/20231018/original/pngtree-the-path-to-success-a-3d-illustrated-journey-through-education-picture-image_5599384.jpg',
      title: 'Study Smart, Achieve More',
      description: 'Welcome Student! Choose from a wide range of courses, study at your own pace, and master MCQ exams. Enhance your learning experience and reach new heights of success.',
      buttonText: 'Explore Now',
    },
    {
      image: 'https://t3.ftcdn.net/jpg/03/25/13/44/360_F_325134428_Au0z61aShtXoDP6y2r9YLJkjIZj69r1A.jpg',
      title: 'Your Path to Excellence',
      description: 'Welcome Student! Select courses that align with your aspirations, study effectively, and test your knowledge through MCQ exams. Embark on a journey of academic excellence.',
      buttonText: 'Explore Now',
    },
    {
      image: 'https://mustreadalaska.com/wp-content/uploads/2022/09/empty-classroom-school-768x512.jpg',
      title: 'Innovate Your Teaching',
      description: 'Welcome Teacher! Create engaging courses and administer MCQ tests to drive student success. Transform your teaching approach with our user-friendly platform.',
      buttonText: 'Explore Now',
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)`,}}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <img src={slide.image} alt={`Slide ${index}`} className="w-full filter blur-sm" />
              <div className="absolute inset-0 flex flex-col gap-2 md:gap-8 items-center justify-center text-center text-white p-4 bg-black bg-opacity-50">
                <h2 className="text-3xl md:text-[50px] font-bold mb-2">{slide.title}</h2>
                <p className="mb-4 px-4 md:w-2/3">{slide.description}</p>
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
