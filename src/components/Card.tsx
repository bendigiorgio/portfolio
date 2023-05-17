"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

type Props = {
  title: string;
  image: string;
  description: string;
  stack?: { frontend: string[]; backend: string[] };
};

const Card = ({ title, image, description, stack }: Props) => {
  return (
    <div className="flex h-[498px] w-[450px] flex-col  ">
      <div className="relative h-full w-full bg-white">
        <Image className="object-contain" fill src={image} alt={title} />
      </div>
      <h3 className="text-5xl font-medium uppercase">{title}</h3>
      <Marquee></Marquee>
    </div>
  );
};

export default Card;
