import React from 'react'
import { motion } from 'framer-motion'

const FramerMotion = () => {
   return (
      <>
         {/* top text start */}
         <motion.div
            style={{
               width: '100%',
               padding: '10px 20px',
            }}
            animate={{
               wordWrap: 'wrap',
               fontSize: '20px',
               fontWeight: 'bold',
               textAlign: 'justify',

               background: 'linear-gradient(to right, red 0%, green 100%)',
               '-webkit-background-clip': 'text',
               '-webkit-text-fill-color': 'transparent',
            }}
            transition={{
               delay: 1.5,
               duration: 1.5,
            }}
         >
            Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population of around 169 million people in an area of 148,460 square kilometres (57,320 sq mi).[10] Bangladesh is among the most densely populated countries in the world, and shares land borders with India to the west, north, and east, and Myanmar to the southeast; to the south it has a coastline along the Bay of Bengal. It is narrowly separated from Bhutan and Nepal by the Siliguri Corridor; and from China by the Indian state of Sikkim in the north. Dhaka, the capital and largest city, is the nation's political, financial and cultural centre. Chittagong, the second-largest city, is the busiest port on the Bay of Bengal. The official language is Bengali, one of the easternmost branches of the Indo-European language family.
         </motion.div>
         {/* top text end */}

         <br />

         {/* Bangladesh flag start */}
         <motion.div

            animate={{
               width: '500px',
               height: '300px',
               backgroundColor: 'green',
               borderRadius: '5px',
               margin: '0 auto',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}

            transition={{
               delay: 1,
               duration: 3,
            }}

            whileHover={{
               scale: 1.1,
               boxShadow: "0px 0px 8px rgb(255, 255, 255)",
               marginBottom: '20px'
            }}
         >

            <motion.div

               initial={{
                  borderRadius: 0
               }}

               animate={{
                  width: '150px',
                  height: '150px',
                  backgroundColor: 'red',
                  borderRadius: '100%',
               }}

               transition={{
                  delay: 2,
                  duration: 2,
               }}
            ></motion.div>

         </motion.div>
         {/* Bangladesh flag end */}


         <motion.h1
            style={{
               marginBottom: '50px'
            }}

            animate={{
               fontSize: '30px',
               fontWeight: 'bold',
               textAlign: 'center',
               color: 'green',

               background: 'linear-gradient(to right, red 0%, green 100%)',
               '-webkit-background-clip': 'text',
               '-webkit-text-fill-color': 'transparent',
            }}

            transition={{
               delay: 1,
               duration: 3,
            }}

            whileHover={{
               fontSize: '50px',

               transition: {
                  delay: 0,
                  duration: 2,
               }
            }}
         >
            BANGLADESH
         </motion.h1>


         {/* button 1 */}
         <motion.div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               padding: '0 0 50px 0',
            }}
         >

            <motion.button
               style={{
                  backgroundColor: 'gray',
                  color: 'white',
                  padding: '5px 10px'
               }}

               whileHover={{
                  backgroundColor: 'blue',
                  color: 'lightgreen',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  borderRadius: '10px',

                  transition: {
                     delay: 1,
                     duration: 1,
                  }
               }}
            >
               Hover me
            </motion.button>

         </motion.div>


         {/* button 2 */}
         <motion.div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               padding: '0 0 100px 0',
            }}
         >
            <motion.button
               style={{
                  backgroundColor: 'gray',
                  color: 'white',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '5px'
               }}

               whileTap={{
                  backgroundColor: 'blue',
                  color: 'lightgreen',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  borderRadius: '10px',
               }}
            >
               Click me
            </motion.button>

         </motion.div>
      </>
   )
}

export default FramerMotion