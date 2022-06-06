import '../styling/_home.scss';
import { motion } from "framer-motion";
import { glossary }  from '../utils/glossary'; 


function Home() {
  return (
    <div className="home">
            <motion.h1 className="home__title"
             style={{
              cursor: "grab"
              }}
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
            >
            {glossary.home_title}  
            </motion.h1>
            <motion.div className="home__sub-title"
                       style={{
                        cursor: "grab"
                        }}
                        drag
                        dragDirectionLock
                        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        dragElastic={0.5}
                        whileTap={{ cursor: "grabbing" }}
                        >
              
              {glossary.home_subtitle}</motion.div>
    </div>
  );
}

export default Home;
