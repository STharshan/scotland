'use client';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Tune-it <span className="text-[#004B93]">Scotland</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Scotland’s trusted vehicle tuning and performance experts. We deliver precision,
            reliability, and passion - helping you get the most out of your car.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              target='_blank'
              href="https://www.facebook.com/TuneItScotland/"
              className="p-2 bg-[#004B93] hover:bg-[#00376C] rounded-full text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-[#004B93] inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <HashLink smooth to="/#home" className="hover:text-[#004B93] transition">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className="hover:text-[#004B93] transition">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" className="hover:text-[#004B93] transition">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#gallery" className="hover:text-[#004B93] transition">
                Gallery
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#reviews" className="hover:text-[#004B93] transition">
                Reviews
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hover:text-[#004B93] transition">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>


        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-[#004B93] inline-block pb-1">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Remapping & ECU Tuning</li>
            <li>Diagnostics & Servicing</li>
            <li>Carbon Cleaning</li>
            <li>OBD & Bench Tuning</li>
            <li>Performance Upgrades</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-[#004B93] inline-block pb-1">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#004B93] mt-1" />
              <a target='_blank' href='https://maps.app.goo.gl/bLrYgG5rVCLcNCe46' className="hover:text-[#004B93] transition">
                <span>
                  Unit B8, 15 Carmyle Ave,<br />Glasgow G32 8HL, United Kingdom
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#004B93]" />
              <a
                href="tel:+447909445101"
                className="hover:text-[#004B93] transition"
              >
                +44 7909 445101
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#004B93]" />
              <a
                href="mailto:Tune-itscotland@hotmail.com"
                className="hover:text-[#004B93] transition"
              >
                Tune-itscotland@hotmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Tune-it Scotland. All rights reserved.</p>
      </div>

      {/* Bottom Bar */}
      <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
        {/* Left: Terms & Privacy */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/terms"
            className="text-gray-400 hover:text-[#004B93] transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span className="text-gray-500">|</span>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-[#004B93] transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Center: Powered by Ansely (unchanged) */}
        <p className="text-center font-semibold text-gray-400">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#004B93] hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer >
  );
};

export default Footer;
