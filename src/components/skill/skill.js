import { motion } from "framer-motion"
import Icon from "../icon/icon";
import './_skill.scss';

function Skill(props) {
  return (
    <motion.div className="skill"
    animate={{
        scale: [0.9, props.size],
        x:  Math.floor(Math.random()*-150),
        y:  Math.floor(Math.random()*-140),
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 250,
        bottom: 50,
      }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      dragElastic={0.5}
      whileTap={{ cursor: "grabbing" }}
      style={{'backgroundColor': props.color}}
  >
        <div className="skill__icon">
          <Icon type={props.icon} />
        </div>
    </motion.div>

  );
}

export default Skill;
