import { FC } from "react";
import AccordionItem from "../../shared/accordion";
import FeaturedCard from "./cards";

// Define the type for each featured option
interface FeaturedOption {
  title: string;
  description: string;
  image: string;
}

// Props interface for the component
interface FeaturedOptionSectionProps {
  options?: FeaturedOption[];
  sectionTitle?: string;
}

// Default featured options data
const defaultOptions: FeaturedOption[] = [
  {
    title: "Explore Fly Fishing",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: "/assets/fish-featured.png",
  },
  {
    title: "Fly Fishing Experiences",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    image: "/assets/featured02.png",
  },
  {
    title: "Gear Up and Catch More",
    description:
      "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem.",
    image: "/assets/featured03.jpg",
  },
];

const FeaturedOptionSection: FC<FeaturedOptionSectionProps> = ({
  options = defaultOptions,
  sectionTitle = "Featured options",
}) => {
  return (
    <section>
      <div className="bg-tan-lighter pt-20 pb-20 flex justify-center">
        <div className="container">
          <div className="space-y-6">
            <h2>{sectionTitle}</h2>

            {/* Desktop view with accordions */}
            <div className="lg:block hidden">
              {options.map((option, index) => (
                <AccordionItem
                  key={index}
                  title={option.title}
                  defaultOpen={index === 0} // Only first item is open by default
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-[400px] h-[220px]"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 space-y-2">
                      <h3 className="">{option.title}</h3>
                      <p className="text-neutral-700">{option.description}</p>
                      <button className="button-small">Learn more</button>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </div>

            {/* Mobile view with cards - showing all cards */}
            <div className="block lg:hidden space-y-4">
              {options.map((option, index) => (
                <FeaturedCard
                  key={index}
                  title={option.title}
                  description={option.description}
                  image={option.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOptionSection;
