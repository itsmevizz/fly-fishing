import { FC } from "react";

interface CardProps {
  url: string;
  title: string;
  description: string;
}

const MemberCard: FC<CardProps> = ({ url, title, description }) => {
  return (
    <div>
      {/* Large screen specific layout (Now visible on small screens) */}
      <div className="lg:hidden relative">
        {/* Title at top-left */}
        <h3 className="font-gluten font-normal absolute top-0 left-0 -mt-6">
          {title}
        </h3>

        <div className="flex gap-6 pt-8">
          {/* Left side - image and button */}
          <div className="flex flex-col gap-4">
            <img
              src={url}
              alt="Fly fishing caught fish"
              className="w-[200px] h-[200px]"
            />
            <button className="button-small w-fit">Read more</button>
          </div>

          {/* Right side - description */}
          <div className="w-1/2">
            <p className="text-neutral-700">{description}</p>
          </div>
        </div>
      </div>

      {/* Original layout - Now only for large screens */}
      <div className="hidden lg:flex flex-col justify-center md:flex-row gap-6">
        <div>
          <img
            src={url}
            alt="Fly fishing caught fish"
            className="w-[200px] h-[200px]"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <div className="space-y-1">
            <h3 className="font-gluten font-normal">{title}</h3>
            <p className="text-neutral-700">{description}</p>
          </div>
          <button className="button-small">Read more</button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-neutral-70 mx-auto my-10 lg:hidden block"></div>
    </div>
  );
};

export default MemberCard;
