import { FC, ReactNode, useEffect, useState } from "react";

interface FixedContainerProps {
  children: ReactNode;
}

const FixedContainer: FC<FixedContainerProps> = ({ children }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on initial render
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is common breakpoint for mobile
    };

    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Desktop behavior - fixed on scroll
      if (!isMobile) {
        setIsFixed(currentScrollY > 5);
        setIsVisible(true);
      }
      // Mobile behavior - hide on scroll down, show on scroll up
      else {
        // Determine scroll direction
        const isScrollingDown = currentScrollY > lastScrollY;

        // Show/hide based on scroll direction and position
        if (currentScrollY <= 5) {
          // At the top
          setIsVisible(true);
        } else if (isScrollingDown) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }

        // Always apply fixed style on mobile when not at top
        setIsFixed(currentScrollY > 5);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [lastScrollY, isMobile]);

  const baseClasses = "transition-all duration-300 w-full z-50";
  const fixedClasses = isFixed ? "bg-white shadow-md" : "";

  // For desktop: fixed position
  // For mobile: fixed position with transform to hide/show based on scroll direction
  const positionClasses = isFixed
    ? `fixed ${
        isMobile
          ? isVisible
            ? "translate-y-0"
            : "-translate-y-full"
          : "translate-y-0"
      } top-0 left-0 right-0`
    : "relative";

  return (
    <header
      className={`${baseClasses} ${fixedClasses} ${positionClasses} bg-neutral-2`}
    >
      {children}
    </header>
  );
};

export default FixedContainer;
