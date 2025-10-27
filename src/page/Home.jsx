import React from 'react'
import HeroSection from "../components/HeroSection"
import About from "../components/AboutSection"
import ServicesSlider from "../components/ServicesSlider";
import ReviewsSection from "../components/ReviewsSection"
import WhyChooseUs from "../components/WhyChooseUs"
import GallerySlider from "../components/GallerySlider"
import ContactSection from "../components/ContactSection"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <ServicesSlider />
            <WhyChooseUs />
            <GallerySlider />
            <ReviewsSection />
            <ContactSection />
        </div>
    )
}

export default Home
