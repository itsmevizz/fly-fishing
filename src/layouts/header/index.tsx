import { useState } from "react";
import FixedContainer from "./fixed-container";

const AppHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <FixedContainer>
      <div className="flex lg:justify-center w-full pt-2 pb-2">
        <div className="container flex-row w-full pl-2 pr-2 flex  justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src="/assets/logo-main.svg"
              alt="Logo"
              className="h-10 hidden md:block"
            />
            <img
              src="/assets/logo-small.svg"
              alt="Logo"
              className="h-10 block md:hidden "
            />
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden lg:block">
            <ul className="flex gap-5 [&>*]:cursor-pointer">
              <li className="hover-custom-underline">Home</li>
              <li className="hover-custom-underline">About us</li>
              <li className="hover-custom-underline">Services</li>
              <li className="hover-custom-underline">Contact</li>
            </ul>
          </div>

          {/* Hamburger Menu Button - visible only on mobile */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-neutral-90 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-neutral-90 transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-neutral-90 transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu - slides down when hamburger is clicked */}
      {mobileMenuOpen && (
        <div className="container mx-auto lg:hidden py-4 bg-tan-lighter border-t border-neutral-20 animate-slideDown">
          <ul className="flex flex-col gap-4 px-2 [&>*]:cursor-pointer">
            <li className="hover-custom-underline py-2 border-b border-neutral-10">
              Home
            </li>
            <li className="hover-custom-underline py-2 border-b border-neutral-10">
              About us
            </li>
            <li className="hover-custom-underline py-2 border-b border-neutral-10">
              Services
            </li>
            <li className="hover-custom-underline py-2">Contact</li>
          </ul>
        </div>
      )}
    </FixedContainer>
  );
};

export default AppHeader;
