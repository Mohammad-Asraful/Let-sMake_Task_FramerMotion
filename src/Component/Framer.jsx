import React from 'react'
import { motion, useScroll } from 'framer-motion';

const Framer = () => {

   const { animateYProgress } = useScroll()

   const containerVariants = {
      hidden: {
         opacity: 0,
         x: '100vh',
      },
      visible: {
         opacity: 1,
         x: 0,
         paddingLeft: '10px',
         fontWeight: 'bold',
         fontSize: '20px',
         marginTop: '20px',
         color: 'red',

         transition: {
            type: 'spring',
            delay: .5,
            duration: 2,
         }
      }
   }

   return (
      <>
         <motion.div style={{
            scaleY: animateYProgress,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: 'blue',
            transformOrigin: '0%'
         }}>

         </motion.div>

         <motion.h1
            initial={{
               textAlign: 'center',

            }}
            animate={{
               marginTop: '20px',
               fontSize: '50px',
               textAlign: 'center',
            }}
            transition={{
               delay: 1,
               duration: 2,
            }}

            className='text-3xl font-bold'>Hello world</motion.h1>

         <motion.div>
            <motion.h1 animate={{ fontSize: '16px' }} className='text-2xl font-bold'>Hello, I'm Asraful.</motion.h1>
            <p>Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful. Hello, I'm Asraful.</p>
         </motion.div>


         <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
         >
            <h1>Header One</h1>
            <h1>Header Two</h1>
            <h1>Header Three</h1>
         </motion.div>
      </>
   )
}

export default Framer