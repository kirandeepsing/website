import React from 'react'
import ace from "../assets/ace.webp"
import acehero from "../assets/acehero.webp"
import a from "../assets/a.webp"
import b from "../assets/b.webp"
import c from "../assets/c.webp"
import e from "../assets/e.webp"
import f from "../assets/f.webp"
import g from "../assets/g.webp"
import h from "../assets/h.webp"
import i from "../assets/i.webp"
import j from "../assets/j.webp"
import main1 from "../assets/main1.webp"
import main2 from "../assets/main2.webp"
import main3 from "../assets/main3.webp"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"


const NavBar = () => {
  return (
    <>
      <div className='navbar1 ml-5 lg:ml-0 w-[640px] sm:w-[740px] md:w-[1002px] lg:w-full lg:text-lg '>
        <h2 className='h-20 lg:h-8 bg-white shadow-2xl  text-3xl flex-wrap text-center'>For More Info Call Us At: 98148-53349, 62392-16916</h2>
      </div>
      <div className='navbar2  ml-5 lg:ml-0  w-[640px]  sm:w-[740px] md:w-[1002px] lg:w-full flex h-52 lg:h-32 bg-gray-900 relative'>
      <h2 className='absolute'>sidebar</h2>
        <img className='absolute h-44 lg:h-28 top-2 left-8' src={ace} alt="" />
        <ul className=' w-[640px] sm:w-[740px] md:w-[1002px] lg:flex lg:flex-row  lg:w-full lg:block hidden  flex-col ml-52 space-x-20 mt-10 text-gray-300 text-lg'>
            <li>- Home</li>
            <li>about us </li> 
            <li>courses</li>
            <li>contact us </li>
            <li>More</li>
        </ul>
        <h2 className="mt-10 ml-96 lg:ml-32 text-3xl lg:text-lg text-gray-300 ">userlogo</h2>
      </div>
    <div className='w-[640px] sm:w-[740px] md:w-[1002px] lg:w-full'>
        <img className='w-[640px]  ml-5 lg:ml-0 sm:w-[740px] lg:w-full h-[500px]' src={acehero} alt="" />
    </div>
   <div className='lg:h-96 lg:w-full  ml-5 lg:ml-0 h-[500px] w-[610px] sm:w-[740px] md:w-[1002px]  text-3xl flex flex-col space-y-10 lg:text-lg items-center justify-center'>
    <h1>About Ace-Agasthya Coaching Classes</h1>
    <p>At Ace-Agasthya Coaching Classes, we believe that education should be accessible to everyone. We strive to provide affordable and <br /> high-quality educational services that empower students to achieve their academic and personal goals. neet coaching classes jee <br /> coaching Kharar</p>
   </div>
   <div className='w-[640px]  ml-5 lg:ml-0 sm:w-[740px] md:w-[1002px] lg:w-full h-[500px]'>
   <Carousel className='' showThumbs={false} autoPlay infiniteLoop>
      <div className='h-[500px]'>
        <img className='h-[500px]'  src={a} alt="img1" />
      </div  >
      <div className='h-[500px]'>
        <img className='h-[500px]' src={b} alt="img2" />
      </div >
      <div className='h-[500px]' >
        <img  className='h-[500px]'src={c} alt="img3" />
      </div>
    </Carousel>
   </div>
   <div className='w-[640px] sm:w-[740px] md:w-[1002px] lg:w-full'>
    <h1 className='text-center mt-20 text-lg'>Class room Courses by Ace-Agasthya Coaching Classes</h1>
    <div className='lg:flex-row w-[610px] sm:w-[740px] flex flex-col space-x-6 mt-10 lg:text-sm ml-10 lg:w-full'>
<div className='lg:w-96 w-[610px] sm:w-[740px] text-2xl mt-2 lg:mt-0 lg:text-lg'>
  <h1 className='text-center'>iit jee | neet | nda</h1>
  <img src={e} alt="" />
  <p> At Ace Agasthya, we provide a strong foundation for students aspiring to excel in IIT-JEE and NEET entrance exams. Our structured curriculum, expert faculty, and student-centric approach ensure a deep understanding of Physics, Chemistry, Biology, and Mathematics from the ground up. coaching classes jee coaching neet coaching classes Kharar</p>
</div>
<div  className='lg:w-96 w-[640px] sm:w-[740px] md:w-[1002px] text-2xl mt-2 lg:mt-0 lg:text-lg'>
  <h1 className='text-center'>mathematics</h1>
  <img src={f} alt="" />
  <p>At Ace Agasthya coaching classes , we lay a strong mathematical foundation for students aspiring to excel in IIT-JEE and NEET ( neet coaching classes jee coaching) . Our Mathematics foundation program is designed to develop problem-solving skills, logical reasoning, and conceptual clarity from an early stage, in your city Kharar</p>
</div>
<div  className='lg:w-96 border-2 w-[640px] sm:w-[740px] md:w-[1002px] text-2xl mt-2 lg:mt-0 lg:text-lg'>
  <h1 className='text-center'>science</h1>
  <img src={g} alt="" />
  <p> At Ace Agasthya Coaching Classes, we provide a comprehensive Science foundation program for students aiming to crack IIT-JEE and NEET. Our structured approach ensures a deep understanding of Physics, Chemistry, and Biology</p>
</div>
    </div>
   </div>
   <div className='w-[640px] sm:w-[740px] md:w-[1002px] lg:w-full'>
    <div className='lg:flex-row w-[630px] flex flex-col space-x-6 mt-10 text-lg ml-10 lg:w-full'>
<div className='lg:w-96 w-[610px] sm:w-[740px] text-2xl mt-2 lg:mt-0-96 lg:text-lg'>
  <h1 className='text-center'>iit jee | neet | nda</h1>
  <img src={h} alt="" />
  <p>  At Ace Agasthya, we offer a strong foundation in Commerce for students aspiring to build careers in Finance, Business, and Management. Our Commerce program is designed to develop clarity, analytical thinking, and problem-solving skills in core subjects like Accountancy, Economics </p>
</div>
<div  className='lg:w-96 w-[640px] sm:w-[740px] md:w-[1002px] text-2xl mt-2 lg:mt-0-96 lg:text-lg'>
  <h1 className='text-center'>mathematics</h1>
  <img src={i} alt="" />
  <p> At Ace Agasthya Coaching Classes, we offer a comprehensive Foundation Program designed for students from Class 6 to 10 to build a strong academic base for competitive exams like IIT-JEE, NEET, CA, and other professional courses. </p>
</div>
<div  className='lg:w-96 w-[640px] sm:w-[740px] md:w-[1002px] text-2xl mt-2 lg:mt-0 lg:text-lg'>
  <h1 className='text-center'>science</h1>
  <img src={j} alt="" />
  <p>  At Ace Agasthya Coaching Classes, we provide expert coaching for Government Job Exams, helping aspirants achieve success in Banking, SSC, Railways, UPSC, State PSC, Defence, and other competitive exams.  </p>
</div>
    </div>
   </div>
   <div className=' flex flex-col h-[1000px] lg:w-full w-[640px]  sm:w-[740px] md:w-[1002px] mt-4 lg:mt-0 lg:flex lg:flex-row space-y-6 space-x-6 ml-5 lg:h-72'>
    <div className='relative flex  justify-center items-center lg:h-auto h-[300px]'>
    <img className='lg:w-96 w-[640px] relative h-72  ' src={main1} alt="" />
    <p className='text-white  font-bold text-3xl  absolute top-0'>COACHING <br /> CLASSES <br /> NEET <br /> COACHING <br /> CLASSES <br /> JEE <br /> COACHING <br /> KHARAR</p>
    </div>
    <div className='relative flex justify-center items-center'>
    <img className='lg:w-96 w-[640px] sm:w-[740px] md:w-[1002px] relative h-72' src={main2} alt="" />
    <p className='text-white  font-bold text-3xl  absolute top-0'>COACHING <br /> CLASSES <br /> NEET <br /> COACHING <br /> CLASSES <br /> JEE <br /> COACHING <br /> KHARAR</p>
    </div>
    <div className='relative flex justify-center items-center'>
    <img className='lg:w-96 w-[640px] sm:w-[740px] md:w-[1002px] relative h-72' src={main3} alt="" />
    <p className='text-white font-bold text-3xl absolute top-0'>COACHING <br /> CLASSES <br /> NEET <br /> COACHING <br /> CLASSES <br /> JEE <br /> COACHING <br /> KHARAR</p>
    </div>
   </div>
   <div className='w-[640px] md:w-[1002px] lg:w-full' >
   <div
      className="relative  ml-5 lg:ml-0 h-screen mt-0 lg:mt-10  w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/file-1720553225363-8064931ae669image?w=416&dpr=2&auto=format&fit=crop&q=60')` }} // 👈 set your image path
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Text content */}
     <Carousel className=' w-[640px]  ml-5 lg:ml-0 sm:w-[740px] md:w-[1002px]  z-10 flex h-full items-center justify-center text-center text-white px-4' showThumbs={false} autoPlay infiniteLoop>
      <div className=''>
        <img className='h-96 w-96' src={a} alt="img1" />
        <p>ratings</p>
      </div>
      <div>
        <img className='h-96 w-96' src={b} alt="img2" />
      </div>
      <div> 
        <img className='h-96 w-96' src={c} alt="img3" />
      </div>
     
    </Carousel>
    </div>
   </div>
   <div className='flex w-[640px]  ml-5 lg:ml-0 sm:w-[740px] md:w-[1002px] ml-0 lg:ml-20'>
    <div className='w-[500px]  mt-10 space-y-6 text-lg'>
      <h1>Contact Us</h1>
      <button className='h-10 w-60 bg-yellow-50 border-2 rounded-lg'>message us on whatsapp</button>
      <h2>Ace-Agasthya Coaching ClassesAce-Agasthya <br /> Coaching</h2>
      <p>Ace-Agasthya Institute, Desu Majra Road, <br /> opposite Sanatan Dharam Temple, Sector 125, <br /> Sunny Enclave, Kharar, Punjab, India</p>
      <h3>9988191261, 6239216916</h3>
      <h2>hours</h2>
      <p>Open today 09:00 am – 08:00 pm
 </p>
    </div>
    <div className='w-[500px] mt-10'>
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1234567890123!2d76.70000000000002!3d30.700000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe123456789ab%3A0xabcdef1234567890!2sGurudwara%20Sahib%20Daun!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
  width="100%"
  height="450"
></iframe>
    </div>
   </div>
   <div  className='h-52 w-[630px]  ml-5 lg:ml-0 sm:w-[740px] md:w-[1002px] text-4xl text-gray-400 flex justify-center items-center'>
    Connect With Us On Instagram 
   </div>
   <div
      className="relative w-[640px]  ml-5 lg:ml-0 sm:w-[740px] md:w-[1002px] h-96 lg:w-full bg-cover bg-center"
      style={{ backgroundImage: `url('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1234567890123!2d76.70000000000002!3d30.700000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe123456789ab%3A0xabcdef1234567890!2sGurudwara%20Sahib%20Daun!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin')` }} // 👈 set your image path
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
        <div>
          <h1 className='text-2xl'>For More Inquires And Updates</h1>
     <input className='w-96 mt-20 h-12 border' type="text" placeholder='enter the email' />
     <button className='h-10 w-50 bg-transparent text-black border-2 rounded-lg'>Send </button>
        </div>
      </div>
    </div>
  <div  className='flex w-[640px]  ml-5 lg:ml-0 sm:w-[740px] md:w-[1002px] lg:w-full text-2xl lg:text-lg justify-center items-center flex-col space-y-8 bg-gray-200'>
    <h3>JEEC.U.E.T.</h3>
    <p>Ace-Agasthya Coaching Classes</p>
    <p>9988191261</p>
    <h1 className='mr-96'>Copyright © 2025 Ace-Agasthya Coaching Classes - All <br /> Rights Reserved.</h1>
    <h2 className='ml-96'>Powered By Godaddy </h2>
  </div>
    </>
  
  )
}

export default NavBar
