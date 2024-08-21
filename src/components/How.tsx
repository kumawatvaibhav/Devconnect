import React from 'react';
import Image from 'next/image';
import icon from "../../public/circle.svg"

const HowItWorks: React.FC = () => {
  const steps = [
    { number: 1, title: '', description: 'Create an account to get started.' },
    { number: 2, title: '', description: 'List your projects or find ones that match your skills.' },
    { number: 3, title: '', description: 'Engage with other developers and start collaborating.' },
    { number: 4, title: '', description: 'Bring your projects to life with the right team.' },
  ];

  return (
    <div className="bg-white text-center py-8">
      <h2 className="text-4xl text-black font-semibold mb-8">
        How It Works
        <Image
        src={icon}
        alt="upDown"
        width={100}
        height={100}
        className="absolute upDown z-10"
      />
      </h2>
      <div className="max-w-xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold text-gray-700 mr-4">
              {step.number}
            </div>
            <div>
              <h3 className="text-xl font-medium">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
