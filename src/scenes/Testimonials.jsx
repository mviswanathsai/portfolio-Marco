import React from "react";
import { motion } from "framer-motion";



function Testimonials(){
    const testimonialStyles= "relative bg-v-light-brown p-4 max-w-[400px] h-[350px] mt-48 flex flex-col justify-end before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 hover:shadow-2xl shadown-dark-brown transition duration-500";


    return(
        <section id="testimonials" className="w-5/6 mx-auto py-24 px-8 mt-14 text-dark-brown font-monospace">
        <div className="md:text-6xl sm:text-4xl text-center md:text-left text-3xl">
                <h1 className="text-brown">Testimonials</h1>
             </div>

        <div className="md:flex md:jusitfy-between gap-8 p-8 mt-16 border-2 border-v-light-brown">
        <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:0.2}}
               variants={{
                   hidden:{opacity:0, scale:0.8},
                   visible:{opacity: 1, scale:1}
               }}
               className={`${testimonialStyles} before:content-person1 mx-auto basis-1/3 transition duration-500`}>
               <h1 className="text-4xl text-center mb-4">Caroline</h1>
               <p className="text-center text-xl  text-brown font-monts">" Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
               </motion.div>

               <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:0.2}}
               variants={{
                   hidden:{opacity:0, scale:0.8},
                   visible:{opacity: 1, scale:1}
               }}
               className={`${testimonialStyles} before:content-person2 basis-1/3 mx-auto transition duration-500`}>
               <h1 className="text-4xl text-center mb-4 ">Yasmine</h1>
               <p className="text-center text-xl text-brown font-monts">"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "</p>
               </motion.div>

               <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:0.2}}
               variants={{
                   hidden:{opacity:0, scale:0.8},
                   visible:{opacity: 1, scale:1}
               }}
               className={`${testimonialStyles} before:content-person3 mx-auto bsis-1/3 transition duration-500`}>
               <h1 className="text-4xl text-center mb-4">Jacob</h1>
               <p className="text-center text-xl text-brown font-monts">" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "</p>
               </motion.div>
        </div>
        

        </section>
    )
}

export default Testimonials;