import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode, forwardRef } from "react";

type ProjectCardProps = {
  title: string;
  image: StaticImageData;
  description: ReactNode;
  stack: ReactNode[];
  direction?: "left" | "right";
};
export type Ref = HTMLDivElement;
const ProjectCard = forwardRef<Ref, ProjectCardProps>(
  ({ title, image, description, stack, direction = "left" }, ref) => {
    return (
      <div
        ref={ref}
        className="z-30 flex w-full flex-col rounded-md bg-neutral-900/40 p-2 filter backdrop-blur-3xl sm:p-8"
      >
        <div
          className={`flex ${
            direction === "right" ? "flex-col-reverse" : "flex-col"
          } space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0`}
        >
          {direction === "right" && (
            <div className="relative flex h-[260px] w-[260px]  self-center xs:h-[300px] xs:w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]">
              <Image
                className="rounded-md object-cover"
                fill
                alt="Blackbox tattoo mockup"
                src={image}
              />
            </div>
          )}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row flex-wrap space-x-4 ">
              {stack.map((icon) => icon)}
            </div>
            <div>
              <h3 className="text-5xl font-medium uppercase">{title}</h3>
              <p className="mt-2 max-w-md text-soft-peach-50/80">
                {description}
              </p>
            </div>

            <div className="h-full w-full"></div>
          </div>
          {direction !== "right" && (
            <div className="relative flex h-[260px] w-[260px] self-center xs:h-[300px]  xs:w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]">
              <Image
                className="rounded-md object-cover"
                fill
                alt="Blackbox tattoo mockup"
                src={image}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";
const MotionProjectCard = motion(ProjectCard);

export default MotionProjectCard;
