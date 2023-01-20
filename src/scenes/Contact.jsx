import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function Contact(){

    const {
    register, 
    trigger, 
    formState:{errors}} = useForm();

    const onSubmit = async(e) =>{
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }
    return(
        <section id="contact" className=" z-1 flex flex-col font-monospace gap-16 mt-14 text-dark-brown py-24 px-8">
        <div className="md:text-6xl sm:text-4xl text-center md:text-left text-3xl">
                <h1>Contact me</h1>
             </div>

        <div className="md:flex md:jusitfy-between gap-16 mt-15">
               <motion.div 
               className="basis-1/2 mt-10 md:mt-0 flex justify-center"
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:0.2}}
               variants={{
                   hidden:{opacity:0, x:-50},
                   visible:{opacity: 1, x:0}
               }}>
               <img src="../assets/contact-image.jpeg" alt="contact"></img>
               </motion.div>

               <motion.div 
               className="basis-1/2 mt-10 md:mt-0 flex justify-center"
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5, delay:0.2}}
               variants={{
                   hidden:{opacity:0, x:-50},
                   visible:{opacity: 1, x:0}
               }}>

               <form
               target="_blank"
               onSubmit={onSubmit}
               action="https://formsubmit.co/viswanathsai21@gmail.com"
               method="POST">

               <input className="w-full bg-lbrown font-semibold placeholder-opaque-black p-3"
                type="text"
                placeholder="NAME"
                {...register("name", {
                    required: true,
                    maxLength: 100
                })}
               />
               {errors.name &&(
                <p className="text-red mt-1">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max Length is 100ch."}
                </p>
               )}

               

               <input className="w-full bg-lbrown font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A_Z0-9.-]+\.[A-Z]{2,}$/i,

                })}
               />
               {errors.email &&(
                <p className="text-red mt-1">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "pattern" && "Invalid email address"}
                </p>
               )}

               <textarea className="w-full bg-lbrown font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                rows="4"
                cols="50"
                placeholder="MESSAGE"
                {...register("message", {
                    required: true,
                    maxLength: 2000

                })}
               />
               {errors.message &&(
                <p className="text-red mt-1">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 2000ch"}
                </p>
               )}

               <button
               type="submit"
               className="p-5 mt-5 w-full bg-lbrown font-semibold text-brown hover:bg-brown hover:text-v-light-brown transition duration-500">
               Message me
               </button>

               </form>

               </motion.div>

        </div>

        </section>
    )
}

export default Contact;