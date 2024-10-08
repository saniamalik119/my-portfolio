
import React, { useState } from 'react';
import { FaAngleDown, FaPaintRoller } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { SiCodesignal, SiAntdesign } from "react-icons/si";
import { FaCloud } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import ExploreMeButton from '../ExploreMeButton';
import { MdOutlineWebhook } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import { SiPaloaltosoftware } from "react-icons/si";
import { GiJigsawBox } from "react-icons/gi";
const OurServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Software Development');
  const [height, setHeight] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [show, setShow] = useState(false);

  const toggleDescription = (id) => {
    setActiveId(prevId => {
      const newActiveId = prevId === id ? null : id;
      setHeight(newActiveId !== null);
      return newActiveId;
    });
  };

  const Services = [
    {
      id: 1,
      h3: 'Website Development',
      src: MdOutlineWebhook,
      des: `Olumi Tech Company builds dynamic, user-centric websites that propel businesses forward. Our web development team combines innovative design, technical expertise, and industry knowledge to deliver bespoke, mobile-friendly, and secure online solutions. `,
     
      des2: "We utilize the latest technologies and frameworks to create engaging, interactive, and scalable websites that drive results. From concept to launch, we work closely with clients to understand their unique needs and goals.",
      des3 : " Whether you are looking to enhance your online presence, improve user experience, or drive conversions, our web development services help businesses thrive in the digital landscape and achieve their online aspirations.",
      to: '/services/webdev',
    },
    {
      id: 2,
      h3: ' App Development',
      src: SiSemanticweb,
      des: `Our innovative team designs and develops bespoke mobile applications that captivate users and drive results. With a deep understanding of iOS and Android ecosystems, we harness the latest technologies to deliver scalable, secure, and intuitive solutions. From concept to launch, we collaborate closely with clients to ensure their vision is realized. `,
     
      des2: "Whether you are looking to boost engagement, streamline operations, or unlock new revenue streams, our mobile apps empower businesses to thrive in a rapidly evolving digital landscape ",
      to: '/services/app-dev',
    },
    {
      id: 3,
      h3: '3D/AR/VR Development',
      src: GiJigsawBox,
      des: `Unlock new dimensions of engagement and interaction with Olumi Tech  3D, AR, and VR solutions. Our skilled team brings concepts to life through stunning 3D models, immersive AR experiences, and fully-realized VR environments. `,
     
      des2: "We harness the latest technologies to create bespoke applications that captivate audiences, enhance training, and elevate brand storytelling. ",
      des3 : "From product demos and virtual showrooms to interactive games and simulations, our 3D/AR/VR services empower businesses to innovate, educate, and inspire. Discover new ways to connect with your audience and revolutionize your industry with Olumi Tech  cutting-edge 3D, AR, and VR expertise.",
      to: '/services/3d-ar-vr',
    },
    {
      id: 4,
      h3: 'Software Development',
      src: SiPaloaltosoftware,
      des: `At Olumi, we specialize in creating custom software solutions that are reliable, scalable, and tailored to your specific needs. Our expertise includes:`,
      li: `Enterprise software development`,
      li2: "Integrated solutions",
      li3: "Custom application development",
      des2: "Partner with us for comprehensive support, from design to deployment, and benefit from our bespoke software solutions that help businesses to stand out in the market, reach new heights and achieve business goals. ",
      to: '/services',
    },
    {
      id: 5,
      h3: 'Digital Design',
      src: MdDesignServices,
      des: 'Nowadays, a modern and engaging online presence is no longer a luxury, but a necessity. Our team of digital design experts is dedicated to crafting tailored solutions that not only personify your brand but also provide a seamless experience for your consumers across all platforms and devices.',
      li: `Wireframes and prototypes that bring your vision to life`,
      li2: "UX/UI designs that delight and engage",
      li3: "Product designs that exceed expectations",
      des2: "Our goal is to create a digital presence that perfectly captures your brand essence, values, and personality, setting you up for success in the digital landscape. ",
      to: '/design',
    },
    {
      id: 6,
      h3: 'AI Solutions',
      src: SiAntdesign,
      des: `In this fast-paced digital landscape, businesses need to leverage AI to stay ahead. Our expert team designs and implements tailored AI solutions that cater to each client specific needs, ensuring:`,
      li: `Optimized project costs and minimized risks`,
      li2: "Enhanced operational efficiency through automation",
      li3: "Actionable insights for strategic decision-making",
      des2: "Our seasoned IT professionals collaborate closely with clients to design and implement bespoke AI solutions that address unique challenges and goals. Join forces with us to harness the power of AI and propel your business forward.",
      to: '/ai-service',
    },
    {
      id: 7,
      h3: 'SEO',
      src: TbSeo,
      des: 'In a crowded digital landscape, a strategic SEO plan is crucial for success. Our team of experts will help you:',
      li: ` Identify and capitalize on key opportunities`,
      li2: "Develop a content strategy that resonates with your audience",
      li3: "Build high-quality links to enhance your online credibility",
      des2: " So allow us to create a customized SEO plan that drives real results and takes your business to the next level. ",
      to: '/services/seo',
    },
    {
      id: 8,
      h3: 'Digital marketing',
      src: SiCodesignal,
      des: 'In this fast-paced digital world, a robust online presence is crucial for business success. Our full-service digital marketing services will help you:',
      li: `Develop a strong brand identity and message`,
      li2: "Reach new customers and retain existing ones",
      li3: "Drive business growth and revenue",
      des2: "With our comprehensive approach, you will experience, increased online visibility and credibility, improved customer engagement and conversions.",
      to: '/services/digital-marketing',
    },
    {
      id: 9,
      h3: 'Cloud Solution',
      src: FaCloud,
      des: 'In this digital landscape, cloud technology is key to staying ahead. Our expert cloud solutions enable businesses to:',
      li: `Enhance productivity and reduce overheads`,
      li2: "Accelerate time-to-market and improve scalability",
      li3: "Increase agility and innovation",
      des2: "By partnering with us, you will experience, improved business efficiency and reduced costs, enhanced collaboration and innovation.",
      to: '/cloud-service',
    },
  ];

  return (
    <div className={`w-full ${height ? `lg:min-h-[900px] ${activeId > 3 ? 'lg:h-[1050px] h-[1700px]' : 'min-h-[1200px]'}` : 'min-h-screen'} transition-all duration-200 trustedDiv  flex flex-col items-center justify-start py-10 px-6 lg:py-20 lg:px-28  text-secondary`}>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-overlock text-5xl mb-4 font-semibold text-center'>
            Our Services
          </h1>
          <p className='font-poppins lg:w-[500px]  text-center'>
          Explore Our Comprehensive Service Offerings and Solutions Tailored to Your Specific Needs
          </p>
          <hr className='mt-3 lg:w-[200px] border-t-4 border-tirtry items-center mx-auto' />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-start gap-2 pt-20 relative'>
        {Services.map((service) => (
          <div key={service.id} >
            <div onClick={() => toggleDescription(service.id)} className={`max-w-[590px] min-h-[100px] ${activeId === service.id ? 'bg-white text-tirtry' : 'bg-[#074657] text-secondary'} font-poppins py-6 px-12 flex gap-4 transition-all duration-200 shadow-lg cursor-pointer`}>
              <div className='flex flex-col gap-4 text-center'>
                <div className='flex gap-4 items-center'>
                  <div className='border-4 border-secondary p-6 flex items-center w-12 justify-center rounded-full h-12'>
                    <p className={`${activeId === service.id ? 'text-primary' : 'text-secondary'} text-2xl`}>{<service.src />}</p>
                  </div>
                  <h3 className={`  font-poppins font-semibold lg:text-xl text-sm whitespace-nowrap ${activeId === service.id ? 'text-primary' : 'text-secondary'}`}>{service.h3}</h3>
                </div>
              </div>
            </div>
            {activeId === service.id && (
              <div className={`flex justify-start mx-auto left-0  flex-col absolute lg:h-[390px] lg:w-[1125px] bg-white text-primary z-40 py-2 lg:py-6 p-4 lg:px-10 font-poppins transition-all duration-150`}>
                <div className='hidden lg:flex justify-end items-center'>
                  <button onClick={() => toggleDescription(service.id)}><IoMdCloseCircle className='text-3xl text-forth' /></button>
                </div>
                <div className='flex flex-col items-start justify-start text-start'>
                  <h1 className='py-4 font-semibold capitalize text-forth text-2xl'> {service.h3}</h1>
                  <p className='text-sm lg:text-md '>{service.des}</p>
                {service?.li && (
                  <div className=' my-2'>
                  <li>{service?.li}</li>
                    <li>{service?.li2}</li>
                    <li>{service?.li3}</li>
                  </div>
                )}
                  <p className=' mt-4 text-sm lg:text-md'>{service.des2}</p>
                  {service.des3 && (
                    <p className=' mt-4 text-sm lg:text-md'>{service.des3}</p>
                  )}
                  <div className='mt-6'>
                    <ExploreMeButton to={service.to} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
