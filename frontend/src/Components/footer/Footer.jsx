import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaXTwitter, FaPhone, FaLocationArrow } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-orange-100 text-orange-800 mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<FaXTwitter />} label="Twitter" />
              <SocialIcon href="#" icon={<FaWhatsapp />} label="WhatsApp" bgColor="bg-green-500" />
              <SocialIcon href="#" icon={<FaInstagram />} label="Instagram" bgColor="bg-pink-500" />
              <SocialIcon href="#" icon={<FaLinkedin />} label="LinkedIn" bgColor="bg-blue-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/restaurent">Restaurants</FooterLink>
              <FooterLink to="/priest/find">Priests</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <ContactInfo
                href="mailto:vikashmishra8371@gmail.com"
                icon={<MdEmail className="w-5 h-5" />}
                text="vikashmishra8371@gmail.com"
              />
              <ContactInfo
                href="tel:+918979481819"
                icon={<FaPhone className="w-5 h-5" />}
                text="+91 8979481819"
              />
              <ContactInfo
                icon={<FaLocationArrow className="w-5 h-5" />}
                text="Mathura, Uttar Pradesh, India"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-orange-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {currentYear} BrajGuide.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon, label, bgColor = "bg-gray-700" }) => (
  <a
    href={href}
    className={`${bgColor} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
    aria-label={label}
  >
    {icon}
  </a>
)

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-orange-600 transition-colors">
      {children}
    </Link>
  </li>
)

const ContactInfo = ({ href, icon, text }) => (
  <a href={href} className="flex items-center space-x-2 hover:text-orange-600 transition-colors">
    {icon}
    <span>{text}</span>
  </a>
)

export default Footer

