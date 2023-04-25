// import React from 'react';
// import { motion, MotionConfig } from 'framer-motion';

// const animations = {
//   initial:{  opacity: 0},
//   animate:{ opacity: 1 , x:'100px'},
//   exit:{  opacity: 0 },
//   transition: { duration: 0.4 }
// };


// export default function AnimatedPage({ children }) {
//   return (
//     <MotionConfig>
//       <motion.div
//         // variants={animations}
//         // initial="initial"
//         animate={{x:'100px'}}
//         // exit="exit"
//         // transition= "transition"
//       >
//         {children}
//       </motion.div>
//     </MotionConfig>
//   );
// }



import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y:'-200px',  transition: { duration: 0.5 } },
  animate: { opacity: 1, y: '0', transition: { duration: 0.5} },
  exit: { opacity: 0 },
};

export default function AnimatedPage({ children }) {
    return (
      <MotionConfig id ='popupView'>
        <motion.div
          style={{ position: 'fixed', left:'50%', top: '50%' }}
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </MotionConfig>
    );
  }
  
