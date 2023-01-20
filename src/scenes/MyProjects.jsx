import React from "react";
import { motion } from "framer-motion";


const container ={
    hidden:{},
    visible: {
        transition: { staggerChildren: 0.4 }
    }
}

const projectVariant ={
    hidden: {opacity: 0, scale:0.8},
    visible: {opacity: 1, scale: 1}
}

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500 bg-lbrown z-30 flex flex-col justify-center items-center text-center p-16 text-brown`;

const Project = ({title}) =>{
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return(
        <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
        <p className="text-2xl font-monospace">{title}</p>
        <p className="mt-7">
            lorem ipsum dcadse diasjjww feiwjnw jijwiwiwn  wwiqsonekdm dueiw0fm.
        </p>
        
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle}></img>

        </motion.div>
    )
}




function MyProjects(){

    return(
        <section id="projects" className="mt-14">
        <div className="text-dark-brown py-24 px-8">
        <div className="md:text-6xl sm:text-4xl text-center md:text-left text-3xl mb-16 font-monospace">
                <h1>My Projects</h1>
             </div>

        {/* PROJECTS */}
        <div className="flex justify-center">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        className="sm:grid sm:grid-cols-3">

        <div className="flex justify-center items-center text-center bg-lbrown max-w-[400px] max-h-[400px] text-2xl font-monospace font-semibold">
            <p className="border-4 border-v-light-brown px-4 py-8">MINIMALIST INTERFACES</p>
        </div>

        <Project title="Project 1" />
        <Project title="Project 2" />


        <Project title="Project 3" />
        <Project title="Project 4" />
        <Project title="Project 5" />

        <Project title="Project 6" />
        <Project title="Project 7" />

        <div className="flex justify-center items-center text-center bg-lbrown max-w-[400px] max-h-[400px] text-2xl font-monospace font-semibold">
            <p className="border-4 border-v-light-brown px-4 py-8">BEAUTIFUL DESIGNS</p>
        </div>


        </motion.div>

        </div>

        </div>
        </section>
    )
}

export default MyProjects