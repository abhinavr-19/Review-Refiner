"use client";

import { cn } from "@/lib/utils";

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className={cn(
          "absolute top-0 left-0 h-32 w-32 rounded-full bg-primary/20 blur-3xl",
          "animate-[blob-move_8s_ease-in-out_infinite]"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl",
          "animate-[blob-move_10s_ease-in-out_infinite_2s]"
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/20 blur-3xl",
          "animate-[blob-move_9s_ease-in-out_infinite_1s]"
        )}
       />
    </div>
  );
};

export default AnimatedShapes;
