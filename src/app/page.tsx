"use client";
import AboutUs from "@/components/aboutus";
import Works from "@/components/works";
import ScrollObserver, { ScrollContext } from "@/utils/scroll-observer";
import { NextPage } from "next";
import Image from "next/image";
import React, { useCallback, useContext, useRef, useState } from "react";

const Home: NextPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);
  return (
    <>
      <ScrollObserver>
        <div
          ref={refContainer}
          style={{
            transform: `translateY(-${progress * 20}vh)`,
          }}
          className=" min-h-screen flex flex-col justify-center items-center sticky top-0 -z-10"
        >
          <div
            className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <Image
              onLoad={handleImageLoaded}
              src="/fox.png"
              width={128 / 3}
              height={113 / 3}
              alt="logo"
            />
          </div>
          {/*       drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] */}
          <div
            className="p-12 font-bold z-10  text-center flex-1 
      flex items-center justify-center flex-col 

      "
          >
            <h1 className="mb-6 text-4xl xl:text-5xl">Skill</h1>
            <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
              Design Agency
            </h2>
          </div>
        </div>
        <AboutUs />
        <Works />
      </ScrollObserver>
    </>
  );
};

export default Home;
