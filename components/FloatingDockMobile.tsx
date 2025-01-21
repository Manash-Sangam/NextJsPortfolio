import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaShareAlt, FaGlobe } from "react-icons/fa";

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fixed bottom-8 left-8 ${className}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                className="relative group"
              >
                <Link
                  target="_blank"
                  href={item.href}
                  key={item.title}
                  className="h-12 w-12 rounded-full bg-background border-foreground border flex items-center justify-center"
                >
                  <div className="h-6 w-6 text-foreground flex justify-center items-center">{item.icon}</div>
                </Link>
                <span className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-12 w-12 rounded-full bg-background border-foreground border flex items-center justify-center"
      >
        <FaGlobe className="h-6 w-6 text-foreground" />
      </button>
    </div>
  );
};

export default FloatingDockMobile;
