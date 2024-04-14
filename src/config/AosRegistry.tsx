"use client";
import { FC, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosRegistry: FC = () => {
  useLayoutEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      once: true,
      delay: 100,
      duration: 500,
      // offset: 50,
    });
  }, []);

  return null;
};

export default AosRegistry;
