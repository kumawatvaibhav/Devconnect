import Image from "next/image";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import hero from "../../public/hero.png"
import icon from "../../public/bob.png";
import circle from "../../public/circle.svg";
import gcircle from "../../public/green-circle.svg";
import React from "react";
import EventCard from "@/components/card";
import FeaturedSection from "@/components/feature";
import HowItWorks from "@/components/How";
import Link from "next/link";



const words = [
  {
    text: "Worldwide",
    className: "text-5xl md:text-6xl lg:text-7xl font-mono text-blue-500",
  },
];

const events = [
  {
    title: "Project Listing",
    description: "Explore various projects created by developers worldwide.",
    image: "/project_listing.jpg",
    // color: "bg-blue-500",
    color : "#3b82f6",
  },
  {
    title: "Developer Search",
    description: "Find and connect with developers who share your interests.",
    image: "/developer_search.jpeg",
    // color: "bg-cyan-400",
    color : "#06b6d4",
  },
  {
    title: "Community",
    description: "Join our vibrant community and collaborate on exciting projects.",
    image: "/hero_2.png",
    color: "#fbbf24",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Intro Section */}
        <section
          id="Intro"
          className="relative flex flex-col items-center py-24 bg-white mt-16 min-h-screen"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center md:items-start md:w-1/2">
              <h5 className="text-md text-blue-500 font-mono text-start">
                - Build & Develop
              </h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono text-center md:text-left text-gray-900 tracking-wider">
                Connecting Developers
                <span className="inline-block">
                  <TypewriterEffect words={words} className="infinite" />
                </span>
              </h1>
              <h5 className="mt-2 md:mt-5 lg:mt-8 text-md font-mono text-blue-500 text-start">
                Join a vibrant community of developers and bring your projects
                to life.
              </h5>
              <div className="mt-2 md:mt-4 lg:mt-6 flex flex-row items-center gap-5 md:items-start">
                <Button className="bg-blue-500 text-white shadow-lg">
                  Get Started
                </Button>
                <Link href="#Card">
                  <Button className="outline bg-gradient text-black">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:w-1/2">
              <Image
                src={icon}
                alt="Developers"
                width={800}
                height={800}
                className="z-10"
              />
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="bg-white min-h-screen">
          <FeaturedSection />
          <HowItWorks />
        </section>

        {/* Card Section */}
        <section id="Card" className="bg-white min-h-screen">
          <div className="max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              Explore Our Features
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  color={event.color}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}



function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
