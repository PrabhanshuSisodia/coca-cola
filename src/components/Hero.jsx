import React from 'react'
// import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Fanta1 from '../assets/fanta1.png'
import Fanta2 from '../assets/fanta2.png'
import Fanta3 from '../assets/fanta3.png'
import Navbar from './Navbar'
import { div } from 'framer-motion/client'

const HeroData = [
    {
        id: 1,
        image: Fanta1,
        title: "Orange Fanta",
        subtitle: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis nisi eaque fugiat a nesciunt.",
        price: "Rs 60",
        modal: "Orange",
        bgColor: "#CF4F00",
    },
    {
        id: 2,
        image: Fanta2,
        title: "Cola Zero",
        subtitle: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis nisi eaque fugiat a nesciunt.",
        price: "Rs 80",
        modal: "Zero",
        bgColor: "#727272",
    },
    {
        id: 3,
        image: Fanta3,
        title: "Coca Cola",
        subtitle: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis nisi eaque fugiat a nesciunt.",
        price: "Rs 80",
        modal: "Cola",
        bgColor: "#ac1a00",
    },
]

const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeroData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    };

  return (
    <>
          <motion.div 
              
              initial={{ backgroundColor: activeData.bgColor }}
              animate = {{ backgroundColor: activeData.bgColor }}
              transition={{ duration: 0.8 }}
          >
            {/* Navbar Component  */}
            
            <Navbar /> 


            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
                  {/* Data Info */}
                  <div className='flex flex-col justify-center py-16
                                  md:py-0 xl:max-w-[500px] text-white order-2 md:order-1'>
                      <div  className='space-y-5 text-center md:text-left'>
                          <h1 className='text-3xl lg:text-6xl xl-text-7xl font-bold font-handwriting 
                                         text-shadow'>{activeData.title}</h1>
                          <p className='text-sm leading-loose text-white/80 '>{activeData.subtitle}</p>
                          <button onClick={handleActiveData} className='px-4 py-2 bg-white inline-block 
                                             font-normal rounded-sm'>Order Now</button>
                          
                          {/* list seprator  */}

                          <div className='flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10'>
                              <div className='w-20 h-[1px] bg-white'></div>
                              <p>Top Recommendation</p>
                              <div className='w-20 h-[1px] bg-white'></div>
                          </div>

                          {/* image switcher  */}
                          <div className='grid grid-cols-3 gap-10 '>
                              {
                                  HeroData.map((data) => {
                                      return (
                                          <div key={data.id} className='cursor-pointer'>
                                              <div>
                                                  <img src={data.image} alt="" className={ `w-[80px] img-shadow ${activeData === data.image ? "" : "opacity-50"}`} />
                                              </div>
                                              <div>
                                                  <p>{ data.price}</p>
                                                  <p>{ data.price}</p>
                                              </div>
                                          </div>
                                      );
                                  })
                              }
                          </div>
                      </div>
                  </div>
                {/* Hero Image */}
                {/* Whatsapp icon */}
            </div>  
        </motion.div>
        
          
    </>
  )
}

export default Hero
