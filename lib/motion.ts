import type { Transition } from "framer-motion";

export const springPhysics: Transition = {
  type: "spring",
  mass: 0.8,
  stiffness: 250,
  damping: 24,
};
