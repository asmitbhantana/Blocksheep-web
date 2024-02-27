import React from "react";
import RaceBackground from "../assets/common/race-background.png";
import NextFlag from "../assets/common/flag.png";
import Sheep from "../assets/gameplay/sheeepy.png";
import { motion } from "framer-motion";

export type RaceModalProps = {
  progress: { curr: number; delta: number }[];
  handleClose: () => void;
};

const percent = 61 / 9;

const userIndex = 4;

function RaceModal({ progress, handleClose }: RaceModalProps) {
  return (
    <div className="absolute inset-0 bg-[rgb(153,161,149)]">
      <div className="relative my-auto inline-block max-h-full max-w-full align-middle">
        <img src={RaceBackground} alt="loading-bg" />
        {progress.map(({ curr, delta }, i) => {
          return (
            <motion.img
              src={Sheep}
              key={i.toString()}
              alt="sheep"
              className={`absolute ${userIndex === i && "border-2 border-red-500"} `}
              style={{
                width: `${percent}%`,
                left: `${percent * i + 19}%`,
                bottom: `${1.8 + (curr + delta) * 10}%`,
              }}
              initial={{ bottom: `${1.8 + curr * 10}%` }}
              animate={{ bottom: `${1.8 + (curr + delta) * 10}%` }}
              transition={{ ease: "easeOut", duration: 2 }}
            />
          );
        })}
      </div>

      <div className="absolute bottom-0 right-0 w-[40%]">
        <button
          className="absolute mt-[5%] w-full -rotate-12 text-center font-[Berlin-Bold] text-[36px] text-[#18243F]"
          onClick={handleClose}
        >
          Next
        </button>
        <img src={NextFlag} alt="next-flag" />
      </div>
    </div>
  );
}

export default RaceModal;
