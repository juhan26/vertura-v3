"use client";
import Image, { StaticImageData } from "next/image";
import { eyes } from "@/public";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function PlayVideo({ 
  videosrc, 
  backgroundImage 
}: { 
  videosrc: string;
  backgroundImage: StaticImageData | string; // Required background image prop
}) {
  const [rotate, setRotate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const mq = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div
      className="w-full relative overflow-hidden cursor-pointer"
      ref={container}
      onClick={togglePlay}
    >
      <div
        className="w-full h-full relative" // Added relative here
        data-scroll
        data-scroll-speed="-.8"
        data-scroll-section
      >
        {/* Background image that shows when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 w-full h-full z-10">
            <Image
              src={backgroundImage}
              alt="Video background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        )}

        {/* Video element */}
        <video
          className={`w-full h-full ${!isPlaying ? 'opacity-0' : 'opacity-100'}`}
          loop
          ref={videoRef}
          src={videosrc}
        />

        {/* Play button elements */}
        {!isPlaying && (
          <motion.div
            className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center z-20"
            style={{ y: mq }}
          >
            {[1, 2].map((item) => (
              <div
                key={item}
                className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] bg-white rounded-full flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    style={{
                      transform: `rotate(${rotate}deg)`,
                    }}
                    src={eyes}
                    alt="Play button"
                    className="w-full h-full object-cover"
                  />
                  <p className="absolute top-1/2 left-1/2 paragraph uppercase text-white font-NeueMontreal font-medium transform translate-x-[-50%] translate-y-[-50%]">
                    Play
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Pause button */}
        {isPlaying && (
          <div
            className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center z-20"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
          >
            <button className="text-white text-[18px] bg-black px-[10px] leading-none font-normal py-[5px] font-NeueMontreal rounded-[20px]">
              pause
            </button>
          </div>
        )}
      </div>
    </div>
  );
}