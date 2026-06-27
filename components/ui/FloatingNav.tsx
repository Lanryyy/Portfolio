"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const previous = scrollYProgress.getPrevious() ?? 0;
    const direction = current - previous;

    if (scrollYProgress.get() < 0.05) {
      setVisible(false);
      return;
    }

    setVisible(direction < 0);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        aria-label="Navegação principal"
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full z-[5000] px-5 sm:px-8 py-4 items-center justify-center gap-2 border-white/10 backdrop-blur-md bg-black-100/75 shadow-xl shadow-blue-500/10",
          className
        )}
      >
        {navItems.map((navItem) => (
          <Link
            key={navItem.link}
            href={navItem.link}
            className="relative flex items-center gap-1 rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-blue-500/10 hover:text-blue-300"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer font-medium">{navItem.name}</span>
          </Link>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
