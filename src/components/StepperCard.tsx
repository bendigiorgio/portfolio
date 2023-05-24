import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import { IconType } from "react-icons";

interface StepperCardProps {
  Icon: IconType;
  title: string;
  description: ReactNode;
}
export type Ref = HTMLDivElement;
const StepperCard = forwardRef<Ref, StepperCardProps>(
  ({ Icon, title, description }, ref) => {
    return (
      <div
        ref={ref}
        className="w-full max-w-sm flex-col space-y-3 rounded-xl bg-neutral-900 px-7 py-4"
      >
        {<Icon style={{ stroke: "url(#gradient)" }} className="h-12 w-12" />}

        <h4 className="mt-6 text-lg font-medium">{title}</h4>
        <hr className="h-1 w-16 rounded-full bg-harvest-gold" />
        <p className="mb-4 text-gray-200">{description}</p>
      </div>
    );
  }
);
StepperCard.displayName = "StepperCard";
const MotionStepperCard = motion(StepperCard);
export default MotionStepperCard;
