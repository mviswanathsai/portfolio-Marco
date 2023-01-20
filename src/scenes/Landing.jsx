import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

function Landing({setSelectedPage}){

    const isAboveMediumScreens = useMediaQuery("(min-width: 1068px)");
    return(
        <section id="home" className="flex flex-col justify-between items-center h-full gap-2 pt-10 text-dark-brown font-monospace">

        <div className="order-2 flex justify-between gap-4 w-full p-8 px-8">
           
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, delay:1.5}}
            variants={{
                hidden:{opacity:0, y:100},
                visible:{opacity: 1, y:0}
            }}
            className="sm:text-2xl xs:text-xl my-auto z-0">
             <AnchorLink 
             onClick={()=>{
                setSelectedPage("projects");
             }}
             className="text-brown"
             href="#projects">
             Scroll to discover
             </AnchorLink>
            </motion.div>
            

            
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, delay:1.5}}
            variants={{
                hidden:{opacity:0, x:100},
                visible:{opacity: 1, x:0}
            }}
            className="lg:text-8xl md:text-8xl sm:text-6xl w-[9ch] text-right text-3xl z-1">
             <h1>Creative Developer</h1>

            </motion.div>
        
        </div>

        <div className="flex flex-col sm:flex-row justify-left text-center xs:text-left sm:justify-between w-full gap-16 px-8">
            
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, delay:1}}
            variants={{
                hidden:{opacity:0, x:-100},
                visible:{opacity: 1, x:0}
            }}
            className=" w-[10ch] sm:w-[5ch] lg:text-8xl md:text-8xl sm:text-6xl sm:text-left text-center text-3xl md:mx-0 mx-auto z-1">
                
                <h1>Don Marco</h1>
                <p className="text-xl mt-3 text-center sm:text-left text-brown">Creative aristocrat</p>
              
                <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, delay:2}}
            variants={{
                hidden:{opacity:0, y:100},
                visible:{opacity: 1, y:0}
            }}
            className="sm:text-2xl xs:text-xl my-auto z-1 ">
             <SocialMediaIcons />
            </motion.div>
            

                
            </motion.div>
            
           
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, delay:2}}
            variants={{
                hidden:{opacity:0, y:-100},
                visible:{opacity: 1, y:0}
            }}
            className={`w-96 h-96 xs:mx-auto md:mx-0 hover:shadow-2xl shadow-dark-brown transition duration-500`}>
            <img src="../assets/man.jpg"></img>

             </motion.div>
             

        </div>



        </section>
    )
}

export default Landing;
