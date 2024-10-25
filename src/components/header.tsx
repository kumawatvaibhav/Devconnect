"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import user from "../../public/placeholder.svg";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      setIsLoggedIn(!!sessionStorage.getItem("jwtToken"));
    }
  }, []);

  return (
    <header className="h-20 flex items-center bg-white fixed top-0 left-0 w-full z-50 mx-auto px-6">
      <div className="h-25 max-w-2.5rem">
        <Image src={logo} alt="Icon" height={50} className="rounded-lg" />
      </div>
      <h1 className="text-black font-sans font-bold ml-4 mr-5">DEV-CONNECT</h1>
      <nav className="flex flex-grow justify-center">
        <div className="flex justify-center text-black">
          <Link className="text-sm font-medium mr-5" href="/">
            HOME
          </Link>
          <Link className="text-sm font-medium mr-5" href="/community">
            COMMUNITY
          </Link>
          <Link className="text-sm font-medium mr-5" href="/project">
            PROJECTS
          </Link>
          <Link className="text-sm font-medium mr-10" href="/dev">
            DEVELOPERS
          </Link>
        </div>
      </nav>
      <div id="login" className="mr-6">
        {isLoggedIn ? (
          <Link href="profile">
            <Button
              className="rounded-full mt-auto"
              size="icon"
              variant="ghost"
            >
              <Image
                src={user}
                alt="Avatar"
                className="rounded-full border object-fit"
                height="32"
                width="32"
              />
              <span className="sr-only">user menu</span>
            </Button>
          </Link>
        ) : (
          <Link href="Login">
            <Button className="bg-blue-500 text-white">LOGIN</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
