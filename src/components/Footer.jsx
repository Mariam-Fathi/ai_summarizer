import { BiMessage } from 'react-icons/bi';
import { facebook, instagram, twitter } from '../assets';

const Footer = () => {
  return (
    <footer id="footer" className='w-full sm:px-16 px-8 py-12 bg-[#031B34]'>
      <div className='text-white max-container flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a 
            href="/" 
            className="relative flex justify-center items-center"
          >
            <BiMessage className="w-[50%] h-[55px] max-sm:h-[43px] text-[#FF4820] relative opacity-90 top-[3px] max-sm:top-[2px]"/>
            <span className="text-white text-[32px] max-sm:text-[24px] font-BlackOpsOne font-medium relative right-[38px] max-sm:right-[29px] ">
              SUMM
            </span>
          </a>
          <p className='mt-6 sm:max-w-sm text-white max-sm:text-base text-lg '>
           This helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.
          </p>
          
          <div className='flex items-center gap-5 mt-8'>
            <div className='flex justify-center items-center w-12 h-12 bg-[#FF4820] rounded-full'>
              <img src={instagram} alt='' width={24} height={24} />
            </div>            
            
            <div className='flex justify-center items-center w-12 h-12 bg-[#FF4820] rounded-full'>
              <img src={facebook} alt='' width={24} height={24} />
            </div>
            
            <div className='flex justify-center items-center w-12 h-12 bg-[#FF4820] rounded-full'>
              <img src={twitter} alt='' width={24} height={24} />
            </div>
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            <div>
              <h4 className=' text-[28px] leading-normal font-bold mb-6'>Links</h4>
              <ul>
                <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">Overons</a></li>
                <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">Social Media</a></li>
                <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">Counters</a></li>
                <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">Contact</a></li>
              </ul>
            </div>
           
            <div>
            <h4 className=' text-[28px] leading-normal font-bold mb-6'>Company</h4>
            <ul>
              <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">Terms & Conditions</a></li>
              <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">Privacy Policy</a></li>
              <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">Contact</a></li>
            </ul>
            </div>
           
            <div>
            <h4 className=' text-[28px] leading-normal font-bold mb-6'>Get in touch</h4>
            <ul>              
              <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">085-132567</a></li>
              <li className='mt-3 text-white max-sm:text-sm text-base  hover:text-[#FF4820]'><a href="/">info@payme.net</a></li>
            </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;