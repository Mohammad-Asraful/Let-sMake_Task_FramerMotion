import { motion } from 'framer-motion'
import React from 'react'

const FramerNav = () => {

   const yVariants = {
      hidden: {
         opacity: 0,
         y: '-100vw',
      },

      visible: {
         opacity: 1,
         y: 0,
         marginTop: '10px',
         transition: {
            type: 'spring',
            delay: 1,
         }
      }
   }

   const containerVariants = {
      hidden: {
         opacity: 0,
         x: '100vw',
      },

      visible: {
         opacity: 1,
         x: 0,
         transition: {
            type: 'spring',
            delay: 2,
         }
      }
   }

   return (
      <>

         <motion.ul
            variants={yVariants}
            initial='hidden'
            animate='visible'

            className='flex justify-center items-center gap-2 bg-indigo-600 text-white py-2 mb-10'>
            <li>
               <motion.a
                  initial={{
                     scale: 1
                  }}

                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}

                  className='block p-3'
                  href="@">Home</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">About</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">Service</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">Contact Us</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">Help</motion.a>
            </li>
         </motion.ul>


         {/* second nav bar */}

         <motion.ul
            variants={containerVariants}
            initial='hidden'
            animate='visible'

            className='flex justify-center items-center gap-2 bg-indigo-600 text-white py-2 mb-10'>
            <li>
               <motion.a
                  initial={{
                     scale: 1
                  }}

                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}

                  className='block p-3'
                  href="@">Home</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">About</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">Service</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">Contact Us</motion.a>
            </li>
            <li>
               <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'blue',
                  }}
                  className='block p-3'
                  href="@">Help</motion.a>
            </li>
         </motion.ul>
      </>
   )
}

export default FramerNav