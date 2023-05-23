import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode, forwardRef } from "react";

type ProjectCardProps = {
  title: string;
  image: StaticImageData;
  description: string;
  stack: ReactNode[];
  direction?: "left" | "right";
};
export type Ref = HTMLDivElement;
const ProjectCard = forwardRef<Ref, ProjectCardProps>(
  ({ title, image, description, stack, direction = "left" }, ref) => {
    return (
      <div
        ref={ref}
        className="z-30 flex w-full flex-col rounded-md bg-neutral-900/40 p-8 filter backdrop-blur-3xl"
      >
        <div
          className={`flex ${
            direction === "right" ? "flex-col-reverse" : "flex-col"
          } space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0`}
        >
          {direction === "right" && (
            <Image
              className="rounded-md"
              height={400}
              width={400}
              alt="Blackbox tattoo mockup"
              src={image}
            />
          )}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-4 ">
              {stack.map((icon) => icon)}
            </div>
            <div>
              <h3 className="text-5xl font-medium uppercase">{title}</h3>
              <p className="text-soft-peach-50/8 mt-2 max-w-md">
                {description}
              </p>
            </div>

            <div className="h-full w-full"></div>
          </div>
          {direction !== "right" && (
            <Image
              className="rounded-md"
              height={400}
              width={400}
              alt="Blackbox tattoo mockup"
              src={image}
            />
          )}
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";
const MotionProjectCard = motion(ProjectCard);

export default MotionProjectCard;
