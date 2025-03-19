import { FC } from "react";

interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ title, description, image }) => {
  return (
    <div className="relative bg-[#e4e1db] overflow-hidden">
      <div className="relative z-10 p-6 space-y-2">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="button-small">Learn more</button>
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </div>
  );
};

export default FeaturedCard;
