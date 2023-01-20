import React from "react";
import {motion} from "framer-motion";


function MySkills(){
    return(
        <section id="skills" className=" w-5/6 mx-auto md:h-full z-1 flex flex-col mt-14 font-monospace gap-16 text-dark-brown py-24 px-8">
            <div className="md:text-6xl sm:text-4xl text-center md:text-left text-3xl">
                <h1 className="text-brown">My Skills</h1>
             </div>
             <div className=" flex flex-col justify-between items-bottom md:items-start gap-7 md:flex-row">
             
               <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:1}}
               variants={{
                   hidden:{opacity:0, x:-50},
                   visible:{opacity: 1, x:0}
               }}
               className="bg-v-light-brown p-4 hover:shadow-2xl max-w-[500px] shadow-dark-brown transition duration-500">
               <h1 className="text-4xl">1. Intuitive</h1>
               <p className="mt-5 font-monts">Make sure to come out with fresh designs that suit the vision of the enterprise</p>
               </motion.div>

               <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:1}}
               variants={{
                   hidden:{opacity:0, x:-350},
                   visible:{opacity: 1, x:0}
               }}
               className="border-2 border-v-light-brown bg-lbrown p-4 hover:shadow-2xl max-w-[500px] shadow-dark-brown transition duration-500" >
               <h1 className="text-4xl">2. Creative</h1>
               <p className="mt-5 font-monts">Ability to provide designs ranging from minimalist to grand</p>
               </motion.div>

               <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:1}}
               variants={{
                   hidden:{opacity:0, x:-450},
                   visible:{opacity: 1, x:0}
               }}
               className= " border-2 border-v-light-brown bg-lbrown p-4 hover:shadow-2xl max-w-[500px] shadow-dark-brown transition duration-500">
               <div className="bg-v-light-brown p-4">
               <h1 className="text-4xl">3. Communcative</h1>
               <p className="mt-5 font-monts">Most importantly communicate with the customer and truly get an understand of their idea</p>
               </div>
               
               </motion.div>
             </div>
        </section>
       
    )
}

export default MySkills;