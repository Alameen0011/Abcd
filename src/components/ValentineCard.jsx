import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ValentineCard() {
  const [accepted, setAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const moveNo = () => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const maxX = rect.width - 120;
    const maxY = rect.height - 80;

    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;

    setNoPos({ x: randomX, y: randomY });
    setYesScale((prev) => prev + 0.08);
  };

  // ================= ACCEPTED SCREEN =================
  if (accepted) {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-pink-100 overflow-hidden px-4 font-poppins">
        {/* 💖 Floating Hearts (Optimized) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: -120, opacity: 1 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: i * 0.4,
              }}
              style={{
                left: `${10 + i * 10}%`,
              }}
              className="absolute bottom-0 text-2xl sm:text-3xl"
            >
              💖
            </motion.div>
          ))}
        </div>

        {/* 🌸 Faster Pulsing Glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-pink-300 rounded-full blur-3xl opacity-40"
        />

        {/* 💌 Main Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-12 text-center z-10 max-w-md w-full"
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl font-bold text-pink-500 mb-6"
          >
            YAY! 🎉💖
          </motion.h1>

          {/* 🎥 GIF Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4"
        >
          <motion.img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWhjY3cyNjh0ajI5MjI4OHFkMzZtbGZ5MHphcncyb3BsbmlvNnFwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TuDyQjiZGWwQ8j3DAr/giphy.gif"
            alt="celebration"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-2xl shadow-xl border-4 border-pink-100"
          />

          <motion.img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VqbWVrejMzbHp0MTE5MTNvMXR4YjRrNjUzcWMzMHZpd2ptNmM0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvYNSqBAMDVx8CEYkt/giphy.gif"
            alt="celebration"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-2xl shadow-xl border-4 border-pink-100"
          />
        </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-sm sm:text-lg text-gray-600"
          >
            See? The ‘No’ button never stood a chance 😌❤️
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // ================= MAIN SCREEN =================
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-pink-100 overflow-hidden px-4 font-poppins">
      {/* Floating Background Hearts */}
      <div className="absolute inset-0 z-0 animate-floatHearts opacity-20 text-4xl sm:text-6xl text-center pointer-events-none">
        💖 💕 💘 💗 💓 💞 💝
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        ref={containerRef}
        className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-10 text-center w-full max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-5xl sm:text-6xl mb-4"
        >
          😺💘
        </motion.div>

        <h1 className="text-lg sm:text-2xl font-semibold mb-8 px-2">
          Will you be my Valentine?
        </h1>

        <div className="relative h-24 flex items-center justify-center gap-4 sm:gap-6">
          {/* YES BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            animate={{ scale: yesScale }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setAccepted(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg shadow-lg"
          >
            Yes 💖
          </motion.button>

          {/* NO BUTTON */}
          <motion.button
            onMouseEnter={moveNo}
            onClick={moveNo}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute bg-gray-200 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg shadow-md"
          >
            No 🙈
          </motion.button>
        </div>

        <p className="text-xs text-gray-400 mt-6">“No” seems a little shy…</p>
      </motion.div>
    </div>
  );
}
