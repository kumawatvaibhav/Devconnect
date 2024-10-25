import Image from "next/image";
import React from "react";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image, color }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-2 w-full" style={{ backgroundColor: color }} />
      <Image
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
        width={400}
        height={500}
      />
      <div className="p-6 relative z-10">
        <div className="text-lg font-semibold" style={{ color }}>
          {title}
        </div>
        <p className="text-gray-500 mb-4">{description}</p>
        <button className="mt-auto px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
