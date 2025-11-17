'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Dylan Sherman',
    review:
      "Had an issue with my NC MX-5 ECU. I managed to corrupt and lock the ECU and my car wouldn't turn over. Called Daryn, he was very informative and solved my issue quickly. Highly recommend!",
  },
  {
    name: 'Sean',
    review:
      "Just got my mini tuned — what a difference in torque and responsiveness! Brilliant service, would highly recommend to anyone looking for tuning.",
  },
  {
    name: 'Rob Murkowski',
    review:
      "Great service from Tune-it Scotland! Had my Renault Trafic Sport 3 mapped and the extra pull and mpg have made a big difference.",
  },
  {
    name: 'Bill Stewart',
    review:
      "Done a great job — my van is so much more drivable now. Really happy with the results!",
  },
  {
    name: 'David Boyce',
    review:
      "Very honest and professional! What a difference he made to the car. I’d recommend him to anyone upgrading their vehicle.",
  },
  {
    name: 'Thomas McGuire',
    review:
      "Hello just wanted to thank you for mapping my kodiaq what a difference it's made over the moon with the car now...",
  },
  {
    name: 'Andrew Collins',
    review:
      "Remapped Stage 1 my Rangerover sport TDV8 3.6 excellent power increase and a smooth acceleration. Cheers mate.",
  },
  {
    name: 'Liam Christie',
    review:
      "Great service, van running much smoother, more nippy and better fuel economy. Thanks again.",
  },
  {
    name: 'Richie Milligan',
    review:
      "Daryn came out and remapped a Ranger and a Hilux, very happy with the results on both. Highly recommend.",
  },
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
      easing: 'ease-in-out',
    });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (index) => {
    if (isMobile) setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-neutral-950 py-20"
      id="reviews"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <div className="mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#29292A] dark:text-white">
            What Our Customers Say
          </h2>

          <p className="text-[#454546] dark:text-[#777676] mt-3 text-lg">
            Genuine feedback from drivers who trust us to boost their performance.
          </p>

          {/* Blue Underline */}
          <div className="mt-4 w-24 h-[3px] bg-[#1338BE] mx-auto rounded-full shadow-[0_0_12px_#1338BE]"></div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((t, index) => {
            const isActive = activeIndex === index;
            return (
              <SwiperSlide key={index}>
                <div
                  onClick={() => handleClick(index)}
                  className={`relative flex flex-col justify-between rounded-2xl border p-8 h-[320px]
                    transition-all duration-500 cursor-pointer overflow-hidden
                    bg-white dark:bg-[#1a1a1a] 
                    ${
                      isMobile
                        ? isActive
                          ? 'border-[#1338BE]/70 shadow-[0_0_25px_#1338BE]/60 -translate-y-2'
                          : 'border-gray-100 dark:border-neutral-700 shadow-md'
                        : 'border-gray-100 dark:border-neutral-700 shadow-md hover:shadow-[0_0_25px_#1338BE]/60 hover:-translate-y-2 hover:border-[#1338BE]/60'
                    }`}
                  data-aos="zoom-in-up"
                >
                  {/* Subtle background glow for depth */}
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-tr from-[#0E2A4D]/20 to-transparent transition-opacity duration-500
                      ${
                        isMobile
                          ? isActive
                            ? 'opacity-100'
                            : 'opacity-0'
                          : 'opacity-0 hover:opacity-100'
                      }`}
                  ></div>

                  {/* Reviewer Name */}
                  <h4 className="text-lg font-bold text-[#1338BE] mb-4 drop-shadow-[0_0_8px_#1338BE]">
                    {t.name}
                  </h4>

                  {/* Review */}
                  <p className="flex-1 text-[#454546] dark:text-[#E5E7EB] text-base italic leading-relaxed">
                    “{t.review}”
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center mt-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Blue Glow Background Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1338BE]/15 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1338BE]/15 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default ReviewsSection;
