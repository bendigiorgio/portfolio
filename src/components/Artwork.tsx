"use client";
import { artImages } from "@/utils/artwork";

const Artwork = () => {
  const artwork = artImages;
  return (
    <section className="flex min-h-screen w-full flex-col">
      <h1 className="self-center whitespace-nowrap pt-16 font-inter text-5xl font-semibold 2xs:text-6xl sm:text-7xl lg:text-9xl">
        ARTWORK
      </h1>
      <div>
        <h3 className="text-5xl font-medium uppercase">Digital</h3>
      </div>
    </section>
  );
};

export default Artwork;
