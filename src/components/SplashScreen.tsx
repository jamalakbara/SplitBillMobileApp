import { useEffect } from "react";
import { motion } from "motion/react";
import { Receipt, Users, DollarSign } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#003049] to-[#00547a] flex items-center justify-center relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-[#f77f00]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "-20%" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-[#fcbf49]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "-20%" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with icons */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 1,
          }}
        >
          {/* Main circle */}
          <div className="w-40 h-40 bg-white rounded-full border-8 border-[#fcbf49] shadow-[0_0_0_4px_#003049,8px_8px_0px_0px_#fcbf49] flex items-center justify-center relative">
            {/* Receipt icon in center */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            >
              <Receipt className="w-16 h-16 text-[#003049]" strokeWidth={3} />
            </motion.div>

            {/* Orbiting icons */}
            <motion.div
              className="absolute w-12 h-12 bg-[#f77f00] rounded-full border-4 border-white shadow-lg flex items-center justify-center"
              style={{ top: "-10px", right: "-10px" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{
                scale: { delay: 0.7, type: "spring" },
                rotate: { delay: 1, duration: 3, repeat: Infinity, ease: "linear" },
              }}
            >
              <DollarSign className="w-6 h-6 text-white" strokeWidth={3} />
            </motion.div>

            <motion.div
              className="absolute w-12 h-12 bg-[#d62828] rounded-full border-4 border-white shadow-lg flex items-center justify-center"
              style={{ bottom: "-10px", left: "-10px" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{
                scale: { delay: 0.9, type: "spring" },
                rotate: { delay: 1, duration: 3, repeat: Infinity, ease: "linear" },
              }}
            >
              <Users className="w-6 h-6 text-white" strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>

        {/* App name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-white mb-2" style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-0.02em' }}>
            SplitBill
          </h1>
          <motion.p
            className="text-[#fcbf49]"
            style={{ fontSize: '18px', fontWeight: 700 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Split smarter, together!
          </motion.p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#fcbf49] rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                delay: 2 + i * 0.1,
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
