import React from 'react'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'motion/react';


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f9a17cf6-4b1c-40db-938a-ade9560e9620");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div 
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    id='Contact' className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
      <h1 className='text-center text-2xl sm:text-4xl font-bold mb-2 text center mx-auto'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let'S Build Your Future Together</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-800'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input name='Name' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" required placeholder='Your Name'/>
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input name='Email' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" required placeholder='Your Email'/>
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 rezise-none' name="Message" id="MEssage" placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
      </form>
    </motion.div>
  )
}

export default Contact