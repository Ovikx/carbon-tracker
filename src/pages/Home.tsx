import { FileUploader } from "../components/FileUploader";
import { default as Trees } from "../assets/trees.svg";
import { motion } from "framer-motion";
import BusEmissions from "../components/BusEmissions";
import TrainEmissions from "../components/TrainEmissions";

const transition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export function Home() {
  return (
    <>
      <motion.div
        style={{
          backgroundImage: `url(${Trees})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "90vh",
          width: "100vw",
          position: "absolute",
          marginTop: "76px",
          top: 0,
          left: 0,
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transition}
      >
        <div className="mt-40">
          <div className="text-gray-500 pt-10 ">
            <div className="flex flex-col absolute left-10 pl-7 ml-10">
              <p className="text-4xl text-black font-medium text-left">
                Track your Carbon Footprint
              </p>
              <p className="text-4xl  text-green-500 font-bold text-left mt-2">
                Smarter
              </p>
            </div>
          </div>
          <FileUploader />
        </div>
      </motion.div>
    </>
  );
}
