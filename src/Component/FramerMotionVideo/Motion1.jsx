import React from 'react'
import { motion } from 'framer-motion'

const Motion1 = () => {

   const [move, setMove] = React.useState(false);

   return (
      <div style={{ backgroundColor: 'green', width: '100vw', paddingTop: '100px', paddingBottom: '100px' }}>
         <motion.div style={{ backgroundColor: 'white', width: '200px', height: '200px', margin: '0 auto', borderRadius: '20px' }}
            initial={{
               scale: 0,
            }}

            animate={{
               x: move ? 200 : -200,
               // x: '-200px',
               scale: 1,

               transition: {
                  duration: 5,
                  type: 'spring',
                  // type: 'inertia',
                  bounce: 60,
                  // velocity: 40,
               }
            }}
            onClick={
               () => {
                  setMove(!move)
               }}

            whileHover={{
               scale: 1.5,
            }}
         >

         </motion.div>

         {/* animation drag */}
         <motion.div style={{ backgroundColor: 'orange', width: '200px', height: '200px', margin: '0 auto', borderRadius: '20px' }}
            drag whileDrag={{
               scale: 1.5,
               cursor: 'pointer',
            }}

            whileTap={{
               backgroundColor: 'yellow',
            }}
         >

         </motion.div>

         {/* animation rotate */}
         <motion.div style={{ backgroundColor: 'blue', width: '200px', height: '200px', margin: '0 auto', borderRadius: '20px' }}
            animate={{
               rotate: [0, 100, 200, 360, 200, 0],
               x: [0, 200, 200, -200, -200, 0]
            }}
            transition={{
               duration: 2,
               repeat: 'infinity'
            }}
         >

         </motion.div>
      </div>
   )
}

export default Motion1